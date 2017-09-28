/* Header.jsx */
import React, { Component } from 'react';
import Chip from 'react-md/lib/Chips';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';

export default class ChipListStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'grey',
    };
  }

  getChipName(data) {
    this.setState({
      color: 'white',
    });
  }

  render() {
    return (
      <div id="chip-list">
        {this.props.actors.map(actor => {
          return (
            <Chip
              className="chip"
              label={actor}
              key={actor}
              id={actor}
              onClick={this.getChipName.bind(null, { actor })}
            />
          );
        })}
      </div>
    );
  }
}

ChipListStaff.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string),
};
