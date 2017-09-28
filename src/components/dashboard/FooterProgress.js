import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rowDialog.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export class FooterProgress extends PureComponent {
  render() {
    return (
      <div className="dashboard-footer-progress">
        <div className={this.props.footerStyles.triggerNameStyle}>
          <label>Trigger Name</label>
        </div>
        <div className={this.props.footerStyles.triggerEventStyle}>
          <label>Trigger Events</label>
        </div>
        <div className={this.props.footerStyles.triggerActionStyle}>
          <label>Action</label>
        </div>
        <div className={this.props.footerStyles.staffTargetStyle}>
          <label>Staff Target</label>
        </div>
        <div className={this.props.footerStyles.settingsStyle}>
          <label>Settings</label>
        </div>
      </div>
    );
  }
}

FooterProgress.propTypes = {
  footerStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    footerStyles: state.createdashboard.footerStyles,
  };
}
export default withRouter(connect(mapStateToProps)(FooterProgress));
