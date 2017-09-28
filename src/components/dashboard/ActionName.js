import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import CardText from 'react-md/lib/Cards/CardText';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  loadFlow,
  loadFooterProgressStyle,
} from '../../actions/createDashBoard';

export class ActionName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionName: '',
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    if (this.props.flow && this.props.flow._id) {
      this.state = {
        actionName: this.props.flow.action.name,
      };
    }
  }

  handleSubmitButtonClick = () => {
    event.preventDefault();
    let flow = {};
    if (this.props.flow._id) {
      this.props.flow.action.name = this.state.actionName;
      flow = Object.assign({}, this.props.flow);
    } else {
      flow = Object.assign({}, this.props.flow);
      let action = {
        name: this.state.actionName,
      };
      flow.action = action;
    }
    this.props.dispatch(loadFlow(flow));
    let footerStyles = Object.assign({}, this.props.footerStyles);
    footerStyles.triggerActionStyle = 'footer-progress-dark';
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.props.updateActionNameState();
  };

  validateActionName() {
    return this.state.actionName.length > 0;
  }

  render() {
    return (
      <div className="action-name-comp">
        <div className="trigger-event-comp-title">CREATE YOUR ACTION</div>
        <CardText>
          <TextField
            id="action-name"
            label="Action Name"
            lineDirection="center"
            value={this.state.actionName}
            onChange={actionName => this.setState({ actionName })}
            className="md-cell md-cell--bottom"
          />
        </CardText>
        <div>
          <Button
            id="submit-button"
            disabled={!this.validateActionName()}
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

ActionName.propTypes = {
  flow: PropTypes.object,
  dispatch: PropTypes.func,
  footerStyles: PropTypes.object,
  updateActionNameState: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    footerStyles: state.createdashboard.footerStyles,
  };
}
export default withRouter(connect(mapStateToProps)(ActionName));
