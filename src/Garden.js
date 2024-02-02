import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Garden() {
    return (
        <>
            <div className='garden pd-y'>
                <div className='im20'>
                    <Container>
                        <Row>
                            <Col className='need' lg={6}>
                                <h2 className='mt-5'>GARDNER NEED & LANDSCAPING</h2>
                                <h5>IF YOU HAVE AN GARDNER NEED, SIMPLY CALL OUR 24 HOUR EMERGENCY NUMBER</h5>
                                <h1>Tel: (719) 445-2808</h1>

                                <button className='btn4'>MAKE AN APPOINMENT</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div></>
    )
}
export default Garden;