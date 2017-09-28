import React, { PureComponent } from 'react';

import '../../assets/stylesheets/rowDialog.scss';
import TextField from 'react-md/lib/TextFields';
import MdClear from 'react-icons/lib/md/clear';

export default class Trigger extends PureComponent {
  render() {
    return (
      <section className="md-grid">
        <TextField
          id="trigger-type-field"
          label="Trigger Type"
          maxLength={20}
          value={this.props.triggerEvent.triggerType}
          onChange={() => {}}
          helpOnFocus
          disabled
          className="md-cell md-cell--top"
        />
        <TextField
          id="trigger-sub-type-field"
          label="Trigger Sub-type"
          maxLength={20}
          value={this.props.triggerEvent.triggerSubType.subType}
          onChange={() => {}}
          // defaultValue=''
          helpOnFocus
          disabled
          className="md-cell md-cell--top "
        />
        <TextField
          id="trigger-value-field"
          label="Trigger Value"
          maxLength={20}
          value={this.props.triggerEvent.triggerValue}
          onChange={() => {}}
          // defaultValue=''
          helpOnFocus
          disabled
          className="md-cell md-cell--top"
        />
        <MdClear
          className="triggers-event-remove-btn"
          onClick={this.props.removeFromTriggerList.bind(
            null,
            this.props.index
          )}
        />
        <label className="trigger-seperator">And...</label>
      </section>
    );
  }
}
