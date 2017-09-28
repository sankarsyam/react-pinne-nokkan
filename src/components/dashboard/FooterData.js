import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chip from 'react-md/lib/Chips';
import '../../assets/stylesheets/rowDialog.scss';
import DataChipList from './DataChipList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Settings from './Settings';

export class FooterData extends PureComponent {
  constructor(props) {
    super(props);
    this.getTriggerEvents = this.getTriggerEvents.bind(this);
  }

  getTriggerEvents(triggerCriteriaList) {
    let triggerList = [];
    if (triggerCriteriaList && triggerCriteriaList[0].trigger.type) {
      triggerCriteriaList.forEach(triggerCriteria => {
        triggerList.push(
          triggerCriteria.trigger.subType + '-' + triggerCriteria.value
        );
      });
    } else {
      triggerList = this.props.triggerEvents;
    }

    return triggerList;
  }
  render() {
    return (
      <div className="dashboard-footer-data">
        <div className="dashboard-footer-data-item">
          {this.props.flow.name ? <Chip label={this.props.flow.name} /> : null}
        </div>
        <div className="dashboard-footer-data-item">
          {this.props.flow && this.props.flow.triggerCriteria
            ? <DataChipList
                actors={this.getTriggerEvents(this.props.flow.triggerCriteria)}
              />
            : null}
        </div>

        <div className="dashboard-footer-data-item">
          {this.props.flow.action
            ? <Chip label={this.props.flow.action.name} />
            : null}
        </div>

        <div className="dashboard-footer-data-item">
          {this.props.flow.action && this.props.flow.action.actors
            ? <DataChipList actors={this.props.flow.action.actors} />
            : null}
        </div>
        <div className="dashboard-footer-data-item">
          {this.props.flow.action &&
          (this.props.flow.action.expiresInMinutes ||
            this.props.flow.action.shouldSendTextMessage ||
            this.props.flow.action.offerLimit ||
            this.props.flow.action.isTriggerEvent)
            ? <Settings settings={this.props.flow.action} />
            : null}
        </div>
      </div>
    );
  }
}

FooterData.propTypes = {
  flow: PropTypes.object,
  triggerEvents: PropTypes.array,
  targetedActors: PropTypes.array,
  actionSettings: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    triggerEvents: state.createdashboard.triggerEvents,
    targetedActors: state.createdashboard.targetedActors,
  };
}
export default withRouter(connect(mapStateToProps)(FooterData));
