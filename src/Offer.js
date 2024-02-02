import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoIosLink } from "react-icons/io";

import { FaHandshake, FaBus} from "react-icons/fa";

function Offer() {
    return (
        <>
            <Container>
                <div className='why text-center'>
                    <h3>WHY CHOOSE JARDINIER</h3>
                </div>
                <Row className='text-center justify-content-around w-100 pd-x'>
                    <Col>
                        <div className='we-offer my-2'>
                            <FaHandshake className='ms-auto w-100 hand'></FaHandshake><h5>WE OFFER</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className='we-offer my-2'>
                            <IoIosLink className='ms-auto w-100 hand'></IoIosLink><h5>WE GUARANTEE</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className='we-offer my-2'>
                            <FaBus className='ms-auto w-100 hand'></FaBus><h5>WE PROVIDE</h5>
                        </div>
                    </Col>
                </Row>

                <div className='huge px-5 text-center pt-5'>
                    <p>A huge number of services and works done by high-class experts using the latest technologies. We are here to meet your every demand so you could have no worries about your home!</p>

                    <i>Call us and our manager will answer any of your question and help you to resolve any issue!</i>
                </div>
            </Container>
        </>
    )
}
export default Offer;