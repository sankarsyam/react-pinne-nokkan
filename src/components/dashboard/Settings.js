/* Header.jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';

export default class Settings extends Component {
  render() {
    return (
      <div id="settings">
        <div className="settings-top-row">
          <div>
            Expires:{' '}
            <span className="trigger-name-column-text">
              {' '}{this.props.settings.expiresInMinutes
                ? this.props.settings.expiresInMinutes + ' min'
                : 'None'}
            </span>
          </div>
          <div>
            Limit:{' '}
            <span className="trigger-name-column-text">
              {this.props.settings.offerLimit}
            </span>
          </div>
        </div>
        <div className="settings-bottom-row">
          <div>
            Guest Text:{' '}
            <span
              className={
                this.props.settings.shouldSendTextMessage
                  ? 'settings-font-green'
                  : 'settings-font-red'
              }
            >
              {this.props.settings.shouldSendTextMessage ? 'Yes' : 'No'}
            </span>
          </div>

          <div>
            Is Event:<span
              className={
                this.props.settings.isTriggerEvent
                  ? 'settings-font-green'
                  : 'settings-font-red'
              }
            >
              {' '}{this.props.settings.isTriggerEvent ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object,
};
