import React, { Component } from 'react';
import '../assets/stylesheets/app.scss';
import Login from '../components/login/LoginForm';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Home from '../components/dashboard/Dashboard';

export class App extends Component {
  render() {
    const context = {
      dispatch: this.props.dispatch,
      error: this.props.error,
      profileId: this.props.profileId,
      isAuthenticated: this.props.isAuthenticated,
      loginName: this.props.loginName,
    };
    return (
      <div className="card">
        <Route
          exact
          path="/"
          component={() => {
            return <Login context={context} />;
          }}
        />
        <Route
          exact
          path="/dashboard"
          component={() => {
            return <Home context={context} />;
          }}
        />
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func,
  profileId: PropTypes.string,
  error: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loginName: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    error: state.login.error,
    profileId: state.login.profileId,
    isAuthenticated: state.login.isAuthenticated,
    loginName: state.dashboard.loginName,
  };
}
export default withRouter(connect(mapStateToProps)(App));
