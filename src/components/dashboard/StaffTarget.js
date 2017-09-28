import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';
import StaffTargetChipList from './StaffTargetChipList';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  loadFlow,
  loadFooterProgressStyle,
} from '../../actions/createDashBoard';

let selectedActors = [];
export class StaffTarget extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedActors: [],
      addButtonIsEnabled: false,
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.toggleAddButton = this.toggleAddButton.bind(this);
  }

  toggleAddButton(actorList) {
    let foundWhite = false;
    actorList.map(actor => {
      if (actor.color === 'white') {
        this.setState({ addButtonIsEnabled: true });
        foundWhite = true;
      }
      return foundWhite;
    });
    if (!foundWhite) {
      this.setState({ addButtonIsEnabled: false });
    }
  }

  validateStafTarget() {
    return this.state.addButtonIsEnabled;
  }

  handleSubmitButtonClick(event) {
    event.preventDefault();
    selectedActors = this.state.selectedActors;
    this.props.targetedActors.forEach(actor => {
      if (actor.color === 'white') {
        selectedActors.push(actor.name);
      }
    });
    let flow = Object.assign({}, this.props.flow);
    flow.action.actors = selectedActors;
    this.props.dispatch(loadFlow(flow));
    let footerStyles = Object.assign({}, this.props.footerStyles);
    footerStyles.staffTargetStyle = 'footer-progress-dark';
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.setState({ selectedActors: [] });
    this.props.updateStaffTarget();
  }

  render() {
    return (
      <div className="staff-target-main">
        <div className="staff-target-comp-title">STAFF TARGETING</div>
        <StaffTargetChipList toggleAddButton={this.toggleAddButton} />

        <div>
          <Button
            id="submit-button"
            label="NEXT"
            raised
            primary
            type="submit"
            disabled={!this.validateStafTarget()}
            onClick={this.handleSubmitButtonClick}
          />
        </div>
      </div>
    );
  }
}

StaffTarget.propTypes = {
  flow: PropTypes.object,
  targetedActors: PropTypes.array,
  footerStyles: PropTypes.object,
  dispatch: PropTypes.func,
  updateStaffTarget: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    targetedActors: state.createdashboard.targetedActors,
    footerStyles: state.createdashboard.footerStyles,
  };
}
export default withRouter(connect(mapStateToProps)(StaffTarget));
