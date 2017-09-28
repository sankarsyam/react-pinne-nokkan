import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import CardText from 'react-md/lib/Cards/CardText';
import '../../assets/stylesheets/rowDialog.scss';
import {
  loadFlow,
  loadFooterProgressStyle,
} from '../../actions/createDashBoard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export class TriggerName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerName: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flow._id) {
      this.setState({ triggerName: nextProps.flow.name });
    } else {
      this.setState({ triggerName: '' });
    }
  }
  validateTriggerName() {
    return this.state.triggerName.length > 0;
  }

  handleClick(event) {
    event.preventDefault();
    let flow = {};
    if (this.props.flow._id) {
      this.props.flow.name = this.state.triggerName;
      flow = Object.assign({}, this.props.flow);
    } else {
      flow = {
        name: this.state.triggerName,
        isActive: false,
      };
    }
    let footerStyles = Object.assign({}, this.props.footerStyles);
    footerStyles.triggerNameStyle = 'footer-progress-dark';
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.props.dispatch(loadFlow(flow));
    this.props.changeVisibility();
  }

  render() {
    return (
      <div className="triggerDiv">
        <div className="trigger-name-comp-title">
          {' '}What's name of this Guest Trigger
        </div>
        <CardText>
          <TextField
            id="triggerName"
            label="Trigger Name"
            lineDirection="center"
            value={this.state.triggerName}
            onChange={triggerName => this.setState({ triggerName })}
            className="md-cell md-cell--bottom"
          />
        </CardText>

        <div>
          <Button
            id="submit-button"
            disabled={!this.validateTriggerName()}
            label="Next"
            raised
            primary
            type="submit"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

TriggerName.propTypes = {
  flow: PropTypes.object,
  footerStyles: PropTypes.object,
  dispatch: PropTypes.func,
  updateState: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    footerStyles: state.createdashboard.footerStyles,
    flow: state.createdashboard.flow,
  };
}
export default withRouter(connect(mapStateToProps)(TriggerName));
