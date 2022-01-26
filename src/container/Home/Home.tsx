import React from 'react';
import {Row} from "react-bootstrap";
import './Home.scss';
import SideBar from "./SideBar/SideBar";
import Feed from "./Feed/Feed";

const Home = () => {

    return (
        <Row className={'justify-content-center mx-0'}>
            <SideBar />
            <Feed />
        </Row>
    );
};

export default Home;
