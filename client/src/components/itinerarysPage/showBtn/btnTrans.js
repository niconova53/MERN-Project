import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap'
import Carousel from '../carouselFolder/carousel';
import Comments from '../comments';

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <h2>Activities</h2>
                    <Carousel />
                    <h2>Comments</h2>
                    <Comments />
                </div>
            </Collapse>
            <Button
                className="btn btn-secondary btn-sm btn-block"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                view more / close
        </Button>
        </>
    );
}
export default Example;