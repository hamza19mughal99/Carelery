import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { FaCircle } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import Avatar from '../../assets/img/avatar.png';
import { AiFillPlusSquare } from 'react-icons/ai';
import './Queries.scss';

const Queries = () => {
    return (
        <Container fluid>
            <Row className={'queries_main'}>
                <Col md={3} className={'queries_left'}>
                    <ul>
                        <li>
                            <FaCircle />
                            All</li>
                        <li>
                            <FaCircle />
                            Fitness</li>
                        <li>
                            <FaCircle />
                            Lifestyle</li>
                        <li>
                            <FaCircle />
                            Skincare
                        </li>
                        <li>
                            <FaCircle />
                            Health
                        </li>
                    </ul>
                </Col>
                <Col md={8}>
                    <Form>
                            <Form.Group className="ask_question">
                                <Form.Control className="question_input"  type="text" placeholder="Type Your Question Here..." />
                                <AiFillPlusSquare />
                            </Form.Group>
                    </Form>

                    <div className="question">
                        <div className={'question_details'}>
                            <div className={'answer_counter'}>
                                9
                            </div>
                            <div className={'ml-3'}>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur cursus urna a augue sollicitudin, non pharetra massa molestie.
                                    Ut dictum laoreet urna. Pellentesque venenatis pharetra fermentum.
                                    Aliquam ut urna odio. Donec scelerisque suscipit orci, in eleifend felis pharetra faucibus.
                                    <Button className='continue_btn'>Continue Reading</Button>
                                </p>
                            </div>
                        </div>
                        <div>
                            <Container >
                                <hr className={'question_divider'} />
                                <Row>
                                    <Col md={4}>
                                        <div className={'user_details'}>
                                            <img src={Avatar} alt="Avatar" />
                                            <p>Posted By: <span> Jen Smith </span> </p>

                                        </div>

                                    </Col>
                                    <Col md={2} className={'user_details'}>
                                        <FiClock />
                                        <p> 10 mins ago</p>

                                    </Col>
                                    <Col md={5}>

                                    </Col>
                                    <Col md={1} className={'user_details'}>
                                        <AiOutlineHeart />
                                        <p>6,109</p>
                                    </Col>
                                </Row>
                            </Container>



                        </div>

                    </div>
                    <div className="question">
                        <div className={'question_details'}>
                            <div className={'answer_counter'}>
                                9
                            </div>
                            <div className={'ml-3'}>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur cursus urna a augue sollicitudin, non pharetra massa molestie.
                                    Ut dictum laoreet urna. Pellentesque venenatis pharetra fermentum.
                                    Aliquam ut urna odio. Donec scelerisque suscipit orci, in eleifend felis pharetra faucibus.
                                    <Button className='continue_btn'>Continue Reading</Button>
                                </p>
                            </div>
                        </div>
                        <div>
                            <Container >
                                <hr className={'question_divider'} />
                                <Row>
                                    <Col md={4}>
                                        <div className={'user_details'}>
                                            <img src={Avatar} alt="Avatar" />
                                            <p>Posted By: <span> Jen Smith </span> </p>
                                        </div>
                                    </Col>
                                    <Col md={2} className={'user_details'}>
                                        <FiClock />
                                        <p> 10 mins ago</p>

                                    </Col>
                                    <Col md={5} />

                                    <Col md={1} className={'user_details'}>
                                        <AiOutlineHeart />
                                        <p>6,109</p>
                                    </Col>
                                </Row>
                            </Container>



                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Queries;
