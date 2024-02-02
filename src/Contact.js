import Footer from "./Footer"
import Header from "./Header"
import './App.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdMailOutline } from "react-icons/md";

function Contact() {
    return (
        <>
            <Header />

            {/* contact start */}

            <div className="im22">
                <Container>
                    <Row className="pt-5">
                        <Col xs={12} md={6}><h5>CONTACT</h5></Col>
                        <Col xs={12} md={6}>
                            <ul className="d-flex justify-content-md-end">
                                <li>You Are Here: </li>
                                <li><Link to="/" className='aboutt'>HOME</Link></li>
                                <li>/ CONTACTS</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* contact end */}

            {/* icon start */}

            <Container>
                <Row className="pd-y">
                    <Col className="d-flex mb-sm-4 mb-md-0" xs={12} md={4}>
                        <FaPhoneAlt className="faphone"></FaPhoneAlt>
                        <ul>
                            <li>Phone:</li>
                            <li>(719) 445-2808; (719) 445-2808;</li>
                        </ul>
                    </Col>
                    <Col className="d-flex mb-sm-4 mb-md-0" xs={12} md={4}><MdLocationOn className="faphone"></MdLocationOn>
                        <ul>
                            <li>Address:</li>
                            <li>4578 Marmora Road, Glasgow</li>
                        </ul>
                    </Col>
                    <Col className="d-flex mb-sm-4 mb-md-0" xs={12} md={4}><MdMailOutline className="faphone"></MdMailOutline>
                        <ul>
                            <li>E-mail:</li>
                            <li>info@demolink.org</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            {/* icon end */}

            {/* form start */}

            <Container>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control type="password" placeholder="Your Email" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="Your Website" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Control placeholder="Your Company" />
                    </Form.Group>

                    <Button className="submi mb-5">
                        Submit
                    </Button>
                </Form>
            </Container>

            {/* form end */}
            <Footer />
        </>
    )
}
export default Contact;