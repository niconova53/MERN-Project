import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Flecha extends Component {

    render() {
        return <React.Fragment>
            <p className="mt-3">Find your perfect trip, designed by insiders who know and love their cities.</p>
            <Link to="/cities" className="imgFlecha my-4"></Link>
        </React.Fragment>
    }

}

export default Flecha;