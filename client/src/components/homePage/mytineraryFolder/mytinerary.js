import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mytinerary.css';


class mytinerary extends Component {

    render() {
        return <React.Fragment>
            <h1>MYtinerary</h1>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/"><div className="imgMusic btn btn btn-secondary"></div></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><div className="imgAvion btn btn btn-secondary"></div></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><div className="imgParis btn btn btn-secondary"></div></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/"><div className="imgPlaya btn btn-secondary"></div></Link>
                </li>
            </ul>
        </React.Fragment>
    }


}

export default mytinerary;
