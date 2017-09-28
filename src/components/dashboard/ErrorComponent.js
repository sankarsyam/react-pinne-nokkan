import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export class ErrorComponent extends Component {
  render() {
    return (
      <div className="triggerDiv">
        <div className="save-flow-error">
          {this.props.error}
        </div>
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  error: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    error: state.createdashboard.error,
  };
}
export default withRouter(connect(mapStateToProps)(ErrorComponent));
