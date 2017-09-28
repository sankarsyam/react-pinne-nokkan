/* Header.jsx */
import React, { Component } from 'react';
import Chip from 'react-md/lib/Chips';
import PropTypes from 'prop-types';

export default class DataChipList extends Component {
  render() {
    return (
      <div className="data-list">
        {this.props.actors != null
          ? this.props.actors.map((actor, index) => {
              return (
                <div key={index}>
                  <Chip className="chip" label={actor} key={index} />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

DataChipList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string),
};
