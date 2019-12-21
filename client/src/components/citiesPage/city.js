import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class City extends Component {

    render() {
        const { _id, ciudad } = this.props.all;
        return (
            <React.Fragment>
                <li className="list-group-item">

                    <Link to={`/itinerarys/${_id}`} className="btn btn-primary btn-lg btn-block">{ciudad}</Link>

                </li>
            </React.Fragment>
        );
    }
}

export default City;