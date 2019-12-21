import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'


class comments extends Component {

    render() {

        return (<Form>
            <Form.Group controlId="formBasicComment">
                <Form.Control type="comment" placeholder="Your comment..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-secondary btn-sm my-2 float-right">
                Submit
            </Button>
        </Form>
        );
    }
}

export default comments;