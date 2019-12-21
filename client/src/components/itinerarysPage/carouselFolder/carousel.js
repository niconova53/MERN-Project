import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css';

class carousel extends Component {

    render() {
        return <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                        <div className="imgcity1 col"><p>Tokio</p></div>
                        <div className="imgcity2 col"><p>Barcelona</p></div>
                        <div className="imgcity3 col"><p>Arizona</p></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="imgcity1 col"><p>Tokio</p></div>
                        <div className="imgcity2 col"><p>Barcelona</p></div>
                        <div className="imgcity3 col"><p>Arizona</p></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="imgcity1 col"><p>Tokio</p></div>
                        <div className="imgcity2 col"><p>Barcelona</p></div>
                        <div className="imgcity3 col"><p>Arizona</p></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    }
}
export default carousel;