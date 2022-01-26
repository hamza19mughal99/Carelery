import React, {useState} from 'react';
import Calorie from "../../assets/img/calorie.png";
import {Container, Row, Col, Button, Modal, Form, Dropdown} from "react-bootstrap";
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import {TextField} from "@mui/material";
import * as RiIcon from "react-icons/ri";
import Select from 'react-select'
import "./CalorieTracker.scss";

const CalorieTracker = () => {
    const [modalShow, setModalShow] = useState(false);
    const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));


    const modalOpenHandler = () => {
        setModalShow(true)
    }
    const options = [
        { value: 'Ft', label: 'Ft' },
    ]

    const modal = (
        <Modal
            show={modalShow}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className={'modal_header'}>
                <RiIcon.RiCloseCircleLine  onClick={() => setModalShow(false)}/>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Container fluid>
                    <Row>
                        {/*<Col md={12}>*/}
                        {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                        {/*            <DateTimePicker*/}
                        {/*                renderInput={(params) => <TextField {...params} />}*/}
                        {/*                value={value}*/}
                        {/*                onChange={() => setValue(new Date())}*/}
                        {/*            />*/}
                        {/*    </LocalizationProvider>*/}
                        {/*</Col>*/}
                        <Col md={8} className={'modal_col'}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Enter Your Height</Form.Label>
                                    <Form.Control type="text" placeholder="5" />
                                </Form.Group>
                        </Col>
                        <Col md={4} className={'unit'}>
                                <Select
                                    placeholder={'Ft'}
                                    options={options}
                                />
                        </Col>
                        <Col md={8} className={'modal_col'}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter Your Weight</Form.Label>
                                <Form.Control type="text" placeholder="65" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className={'unit'}>
                                <Select
                                    placeholder={'Kg'}
                                    options={options}
                                />
                        </Col>
                        <Col md={12} className={'modal_col'}>
                                <p>Gender</p>
                                <Form.Check
                                    type={'radio'}
                                    id={`default-radio`}
                                    label={`Male`}
                                />
                                <Form.Check
                                    type={'radio'}
                                    id={`default-radio`}
                                    label={`Female`}
                                />
                                <Form.Check
                                    type={'radio'}
                                    id={`default-radio`}
                                    label={`Others`}
                                />
                        </Col>
                        <Col md={12} className={'Submit_btn'}>
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Container>
                </Form>
            </Modal.Body>
        </Modal>
    )

    return (
        <React.Fragment>
            {modal}
            <Container>

                <Row className="calorie_tracker">
                    <Col md={6} className='calorie_tracker_heading'>
                        <h1>Calorie tracker</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vestibulum ex, eget ultrices ex. Vestibulum ac velit in metus laoreet volutpat at id risus. Curabitur mattis lobortis vehicula. Nullam eu lobortis purus. In hac habitasse platea dictumst.
                            Proin viverra aliquet nisl vitae auctor. Donec tortor augue, pharetra a efficitur non, tincidunt vitae felis.
                        </p>
                    </Col>
                    <Col md={6}>
                        <div className="calorie_tracker_image">
                            <img src={Calorie} alt={'calorie'}/>
                        </div>
                    </Col>
                </Row>

                <div className="calorie_tracker_button">
                    <Button
                    onClick={modalOpenHandler}
                    >
                        Breakfast
                    </Button>
                    <Button>Lunch</Button>
                    <Button>Dinner</Button>
                </div>

            </Container>
        </React.Fragment>
    );
};
export default CalorieTracker;
