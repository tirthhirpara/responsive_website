import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {IoIosArrowForward} from "react-icons/io";
import img4 from './image/im4.jpeg';
import img5 from './image/im5.jpeg';
import img6 from './image/im6.jpeg';


function Planting() {
    return (
        <>
            <Container>
                <Row className='pd-y'>
                    <Col xs={12} sm={12} md={12} xl={6} py-3>
                        <div className='img5 w-100'>
                            <img src={img4} className='w-100'></img>

                            <div className='exception'>
                                <h5>EXCEPTIONAL</h5>
                                <h4>SERVICES WE OFFER</h4>
                                <p>We offer a wide range of landscaping services to create beautiful and comfortable atmosphere at your garden area. Our experts work with plants with care and attention.</p>
                                <button className='btn2'>SEE OUR PROJECTS</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3} py-3>
                        <div className='w-100'>
                            <img src={img5} className='w-100'></img>
                        </div>
                        <div className='content5 pt-3'>
                            <h5>PLANTING & REMOVAL</h5>
                            <p>If you want your garden to be well-maintained, and need some trees and plants to be removed, pruned or fertilized, our professional team will do everything for you, so you will totally have no worries.</p>
                            <a>VIEW DETAILS <IoIosArrowForward ></IoIosArrowForward></a>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={3} py-3>
                        <div className='w-100'>
                            <img src={img6} className='w-100'></img>
                        </div>
                        <div className='content5 pt-3'>
                            <h5>LAWN & GARDEN CARE</h5>
                            <p>Maintained lawn and garden create a cosy atmosphere engaging the whole family to gather for a barbeque and have great family time. It’s always pleasant to see green and beautiful garden area surrounding your house.</p>
                            <a>VIEW DETAILS <IoIosArrowForward ></IoIosArrowForward></a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Planting;