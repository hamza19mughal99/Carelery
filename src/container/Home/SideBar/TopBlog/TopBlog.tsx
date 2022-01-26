import React from 'react';
import {Button} from "react-bootstrap";
import './TopBlog.scss'

const TopBlog = () => {
    return (
        <React.Fragment>
            <h5>Excepteur sint.</h5>
            <p className={'text-muted'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button>Read More</Button>
        </React.Fragment>
    );
};

export default TopBlog;
