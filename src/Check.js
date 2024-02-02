import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaChevronRight, FaCopy} from "react-icons/fa";


function Check() {
    return (
        <>

            <Container className='pd-y'>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='more'>
                            <h2>MORE SERVICES</h2>
                            <p>Check the whole list of landscaping services we offer and select what is the appropriate
                                one for you.</p>
                            <Row>
                                <Col className='care' xs={12} md={6}>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Irrigation & Drainage</h5>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Lawn & Garden Care</h5>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Planting & Removal</h5>

                                </Col>
                                <Col className='care' xs={12} md={6}>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Snow & Ice Removal</h5>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Spring & Fall Cleanup</h5>
                                    <h5><FaChevronRight className='tick'></FaChevronRight>Stone & Hardscaping</h5>
                                </Col>
                                <button className='btn7'><FaCopy></FaCopy>DOWNLOAD OUR BROCHURE</button>

                            </Row>
                        </div>
                    </Col>

                    <Col className='w-100'>
                        <div className='img7'>

                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default Check;