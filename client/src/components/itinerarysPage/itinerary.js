import React, { Component } from 'react';
//import Btn from './showBtn/btnTrans';
import Example from './showBtn/modalShow';
import './styles.css';

class itinerary extends Component {

    render() {

        const { profile, title, rating, duration, price, hashtags } = this.props.all;

        return (
            <React.Fragment>
                <li className="list-group-item list-group-all">
                    <div className="float-left">
                        <div className="userIcon"></div>
                        <p className="limitP">{profile}</p>
                    </div>
                    <p>{title}</p>

                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item lista">
                            <span className="badge badge-primary badge-pill">Likes {rating}</span></li>

                        <li className="list-group-item lista">
                            <span className="badge badge-success badge-pill">{duration} Hours</span></li>

                        <li className="list-group-item lista">
                            <span className="badge badge-warning badge-pill">$ {price}</span></li>
                    </ul>
                    <ul className="list-group list-group-horizontal">
                        {hashtags.map((item, index) => {
                            return <li className="list-group-item lista tags" key={index}>{item}</li>;
                        })}
                    </ul>

                    {/* <Btn /> */}
                    <Example profile={profile} title={title}
                        rating={rating} duration={duration}
                        price={price} hashtags={hashtags} />
                </li>
            </React.Fragment>
        );
    }
}

export default itinerary;