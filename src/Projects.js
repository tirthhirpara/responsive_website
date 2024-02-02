import Footer from "./Footer"
import Header from "./Header"
import './App.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img25 from './image/im25.jpeg';
import img28 from './image/im28.jpeg';
import img29 from './image/im29.jpeg';
import img30 from './image/im30.jpeg';
import img31 from './image/im31.jpeg';
import img32 from './image/im32.jpeg';


function Projects() {
    return (
        <>
            <Header />
            {/* single project start */}
            <div className="im22">
                <Container>
                    <Row className="pt-5">
                        <Col xs={12} md={6}><h5>SINGLE PROJECT</h5></Col>
                        <Col xs={12} md={6}>
                            <ul className="d-flex justify-content-md-end">
                                <li>You Are Here: </li>
                                <li><Link to="/" className='aboutt'>HOME</Link></li>
                                <li>/ SINGLE PROJECT</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* single project end */}

            {/* image start */}

            <Container>
                <Row className="pd-y">
                    <Col md={12} lg={7}>
                        <div className="impro">
                            <h3>IMAGE PROJECT</h3>
                            <img src={img25} className="w-100"></img>
                        </div>
                        <Row className="mt-4">
                            <Col xs={6}>
                                <div className="img28 w-100">
                                    <img src={img29} className="w-100"></img>
                                    <div className="plus">
                                        <h1>+</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="img28 w-100">
                                    <img src={img28} className="w-100"></img>
                                    <div className="plus">
                                        <h1>+</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="img28 w-100 mt-4">
                                    <img src={img30} className="w-100"></img>
                                    <div className="plus">
                                        <h1>+</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="img28 w-100 mt-4">
                                    <img src={img31} className="w-100"></img>
                                    <div className="plus">
                                        <h1>+</h1>
                                    </div>
                                </div>
                            </Col>


                        </Row>
                    </Col>
                    <Col md={12} lg={5}>
                        <div className="mt-4">
                            <h4>LATEST PROJECTS</h4>
                        </div>
                        <div className="img32 w-100 mt-4">
                            <img src={img32} className="w-100"></img>
                            <div className="pluss">
                                <h1>+</h1>
                            </div>
                        </div>
                        <div>

                            <h3 className="mt-4 gar">GARDEN AT 7TH AVE, GLASGOW</h3>
                        </div>

                        <div className="img32 w-100 mt-4">
                            <img src={img28} className="w-100"></img>
                            <div className="pluss">
                                <h1>+</h1>
                            </div>
                        </div>
                        <div>

                            <h3 className="mt-4 gar">HEATHER LN, GLASGOW</h3>
                        </div>

                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col xs={6}>
                        <div>
                            <h3>PROJECT OVERVIEW</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* image end */}
            <Footer />
        </>
    )
}
export default Projects