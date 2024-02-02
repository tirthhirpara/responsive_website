import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoIosLeaf, IoMdSettings} from "react-icons/io";
import { AiFillAlipaySquare } from "react-icons/ai";

function Tree() {
    return (

        <>
            <div className='what pd-y'>
                <Container>
                    <div className='we-do'>
                        <h3>WHAT WE DO?</h3>
                    </div>
                    <Row className='mt-4'>
                        <Col xs={12} md={4}>
                            <div className='tree pt-5'>
                                <IoIosLeaf className='ioio'></IoIosLeaf>
                                <div className='leaf'>
                                    <h4>TREE AND SHRUB PRUNING</h4>
                                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='tree pt-5'>
                                <IoMdSettings className='ioio'></IoMdSettings>
                                <div className='leaf'>
                                    <h4>GARDEN BED MAINTENANCE</h4>
                                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='tree pt-5'>
                                <AiFillAlipaySquare className='ioio'></AiFillAlipaySquare>
                                <div className='leaf'>
                                    <h4>IRRIGATION & DRAINAGE</h4>
                                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Tree;