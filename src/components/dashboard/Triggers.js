import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import '../../assets/stylesheets/rowDialog.scss';
import SelectField from 'react-md/lib/SelectFields';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MdAdd from 'react-icons/lib/md/add';
import Trigger from './Trigger';
import { loadTriggerDetails } from '../../actions/triggers';
import {
  loadFlow,
  loadFooterProgressStyle,
  loadTriggerEventsData,
} from '../../actions/createDashBoard';

let triggersForTypes = [];
export class Triggers extends PureComponent {
  componentDidMount() {
    this.props.dispatch(loadTriggerDetails());
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      triggerTypes: nextProp.triggerList.map(item => {
        return item.categoryName;
      }),
    });
    if (nextProp.flow._id) {
      let triggerCategoryList = [];
      nextProp.flow.triggerCriteria.forEach(triggerCriteria => {
        let triggerEvent = {};
        let triggerSubType = {};
        triggerSubType._id = triggerCriteria.trigger._id;
        triggerSubType.subType = triggerCriteria.trigger.subType;
        triggerEvent.triggerSubType = triggerSubType;
        triggerEvent.triggerType = triggerCriteria.trigger.type;
        triggerEvent.triggerValue = triggerCriteria.value;
        triggerCategoryList.push(triggerEvent);
      });
      this.setState({ triggerCategories: triggerCategoryList });
      this.setState({ isTriggerEvenValid: true });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isTriggerEvenValid: false,
      isTriggerValueSelected: false,
      triggerTypes: [],
      triggersForTypes: [],
      triggerValues: [],
      triggerCategories: [],
      triggerEventRow: {
        triggerType: {},
        triggerSubType: {},
        triggerValue: '',
      },
    };
    this.handleTriggerTypeOnChange = this.handleTriggerTypeOnChange.bind(this);
    this.loadTriggerTypes = this.loadTriggerTypes.bind(this);
    this.loadTriggersForType = this.loadTriggersForType.bind(this);
    this.handleOnTriggerChange = this.handleOnTriggerChange.bind(this);
    this.handleOnTriggeerValueChange = this.handleOnTriggeerValueChange.bind(
      this
    );
    this.handleAddTrigger = this.handleAddTrigger.bind(this);
    this.removeFromTriggerList = this.removeFromTriggerList.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  handleTriggerTypeOnChange(newValue, newActiveIndex, event) {
    this.loadTriggersForType(newValue);
    let triggerEvent = this.state.triggerEventRow;
    triggerEvent.triggerType = this.state.triggerTypes[newActiveIndex];
    this.setState({ triggerEventRow: triggerEvent });
  }

  handleOnTriggerChange(newValue, newActiveIndex, event) {
    let triggerEvent = this.state.triggerEventRow;
    triggerEvent.triggerSubType = this.state.triggersForTypes[newActiveIndex];
    this.setState({ triggerEventRow: triggerEvent });
    this.setState({
      triggerValues: this.state.triggersForTypes[newActiveIndex].values,
    });
  }

  handleOnTriggeerValueChange(newValue, newActiveIndex, event) {
    let triggerEvent = this.state.triggerEventRow;
    triggerEvent.triggerValue = newValue;
    this.setState({ triggerEventRow: triggerEvent });
    this.setState({ isTriggerValueSelected: true });
  }

  validateTriggerEvent() {
    return this.state.isTriggerEvenValid;
  }

  loadTriggerTypes() {
    this.setState({
      triggerTypes: this.props.triggerList.map(item => {
        return item.categoryName;
      }),
    });
  }

  loadTriggersForType(triggerType) {
    this.props.triggerList.forEach(item => {
      if (item.categoryName === triggerType) {
        triggersForTypes = item.triggers;
      }
    });
    this.setState({ triggersForTypes: triggersForTypes });
  }

  handleAddTrigger() {
    let categeories = this.state.triggerCategories;
    categeories.push(this.state.triggerEventRow);
    this.setState({ isTriggerEvenValid: true });
    this.setState({ triggerCategories: categeories });
    this.setState({ triggerTypes: [] });
    this.setState({ triggerEventRow: {} });
    this.setState({ isTriggerValueSelected: false });
    this.setState({ triggersForTypes: [] });
    this.setState({ triggerValues: [] });
  }

  getCriterias() {
    let triggerCriteria = [];
    this.state.triggerCategories.forEach(triggerCategory => {
      triggerCriteria.push({
        trigger: triggerCategory.triggerSubType._id,
        value: triggerCategory.triggerValue,
      });
    });
    return triggerCriteria;
  }

  getTriggerListFooterData() {
    let triggerList = [];
    this.state.triggerCategories.forEach(triggerCategory => {
      triggerList.push(
        triggerCategory.triggerSubType.subType +
          '-' +
          triggerCategory.triggerValue
      );
    });
    return triggerList;
  }

  handleSubmitButtonClick(event) {
    event.preventDefault();
    let flow = Object.assign({}, this.props.flow);
    flow.triggerCriteria = this.getCriterias();
    this.props.dispatch(loadFlow(flow));
    this.props.dispatch(loadTriggerEventsData(this.getTriggerListFooterData()));
    let footerStyles = Object.assign({}, this.props.footerStyles);
    footerStyles.triggerEventStyle = 'footer-progress-dark';
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.setState({ triggerCategories: [] });
    this.props.updateEventState();
  }

  removeFromTriggerList(index) {
    let categeories = Object.assign([], this.state.triggerCategories);
    categeories.splice(index, 1);
    if (categeories.length === 0) {
      this.setState({ isTriggerEvenValid: false });
    }
    this.setState({ triggerCategories: categeories });
  }

  render() {
    return (
      <div className="triggers-event-comp">
        <div className="triggers-event-comp-title">ADD TRIGGER EVENTS</div>
        <label className="trigger-event-sub-title">
          CREATE SINGLE OR CHAINED TRIGGERS
        </label>
        <div className="triggers-event-comp-data">
          <div className="triggers-event-comp-line-items">
            {this.state.triggerCategories.map((triggerEvent, index) => {
              return (
                <Trigger
                  triggerEvent={triggerEvent}
                  index={index}
                  key={index}
                  removeFromTriggerList={this.removeFromTriggerList}
                />
              );
            })}
          </div>
          <div className="triggers-event-comp-items">
            <section className="md-grid">
              <SelectField
                id="trigger-event-list"
                label="Trigger Type"
                placeholder="Trigger Type"
                menuItems={this.state.triggerTypes}
                itemLabel="name"
                itemValue="value"
                className="md-cell"
                onChange={this.handleTriggerTypeOnChange}
                onClick={this.loadTriggerTypes}
              />
              <SelectField
                id="triggerevent-sub-type"
                label="Trigger Sub-type"
                placeholder="Trigger Sub-type"
                menuItems={this.state.triggersForTypes}
                itemLabel="subType"
                itemValue="_id"
                className="md-cell seletc-item"
                onChange={this.handleOnTriggerChange}
              />
              <SelectField
                id="triggerevent-value"
                label="Trigger Value"
                placeholder="Trigger Value"
                menuItems={this.state.triggerValues}
                itemLabel="name"
                itemValue="value"
                className="md-cell"
                onChange={this.handleOnTriggeerValueChange}
              />
              <MdAdd
                className={
                  'triggers-event-add-btn-' + this.state.isTriggerValueSelected
                }
                onClick={this.handleAddTrigger}
              />
            </section>
          </div>
        </div>
        <hr className="trigger-event-hr" />
        <div className="trigger-button">
          <Button
            id="submit-button"
            disabled={!this.validateTriggerEvent()}
            label="NEXT"
            raised
            primary
            type="submit"
            onClick={this.handleSubmitButtonClick}
          />
        </div>
      </div>
    );
  }
}

Triggers.propTypes = {
  flow: PropTypes.object,
  dispatch: PropTypes.func,
  footerStyles: PropTypes.object,
  triggerEventDetails: PropTypes.object,
  updateEventState: PropTypes.func,
  triggerEvents: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    footerStyles: state.createdashboard.footerStyles,
    triggerList: state.trigger.triggerList,
    triggerEvents: state.createdashboard.triggerEvents,
  };
}
export default withRouter(connect(mapStateToProps)(Triggers));
