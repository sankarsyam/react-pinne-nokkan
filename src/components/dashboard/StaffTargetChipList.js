import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'react-md/lib/Chips';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadTargetedActors } from '../../actions/createDashBoard';

let actorList = [];
export class StaffTargetChipList extends Component {
  componentDidMount() {
    if (this.props.flow && this.props.flow._id) {
      let staffList = [];
      if (this.props.flow.action.actors) {
        this.state.staffList.forEach(staffItem => {
          this.props.flow.action.actors.forEach(actor => {
            if (staffItem.name === actor) {
              staffItem.color = 'white';
            }
          });
          staffList.push(staffItem);
        });
        this.props.toggleAddButton(staffList);
        return this.props.dispatch(loadTargetedActors(staffList));
      }
    } else {
      return this.props.dispatch(loadTargetedActors(this.state.staffList));
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      staffList: [
        {
          name: 'Front Desk',
          color: 'grey',
        },
        {
          name: 'House Keeping',
          color: 'grey',
        },
        {
          name: 'Bell Hop',
          color: 'grey',
        },
        {
          name: 'Valet',
          color: 'grey',
        },
        {
          name: 'Engineering',
          color: 'grey',
        },
        {
          name: 'Golf Shop Attendant',
          color: 'grey',
        },
        {
          name: 'Spa Attendant',
          color: 'grey',
        },
        {
          name: 'Text',
          color: 'grey',
        },
      ],
      actorList: [],
    };
    this.staffChipOnSelect = this.staffChipOnSelect.bind(this);
  }

  staffChipOnSelect(index, value) {
    actorList = this.state.actorList;
    actorList = Object.assign([], this.props.targetedActors);
    if (actorList[index].color === 'grey') {
      actorList[index].color = 'white';
    } else {
      actorList[index].color = 'grey';
    }
    this.props.dispatch(loadTargetedActors(actorList));
    this.props.toggleAddButton(actorList);
    this.setState({ actorList: [] });
  }

  render() {
    return (
      <div id="staff-target-items">
        {this.props.targetedActors.map((actor, index) => {
          return (
            <Chip
              className={'chip-' + actor.color}
              label={actor.name}
              key={actor.name}
              id={actor.name}
              onClick={this.staffChipOnSelect.bind(null, index)}
            />
          );
        })}
      </div>
    );
  }
}

StaffTargetChipList.propTypes = {
  targetedActors: PropTypes.array,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    targetedActors: state.createdashboard.targetedActors,
    flow: state.createdashboard.flow,
  };
}
export default withRouter(connect(mapStateToProps)(StaffTargetChipList));
