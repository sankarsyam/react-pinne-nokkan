import React, { Component } from 'react';
import Chip from 'react-md/lib/Chips';
import PropTypes from 'prop-types';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

export default class ChipList extends Component {
  scrollToLeft = (ID, event) => {
    let triggerID = ID.triggerID;
    document.getElementById('chip-list-' + triggerID).scrollLeft -= 30;
    if (document.getElementById('chip-list-' + triggerID).scrollLeft === 0) {
      let leftNavigation = document.getElementById(
        'chips-left-arrow-' + triggerID
      );
      leftNavigation.style.display = 'none';
    }
    let rightNavigation = document.getElementById(
      'chips-right-arrow-' + triggerID
    );
    rightNavigation.style.display = 'block';
  };

  scrollToRight = (ID, event) => {
    let triggerID = ID.triggerID;
    let currentScrollValue = document.getElementById('chip-list-' + triggerID)
      .scrollLeft;
    document.getElementById('chip-list-' + triggerID).scrollLeft += 30;
    if (document.getElementById('chip-list-' + triggerID).scrollLeft > 0) {
      let leftNavigation = document.getElementById(
        'chips-left-arrow-' + triggerID
      );
      leftNavigation.style.display = 'block';
    }

    let container = document.getElementById('chip-list-' + triggerID);
    let nextScrollValue = document.getElementById('chip-list-' + triggerID)
      .scrollLeft;
    if (nextScrollValue < currentScrollValue + 1) {
      document.getElementById('chip-list-' + triggerID).scrollLeft =
        container.offsetWidth;
      let rightNavigation = document.getElementById(
        'chips-right-arrow-' + triggerID
      );
      rightNavigation.style.display = 'none';
      document.getElementById(
        'chip-list-' + triggerID
      ).scrollLeft = nextScrollValue;
    }
  };
  componentDidMount() {
    let triggerID = `${this.props.triggerID}`;
    let leftNavigation = document.getElementById(
      'chips-left-arrow-' + triggerID
    );
    let rightNavigation = document.getElementById(
      'chips-right-arrow-' + triggerID
    );
    let container = document.getElementById('chip-list-' + triggerID);
    if (container.offsetWidth < container.scrollWidth) {
      leftNavigation.style.display = 'none';
      rightNavigation.style.display = 'block';
    } else {
      leftNavigation.style.display = 'none';
      rightNavigation.style.display = 'none';
    }
  }

  render() {
    let triggerID = `${this.props.triggerID}`;

    return (
      <div className="chips-data-div">
        <div
          id={`chips-left-arrow-${triggerID}`}
          className="chips-left-arrow"
          onClick={this.scrollToLeft.bind(null, { triggerID })}
        >
          <MdChevronLeft className="chips-arrow-icon" />
        </div>
        <div id={`chip-list-${triggerID}`} className="actors-chip-list">
          {this.props.actors.map(function(actor) {
            return <Chip label={actor} key={`${actor}-${triggerID}`} />;
          })}
        </div>
        <div
          id={`chips-right-arrow-${triggerID}`}
          className="chips-right-arrow"
          onClick={this.scrollToRight.bind(null, { triggerID })}
        >
          <MdChevronRight className="chips-arrow-icon" />
        </div>
      </div>
    );
  }
}

ChipList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string),
};
