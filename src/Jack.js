import Footer from "./Footer.js"
import Header from "./Header.js"
import './App.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import img15 from './image/im15.jpeg';

function Jack() {
    return (
        <>
            <Header />

            {/* jack start */}

            <div className="im22">
                <Container>
                    <Row className="pt-5">
                        <Col xs={12} md={6}><h5>JAKE BILL</h5></Col>
                        <Col xs={12} md={6}>
                            <ul className="d-flex justify-content-md-end">
                                <li>You Are Here: </li>
                                <li><Link to="/" className='aboutt'>HOME</Link></li>
                                <li>/TEAM</li>
                                <li>/ JAKE BILL</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* jack end */}


            {/* image start */}
            <Container>
                <Row className="pd-y">
                    <Col xs={12} md={5}>
                        <div>
                            <img src={img15} className="w-100"></img>
                        </div>
                    </Col>
                    <Col>
                        <div className="jake1">
                            <h2 className="mt-5">JAKE BILL</h2>
                            <p>Gardener</p>

                            <ul className="pho">
                                <li><i className="faph"><FaPhoneAlt></FaPhoneAlt></i> Phone:(719) 445-2808;(719) 445-2809</li>
                                <li><i className="faph"><MdLocationOn></MdLocationOn></i> Address: 4578 Marmora Road, Glasgow</li>
                                <li><i className="faph"><MdMailOutline></MdMailOutline></i> E-mail:info@demolink.org</li>
                            </ul>
                        </div>

                        <div className="profile">
                            <h4 className="mt-5">PROFILE</h4>
                            <p>Jake is in charge of landscaping. He knows how to deal with the lawn, flowers, shrubs, etc.</p>
                            <p>He will also do fertilizing and drainage in your garden.</p>
                            <p>Jake knows about plumbing everything and even more! He successfully completed apprenticeship program and got a plumber license in 2003. Jake started working and got certified parallel. He has got GreenPlumbers USA certificate and National Inspection Testing Certification (NITC) certificate. Before JohnnyGo Jake had worked at such respected companies as Sears Home Repair and Kaufman’s Experts. In 2011 Jake joined our team and quickly gained a reputation of responsible, careful worker and talented plumber.</p>
                            <p>Jake is one of our best skilled plumbers. He also is in charge of training our new staff and he consults our regular clients via phone if they have any plumbing questions. Jake can easily do the following kinds of work:</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>installing, fixing, removing faucets, sinks and toilets;</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>installing, removing and maintaining showers and tubs;</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>maintaining pipes and water lines;</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>unclogging and fixing disposals;</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>installing and maintaining dishwashers;</p>
                            <p><FaArrowRight className="farigh"></FaArrowRight>working with water heaters and septic tanks</p>
                        </div>

                        <div className="withcon">
                            <h3 className="mt-4">CONTACT WITH ME</h3>

                            <Form>
                                <Row className="mb-3 mt-4">
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
                                    <Form.Control placeholder="Your Comment" />
                                </Form.Group>

                                
                                <Button type="submit" className="send">
                                    SEND MESSAGE
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* image end */}

            <Footer />

        </>
    )
}
export default Jack;