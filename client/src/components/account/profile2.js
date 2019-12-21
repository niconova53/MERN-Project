import React, { Component } from 'react';
import axios from 'axios'
import queryString from "query-string";
import { Link } from 'react-router-dom'
import googleButton from './googleBtn.png';

const DisplayUser = props => {
    if (props.loggedIn) {
        return (
            <div>
                <div className="card">
                    <img src={props.foto} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Welcome {props.name}</h5>
                        <p className="card-text">Enjoy!</p>
                        <Link to="/account" onClick={props.logout} className="btn btn-primary my-4">
                            Logout
						</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <a href="http://localhost:4000/auth/google" >
                    <img src={googleButton} alt="sign into Google Button" />
                </a>
                <Link to="/" className="imgHome position-absolute fixed-bottom"></Link>
            </div>
        )
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            user: null,
            userName: '',
            photo: ''
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        console.log(localStorage.jwt);
        var query = queryString.parse(this.props.location.search);
        if (query.token) {
            window.localStorage.setItem("jwt", query.token);
            console.log(query.token);
        }
        axios({
            method: 'get', url: 'http://localhost:4000/auth/verify',
            headers: { Authorization: `Bearer ${localStorage.jwt}` }
        })
            .then((res) => {
                console.log(res.data)
                if (!!res.data.user) {
                    this.setState({
                        loggedIn: true,
                        userName: res.data.user.firstName + ' ' + res.data.user.lastName,
                        photo: res.data.user.photos[0].value
                    })
                } else {
                    this.setState({
                        loggedIn: false,
                        user: null
                    })
                }
            })
    }

    logout() {
        localStorage.removeItem('jwt');
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    render() {

        return (
            <div>

                <h1 className="my-4">Google Account</h1>
                <DisplayUser logout={this.logout} loggedIn={this.state.loggedIn} name={this.state.userName} foto={this.state.photo} />

            </div>
        )
    }
}
export default App