import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfilePost from "../ProfilePost/ProfilePost";
import './OtherProfile.scss'

const OtherProfile = () => {

    const [toggle, setToggle] = useState(true)
    const followToggleHandler = () => {
        setToggle(!toggle)
    }

    let data = <ProfilePost/>
    let unFollowBtn: null | JSX.Element =   <Button onClick={followToggleHandler} className={'unfollow mt-3'}>UnFollow</Button>


    if (toggle) {
        data = (
            <Col md={12} className={'not_friend text-center p-4'}>
                <h5>To see post</h5>
                <p className={'text-muted mt-3'}>you have to follow Him / Her</p>
                <Button onClick={followToggleHandler} className={'mt-3'}>Follow</Button>
            </Col>
        )
        unFollowBtn = null
    }
    return (
        <Row className={'mx-4 my-3 other_profile justify-content-center align-items-center'}>
            <Col md={12} className={'profile_header text-center py-4'}>
                <ProfileHeader />
                { unFollowBtn }
            </Col>
            { data }
        </Row>
    );
};

export default OtherProfile;
