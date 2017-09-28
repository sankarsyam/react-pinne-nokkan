import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  loadFlow,
  loadFooterProgressStyle,
} from '../../actions/createDashBoard';
import SelectField from 'react-md/lib/SelectFields';

const expiresIn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => {
  let name = index === 1 ? index + ' minute' : index + ' minutes';
  return { name: name, value: index };
});

const offerLimit = [1, 2, 3, 4, 5].map(index => {
  let name = index;
  return { name };
});

const onExpires = [
  {
    name: 'YES',
  },
  {
    name: 'NO',
  },
];

const triggerEvent = [
  {
    name: 'YES',
  },
  {
    name: 'NO',
  },
];

export class ActionSetting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expires: '0',
      limit: '0',
      shouldSendTextMessage: 'No',
      isEvent: 'No',
      textMessage: '',
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.handleSelectBoxOnChange = this.handleSelectBoxOnChange.bind(this);
    this.validateTextMessage = this.validateTextMessage.bind(this);
    if (this.props.flow && this.props.flow._id) {
      this.state = {
        expires: this.props.flow.action.expiresInMinutes + '',
        limit: this.props.flow.action.offerLimit + '',
        textMessage: this.props.flow.action.textMessage,
        shouldSendTextMessage: this.props.flow.action.shouldSendTextMessage
          ? 'YES'
          : 'NO',
        isEvent: this.props.flow.action.isTriggerEvent ? 'YES' : 'NO',
      };
    }
  }

  handleSelectBoxOnChange(name, value) {
    if (name === 'Expires') {
      this.setState({ expires: value });
    }
    if (name === 'Limit') {
      this.setState({ limit: value });
    }
    if (name === 'Guest Text') {
      this.setState({ shouldSendTextMessage: value });
    }
    if (name === 'Is Event') {
      this.setState({ isEvent: value });
    }
  }

  validateTextMessage() {
    return this.state.shouldSendTextMessage === 'YES';
  }

  handleSubmitButtonClick(event) {
    event.preventDefault();
    let flow = Object.assign({}, this.props.flow);
    flow.action.expiresInMinutes = this.state.expires;
    flow.action.offerLimit = this.state.limit;
    if (this.state.isEvent === 'YES') {
      flow.action.isTriggerEvent = true;
    } else {
      flow.action.isTriggerEvent = false;
    }
    if (this.state.shouldSendTextMessage === 'YES') {
      flow.action.shouldSendTextMessage = true;
    } else {
      flow.action.shouldSendTextMessage = false;
    }
    flow.action.textMessage = this.state.textMessage;
    this.props.dispatch(loadFlow(flow));
    let footerStyles = Object.assign({}, this.props.footerStyles);
    footerStyles.settingsStyle = 'footer-progress-dark';
    this.props.dispatch(loadFooterProgressStyle(footerStyles));
    this.props.updateActionSetting();
  }

  render() {
    return (
      <div className="action-setting-comp">
        <div className="action-setting-comp-title">ACTION SETTINGS</div>
        <div>
          <div>
            <section className="md-grid">
              <label className="md-cell item-label">Expires in</label>
              <SelectField
                id="Expires"
                placeholder="None"
                menuItems={expiresIn}
                itemLabel="name"
                itemValue="value"
                value={this.state.expires}
                className="md-cell"
                onChange={this.handleSelectBoxOnChange.bind(null, 'Expires')}
              />
            </section>
          </div>
          <div>
            <section className="md-grid">
              <label className="md-cell item-label">
                Guest Text Message on Expire
              </label>
              <SelectField
                id="Guest Text"
                placeholder="No"
                menuItems={onExpires}
                itemLabel="name"
                itemValue="name"
                value={this.state.shouldSendTextMessage}
                className="md-cell"
                onChange={this.handleSelectBoxOnChange.bind(null, 'Guest Text')}
              />
            </section>
          </div>
          <div>
            <section className="md-grid">
              <label className="md-cell item-label">Guest Text Message</label>
              <TextField
                id="guestTextMessage"
                lineDirection="center"
                disabled={!this.validateTextMessage()}
                rows={2}
                value={this.state.textMessage}
                onChange={textMessage => this.setState({ textMessage })}
                className="md-cell md-cell--bottom"
              />
            </section>
          </div>
          <div>
            <section className="md-grid">
              <label className="md-cell item-label">Offer Limit</label>
              <SelectField
                id="Limit"
                placeholder="0"
                menuItems={offerLimit}
                itemLabel="name"
                itemValue="name"
                value={this.state.limit}
                className="md-cell"
                onChange={this.handleSelectBoxOnChange.bind(null, 'Limit')}
              />
            </section>
          </div>
          <div>
            <section className="md-grid">
              <label className="md-cell item-label">Is a Trigger Event</label>
              <SelectField
                id="Is Event"
                placeholder="NO"
                menuItems={triggerEvent}
                itemLabel="name"
                itemValue="name"
                value={this.state.isEvent}
                className="md-cell"
                onChange={this.handleSelectBoxOnChange.bind(null, 'Is Event')}
              />
            </section>
          </div>
        </div>

        <div>
          <Button
            id="submit-button"
            label="NEXT"
            raised
            primary
            type="submit"
            onClick={this.handleSubmitButtonClick}
          />
        </div>
      </div>
    );
  }
}

ActionSetting.propTypes = {
  flow: PropTypes.object,
  dispatch: PropTypes.func,
  footerStyles: PropTypes.object,
  updateActionSetting: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    flow: state.createdashboard.flow,
    footerStyles: state.createdashboard.footerStyles,
  };
}
export default withRouter(connect(mapStateToProps)(ActionSetting));
