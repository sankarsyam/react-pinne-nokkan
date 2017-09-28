/* Header.jsx */
import React, { Component } from 'react';
import '../../assets/stylesheets/viewheader.scss';
import ViewHeaderUser from './ViewHeaderUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { loadUserDetails } from '../../actions/dashboardView';
import { push } from 'react-router-redux';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';

export class ViewHeader extends Component {
  componentDidMount() {
    if (!this.props.profileId) {
      return this.props.dispatch(push('/'));
    }
    this.props.dispatch(loadUserDetails(this.props.profileId));
  }

  render() {
    return (
      <div className="md-grid headder-div">
        <div className="md-cell md-cell--10">
          <div className="centr-logo">
            <text className="falconHeader">Hospitality Experience Canvas</text>
          </div>
        </div>
        <div className="md-cell md-cell--2">
          <div className="user-logo">
            <ViewHeaderUser loginName={this.props.loginName} />
            <MenuButton
              id="vert-menu"
              icon
              buttonChildren="keyboard_arrow_down"
              className="menu-example"
              tooltipLabel="Open some menu"
            >
              <ListItem
                onClick={this.open}
                primaryText=""
                className="menu-example-item-first"
              />
              <ListItem onClick={this.open} primaryText="Logout" />
            </MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

ViewHeader.propTypes = {
  profileId: PropTypes.string,
  loginName: PropTypes.string,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    profileId: state.login.profileId,
    loginName: state.dashboard.loginName,
  };
}
export default withRouter(connect(mapStateToProps)(ViewHeader));
