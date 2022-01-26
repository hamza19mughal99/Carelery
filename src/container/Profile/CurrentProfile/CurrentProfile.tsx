import React from 'react';
import ProfilePost from "../ProfilePost/ProfilePost";
import {Button, Col, Form, Row} from "react-bootstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";


const CurrentProfile = () => {

    return (
        <Row className={'mx-4 my-3 other_profile justify-content-center align-items-center'}>
            <Col md={12} className={'profile_header text-center py-4'}>
                <ProfileHeader />
                <Form className={"create_post_form text-center"}>
                    <Form.Control
                        type="text"
                        placeholder={"Write something in your mind……"}
                    />
                    <Button>Post</Button>
                </Form>
            </Col>
            <ProfilePost/>
        </Row>
    );
};

export default CurrentProfile;
