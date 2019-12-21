import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'
import Carousel from '../carouselFolder/carousel';
import Comments from '../comments';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="float-left">
                    <div className="userIcon"></div>
                    <p className="limitP">{props.profile}</p>
                </div>
                <p>{props.title}</p>

                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item lista">
                        <span className="badge badge-primary badge-pill">Likes {props.rating}</span></li>

                    <li className="list-group-item lista">
                        <span className="badge badge-success badge-pill">{props.duration} Hours</span></li>

                    <li className="list-group-item lista">
                        <span className="badge badge-warning badge-pill">$ {props.price}</span></li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    {props.hashtags.map((item, index) => {
                        return <li className="list-group-item lista tags" key={index}>{item}</li>;
                    })}
                </ul>
                <h2>Activities</h2>
                <Carousel />
                <h2>Comments</h2>
                <Comments />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn btn-secondary btn-sm">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Example(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-secondary btn-sm btn-block">
                view more
        </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                profile={props.profile} title={props.title}
                rating={props.rating} duration={props.duration}
                price={props.price} hashtags={props.hashtags}
            />
        </ButtonToolbar>
    );
}
export default Example;

