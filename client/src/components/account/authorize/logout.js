import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/users/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <div onClick={this.props.logout} href='#' className="btn btn-primary">
          Logout
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
