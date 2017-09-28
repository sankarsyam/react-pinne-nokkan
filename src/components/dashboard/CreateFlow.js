/* Header.jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/createFlow.scss';
import FooterData from './FooterData';
import FooterProgress from './FooterProgress';
import '../../assets/stylesheets/rowDialog.scss';
import Button from 'react-md/lib/Buttons/Button';
import TriggerName from './TriggerName';
import Triggers from './Triggers';
import ActionName from './ActionName';
import CreateAction from './CreateAction';
import StaffTarget from './StaffTarget';
import ActionSetting from './ActionSetting';
import ErrorComponent from './ErrorComponent';
import SaveFlow from './SaveFlow';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  resetFlow,
  loadFooterProgressStyle,
} from '../../actions/createDashBoard';

let footerStyles = {
  triggerNameStyle: 'footer-progress-light',
  triggerEventStyle: 'footer-progress-light',
  triggerActionStyle: 'footer-progress-light',
  staffTargetStyle: 'footer-progress-light',
  settingsStyle: 'footer-progress-light',
};

export class CreateFlow extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
  }

  constructor(props) {
    super(props);
    this.state = {
      pageX: null,
      pageY: null,
      showTriggerName: true,
      showTriggerEvent: false,
      showActionName: false,
      showCreateAction: false,
      showStaffTarget: false,
      showActionSetting: false,
      showSaveFlow: false,
      showAfterSave: false,
    };
    this._closeDialog = this._closeDialog.bind(this);
    this.changeVisibility = this.changeVisibility.bind(this);
    this.closeAfterSave = this.closeAfterSave.bind(this);
  }

  _closeDialog() {
    this.setState({
      showTriggerName: true,
      showTriggerEvent: false,
      showActionName: false,
      showCreateAction: false,
      showStaffTarget: false,
      showActionSetting: false,
      showSaveFlow: false,
    });
    this.props.dispatch(resetFlow());
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.props.closeDialog();
  }

  changeVisibility = () => {
    this.setState({
      showTriggerName: !this.state.showTriggerName,
      showTriggerEvent: !this.state.showTriggerEvent,
    });
  };

  updateEventState = () => {
    this.setState({
      showTriggerEvent: !this.state.showTriggerEvent,
      showActionName: !this.state.showActionName,
    });
  };

  updateActionNameState = () => {
    this.setState({
      showActionName: !this.state.showActionName,
      showCreateAction: !this.state.showCreateAction,
    });
  };

  updateCreatActionNameState = () => {
    this.setState({
      showCreateAction: !this.state.showCreateAction,
      showStaffTarget: !this.state.showStaffTarget,
    });
  };

  updateStaffTarget = () => {
    this.setState({
      showStaffTarget: !this.state.showStaffTarget,
      showActionSetting: !this.state.showActionSetting,
    });
  };

  updateActionSetting = () => {
    this.setState({
      showActionSetting: !this.state.showActionSetting,
      showSaveFlow: !this.state.showSaveFlow,
    });
  };

  updateFlowSave = () => {
    if (!this.props.error) {
      this.setState({
        showTriggerName: !this.state.showTriggerName,
        showSaveFlow: !this.state.showSaveFlow,
      });
    }
    this.props.dispatch(resetFlow());
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
  };

  closeAfterSave = () => {
    this.updateFlowSave();
    this._closeDialog();
  };

  render() {
    return (
      <div className={'create-flow-component-' + this.props.visible}>
        <div className={'create-flow-component'}>
          <Button
            className="create-flow-component-close-btn"
            onClick={this._closeDialog}
            icon
          >
            close
          </Button>
          {this.props.error ? <ErrorComponent /> : null}
          {this.state.showTriggerName
            ? <TriggerName changeVisibility={this.changeVisibility} />
            : null}
          {this.state.showTriggerEvent
            ? <Triggers updateEventState={this.updateEventState} />
            : null}
          {this.state.showActionName
            ? <ActionName updateActionNameState={this.updateActionNameState} />
            : null}
          {this.state.showCreateAction
            ? <CreateAction
                updateCreatActionNameState={this.updateCreatActionNameState}
              />
            : null}
          {this.state.showStaffTarget
            ? <StaffTarget updateStaffTarget={this.updateStaffTarget} />
            : null}
          {this.state.showActionSetting
            ? <ActionSetting updateActionSetting={this.updateActionSetting} />
            : null}
          {this.state.showSaveFlow
            ? <SaveFlow
                _closeDialog={this._closeDialog}
                closeAfterSave={this.closeAfterSave}
              />
            : null}
        </div>
        <div className="create-flow-component-footers">
          <FooterData />
          <FooterProgress footerStyles={this.state.footerStyles} />
        </div>
      </div>
    );
  }
}

CreateFlow.propTypes = {
  flow: PropTypes.object,
  error: PropTypes.string,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    error: state.createdashboard.error,
    directiveList: state.createdashboard.directiveList,
  };
}
export default withRouter(connect(mapStateToProps)(CreateFlow));
