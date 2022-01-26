import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { AiFillClockCircle } from 'react-icons/ai';
import "./BlogDetail.scss";
import BlogDetailImg from "../../../assets/img/blog_detail1.png";

const BlogDetail = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={8}>
                    <img src={BlogDetailImg} alt='blog-detail' />

                    <div className='blog_detail_heading'>
                        <h5>Excepteur sint occaeuiecat cupidatat</h5>
                        <p> <AiFillClockCircle /> 1 min ago </p>
                    </div>

                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>


                    </Col>

                    <Col md={4}>
                    
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
};

export default BlogDetail;
