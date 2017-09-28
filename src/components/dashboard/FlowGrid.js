import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import Card from 'react-md/lib/Cards/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import TableActions from './TableActions';
import Header from './Header';
import Body from './Body';
import './../../assets/stylesheets/_styles.scss';
import { loadFlowDetails } from '../../actions/dashboardView';
import CreateFlow from './CreateFlow';
import Dialog from 'react-md/lib/Dialogs';
import { deleteFlowDetails } from '../../actions/dashboardView';
import { highlightNewItem } from '../../actions/dashboardView';
import { getFlowById } from '../../actions/createDashBoard';
import { postToDispatch } from '../../services/flowApi';

export class FlowGrid extends PureComponent {
  componentDidMount() {
    this.props.dispatch(loadFlowDetails());
  }

  setOffNewItemHehighLight() {
    this.setState({ newItemAdded: false });
    this.props.dispatch(highlightNewItem(false));
  }

  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
      facts: this.props.experienceflowList,
      selectedRows: this.props.experienceflowList
        ? this.props.experienceflowList.map(() => false)
        : [],
      count: 0,
      visible: false,
      testFlowDialog: false,
      newItemAdded: false,
    };
    this.setOffNewItemHehighLight = this.setOffNewItemHehighLight.bind(this);
    this.dataTable = null;
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.experienceflowList.length !==
      nextProps.experienceflowList.length
    ) {
      this.setState({
        facts: nextProps.experienceflowList,
        newItemAdded: nextProps.newItemAdded,
      });
    } else {
      this.setState({
        facts: nextProps.experienceflowList,
      });
    }
    if (nextProps.newItemAdded) {
      setTimeout(this.setOffNewItemHehighLight, 20000);
    }
  }

  reset = () => {
    let index;
    for (let i = 0; i < this.state.selectedRows.length; i++) {
      if (this.state.selectedRows[i] === true) {
        index = i;
        break;
      }
    }
    this.dataTable._removeCheckbox(index);
    this.setState({
      selectedRows: this.props.experienceflowList.map(() => false),
    });
    this.setState({
      count: 0,
    });
    // document.getElementById('dashbord-flow-add-button').style.display = 'block';
  };

  openAddRowDialog = () => {
    this.setState({ dialogVisible: true });
  };

  closeDialog = () => {
    this.setState({ dialogVisible: false });
  };

  removeSelected = () => {
    const nextState = this.state.facts.reduce(
      (state, fact, i) => {
        if (!this.state.selectedRows[i]) {
          state.facts.push(fact);
          state.selectedRows.push(false);
        } else {
          var flowID = fact['triggerID'];
          deleteFlowDetails(flowID);
          document.getElementById('dashbord-flow-add-button').style.display =
            'block';
        }
        return state;
      },
      {
        facts: [],
        selectedRows: [],
        count: 0,
        visible: false,
        dialogVisible: false,
        newItemAdded: false,
        testFlowDialog: false,
      }
    );
    this.setState(nextState);
  };

  renderEdit = () => {
    for (let i = 0; i < this.state.facts.length; i++) {
      if (this.state.selectedRows[i]) {
        this.props.dispatch(getFlowById(this.state.facts[i].triggerID));
        this.openAddRowDialog();
        this.reset();
      }
    }
  };

  renderTest = () => {
    for (let i = 0; i < this.state.facts.length; i++) {
      if (this.state.selectedRows[i]) {
        postToDispatch(this.state.facts[i].triggerID, this.props.profileId);
      }
    }
    this.reset();

    this.setState({
      testFlowDialog: false,
    });
  };

  openDialog = () => {
    this.setState({ visible: true });
  };
  closeMessageDialog = () => {
    this.setState({ visible: false });
  };
  testFlowDialog = () => {
    this.setState({ testFlowDialog: true });
  };
  closeTestFlowDialog = () => {
    this.setState({ testFlowDialog: false });
  };

  higlightNewItem() {
    // this.setState({ newItemAdded: !this.newItemAdded });
  }
  handleRowToggle = (row, toggled, count) => {
    let selectedRows = this.state.selectedRows.slice();
    let addButton = document.getElementById('dashbord-flow-add-button');
    if (count > 0) {
      addButton.style.display = 'none';
    } else {
      addButton.style.display = 'block';
    }
    if (row === -1) {
      selectedRows = selectedRows.map(() => toggled);
    } else {
      selectedRows[row] = toggled;
    }

    this.setState({ count, selectedRows });
  };

  addRows = e => {
    //TODO - Will implimet with Add/Edit story
  };

  render() {
    const { facts, count, dialogVisible } = this.state;
    const { visible, testFlowDialog } = this.state;
    return (
      <Card tableCard>
        <TableActions
          count={count}
          openAddRowDialog={this.openAddRowDialog}
          openDialog={this.openDialog}
          renderEdit={this.renderEdit}
          testFlowDialog={this.testFlowDialog}
        />
        <div className="dashboard-table-headder-main" />
        <div className="dashboard-table-headder">EXPERIENCE FLOWS</div>

        <DataTable
          ref={getObject => {
            this.dataTable = getObject;
          }}
          baseId="experience-flow"
          onRowToggle={this.handleRowToggle}
          className={`experience-flow-table-${this.state.newItemAdded}`}
          defaultSelectedRows={this.state.selectedRows}
        >
          <Header />
          <Body facts={facts} />
        </DataTable>
        <CreateFlow visible={dialogVisible} closeDialog={this.closeDialog} />
        <Dialog
          id="confirmDelete"
          visible={visible}
          title="Are you sure you want to delete this flow?"
          width="500px"
          onHide={this.closeMessageDialog}
          aria-labelledby="confirmDeleteDescription"
          modal
          actions={[
            {
              onClick: this.removeSelected,
              primary: true,
              label: 'Delete',
            },
            {
              onClick: this.closeMessageDialog,
              primary: true,
              label: 'Cancel',
            },
          ]}
        />
        <Dialog
          id="testFlow"
          visible={testFlowDialog}
          title="Are you sure you want to test this flow?"
          width="500px"
          onHide={this.closeTestFlowDialog}
          modal
          actions={[
            {
              id: 'submitButton',
              onClick: this.renderTest,
              primary: true,
              label: 'Ok',
            },
            {
              onClick: this.closeTestFlowDialog,
              primary: true,
              label: 'Cancel',
            },
          ]}
        />
      </Card>
    );
  }
}

FlowGrid.propTypes = {
  error: PropTypes.string,
  experienceflowList: PropTypes.array,
  newItemAdded: PropTypes.bool,
};

function getExperienceFlowData(flowList) {
  let experienceFlow = [];
  flowList.map(flowData => {
    let data = {
      triggerName: flowData.name,
      triggerID: flowData._id,
      actionName: flowData.action.name,
      settings: {
        expiresInMinutes: flowData.action.expiresInMinutes,
        shouldSendTextMessage: flowData.action.shouldSendTextMessage,
        offerLimit: flowData.action.offerLimit,
        isTriggerEvent: flowData.action.isTriggerEvent,
      },
      actors: flowData.action.actors,
      isActive: flowData.isActive,
    };
    experienceFlow.push(data);
    return true;
  });
  return experienceFlow;
}

function mapStateToProps(state) {
  return {
    error: state.dashboard.error,
    profileId: state.login.profileId,
    experienceflowList: getExperienceFlowData(state.dashboard.flowList),
    newItemAdded: state.dashboard.isNewItem,
    flow: state.createdashboard.flow,
  };
}

export default withRouter(connect(mapStateToProps)(FlowGrid));
