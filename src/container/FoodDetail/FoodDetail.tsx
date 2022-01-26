import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { AiFillPlusCircle } from 'react-icons/ai';
import Lemon from "../../assets/img/lemon.png";
import "./FoodDetail.scss";

const FoodDetail = () => {

    const foodItems = [
        {
            id: 1,
            itemName: "Food Item",
            calorie: "20",
        },
        {
            id: 2,
            itemName: "Food Item",
            calorie: "20",
        },
        {
            id: 3,
            itemName: "Food Item",
            calorie: "20",
        },
        {
            id: 4,
            itemName: "Food Item",
            calorie: "20",
        },
        {
            id: 5,
            itemName: "Food Item",
            calorie: "20",
        },
        {
            id: 6,
            itemName: "Food Item",
            calorie: "20",
        },
    ]

    return (
        <Container fluid>
            <Row className={'justify-content-center'}>
                <Col md={8} className="breakfast_details">
                    <h5>Breakfast Details</h5>
                    <Form>
                        <Form.Group>
                            <Form.Control className="search_input" type="text" placeholder="Search Items" />
                        </Form.Group>
                    </Form>

                    <Row className={'mt-4'}>
                        {
                            foodItems.map((item, index) => (
                                <Col md={4} className={'mb-4'} key={index}>
                                    <div className="food_items">
                                        <div className={'food_items_stats'}>
                                            <h4>{item.itemName}</h4>
                                            <p>Calorie: {item.calorie}</p>
                                        </div>
                                        <AiFillPlusCircle />
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={3} className={'quick_details'}>
                    <h5>Quick Details</h5>
                    <hr />
                    <div className={'d-flex justify-content-between align-items-center'}>
                            <div className={'d-flex align-items-center justify-content-center quick_img'}>
                                <img src={Lemon} alt={'lemon'} />
                                <p className={'p-0 m-0 ml-3'}>Lemon</p>
                            </div>
                            <p className={'p-0 m-0'}>10 Calories</p>
                    </div>
                    <hr />
                    <Button className={'w-100'}>Calculate</Button>
                </Col>
            </Row>
        </Container>
    );
};
export default FoodDetail;
