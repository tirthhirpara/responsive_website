import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img5 from './image/im5.jpeg';
import img6 from './image/im6.jpeg';
import img21 from './image/im21.jpeg';
import img24 from './image/im24.jpeg';



function Team() {
    return (
        <>
            <Container>
                <div className='team text-center'>
                    <h2>OUR TEAM</h2>
                </div>
                <Row className='pb-5'>
                    <Col md={3}>
                        <div>
                            <img src={img21} className='w-100 mt-4'></img>
                            <div className='jake text-center mt-4'>
                                <h3>Jake Bill</h3>
                                <h4>Gardener</h4>
                                <p>Jake is in charge of landscaping. He knows how to</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={img6} className='w-100 mt-4'></img>
                            <div className='jake text-center mt-4'>
                                <h3>Mary Scott</h3>
                                <h4>Landscape designer</h4>
                                <p>Mary knows about landscaping everything and even more! She successfully</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={img5} className='w-100 mt-4'></img>
                            <div className='jake text-center mt-4'>
                                <h3>Tom Allen</h3>
                                <h4>Gardener</h4>
                                <p>Tom works as a gardener for 4 years. He loves</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img src={img24} className='w-100 mt-4'></img>
                            <div className='jake text-center mt-4'>
                                <h3>Nina Cooper</h3>
                                <h4>Landscape designer</h4>
                                <p>Nina is an experienced landscape designer. She is very good</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Team;