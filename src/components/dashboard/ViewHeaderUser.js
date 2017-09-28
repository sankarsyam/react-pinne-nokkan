/* Header.jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/viewheader.scss';
import userLogo from '../../assets/images/userLogo.png';

export default class ViewHeaderUser extends Component {
  render() {
    return (
      <div className="chip-user">
        <img src={userLogo} className="img-circle" alt={userLogo} />
        {this.props.loginName}
      </div>
    );
  }
}

ViewHeaderUser.propTypes = {
  loginName: PropTypes.string,
};
