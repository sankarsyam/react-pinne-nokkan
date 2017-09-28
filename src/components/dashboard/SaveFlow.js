import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { saveFlowData, saveFlowFailure } from '../../actions/createDashBoard';
import { editFlow } from '../../services/flowApi';
import {
  highlightNewItem,
  loadFlowDataList,
} from '../../actions/dashboardView';

export class SaveFlow extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    this.handleUpdateButtonClick = this.handleUpdateButtonClick.bind(this);
  }

  handleSaveButtonClick(event) {
    event.preventDefault();
    this.props.dispatch(saveFlowData(this.props.flow));
    this.props.dispatch(highlightNewItem(true));
    this.props.closeAfterSave();
  }
  handleCancelButtonClick(event) {
    event.preventDefault();
    this.props._closeDialog();
  }

  async handleUpdateButtonClick(event) {
    try {
      const response = await editFlow(this.props.flow, this.props.flow._id);
      let flowList = Object.assign([], this.props.flowList);
      let index = flowList.findIndex(flow => flow._id === response._id);
      flowList[index] = response;
      this.props.dispatch(loadFlowDataList(flowList));
      this.props.closeAfterSave();
    } catch (error) {
      this.props.dispatch(saveFlowFailure(error.message));
      console.error('Failed to update flow');
    }
  }

  render() {
    return (
      <div className="flow-save-comp">
        <div className="flow-save-comp-title">Save</div>
        <div>
          {!this.props.flow._id
            ? <Button
                id="save-button"
                label="Add Experience Flow"
                type="submit"
                raised
                primary
                disabled={false}
                className="flow-submit-btn"
                onClick={this.handleSaveButtonClick}
              />
            : ''}
        </div>
        <div className="flow-update-area">
          {this.props.flow._id
            ? <Button
                id="update-button"
                label="Save"
                type="submit"
                raised
                primary
                className="flow-update-btn"
                onClick={this.handleUpdateButtonClick}
              />
            : ''}
          {this.props.flow._id
            ? <Button
                id="cancel-button"
                label="Cancel"
                type="submit"
                raised
                primary
                className="flow-cancel-btn"
                onClick={this.handleCancelButtonClick}
              />
            : ''}
        </div>
      </div>
    );
  }
}

SaveFlow.propTypes = {
  flow: PropTypes.object,
  dispatch: PropTypes.func,
  error: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    flowList: state.dashboard.flowList,
    error: state.createdashboard.error,
  };
}
export default withRouter(connect(mapStateToProps)(SaveFlow));
