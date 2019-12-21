import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './authorize/register';
import LoginModal from './authorize/login';
import Logout from './authorize/logout';
import googleButton from './googleBtn.png';

class AppNavbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">
                            <span>
                                <b>{user ? `Welcome ${user.name}` : ''}</b>
                            </span>
                        </h2>
                        <Logout />
                    </div>
                </div>
            </Fragment >
        );

        const guestLinks = (
            <Fragment>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item "><RegisterModal /></li>
                    <li className="nav-item"><LoginModal /></li>
                </ul>
                <a href="http://localhost:4000/auth/google" >
                    <img src={googleButton} alt="sign into Google Button" className="my-4" />
                </a>
                <Link to="/" className="imgHome position-absolute fixed-bottom"></Link>
            </Fragment>
        );

        return (
            <React.Fragment>
                <h1>Account Manager</h1>

                <div className='ml-auto my-4'>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    null
)(AppNavbar);

