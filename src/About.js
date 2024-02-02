import Header from "./Header";
import './App.js';
import './App.css';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Check from "./Check.js";
import { FaRegClock,FaMedal,FaPiggyBank,FaStar,FaCaretRight } from "react-icons/fa";


function About() {
    return (
        <>

            <Header />

            {/* about start */}
            <div className="im22">
                <Container>
                    <Row className="pt-5">
                        <Col xs={12} md={6}><h5>ABOUT</h5></Col>
                        <Col xs={12} md={6}>
                            <ul className="d-flex justify-content-md-end">
                                <li>You Are Here: </li>
                                <li><Link to="/" className='aboutt'>HOME</Link></li>
                                <li>/ ABOUT</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* about end */}

            {/* need start */}
            
            <div className="neede">
                
                <Container>
                    <Row className="text-center">
                        <Col></Col>
                        <Col md={6}>
                                <div className="some">
                                    <h1>Need some professional household help?</h1>
                                    <p className="mt-4">Contact our Customer Service representative to make an appointment and to answer all your questions!</p>
                                    <button className="btn23 mt-4">MAKE AN APPOINMENT</button>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* need end */}
            <Check/>

            {/* why choose start */}
            
            <div className="whyy pd-y">
            <Container>
                    <div className='we-do'>
                        <h3>WHAT WE DO?</h3>
                    </div>
                    <Row className='mt-4'>
                        <Col xs={12} md={3} className="text-sm-center text-lg-left">
                            <div className='treee pt-2'>
                                <FaRegClock className="reg"></FaRegClock>
                                <div className='leaf pt-2'>
                                    <h4>Always Available</h4>
                                    <p>We accept requests and phone calls 24/7 so you could resolve any problem whenever you need. Our emergency team will be at your place to fix the breakdown at short notice.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="text-sm-center text-lg-left">
                            <div className='treee pt-2'>
                            <FaMedal className="reg"></FaMedal>

                                <div className='leaf pt-2'>
                                    <h4>Qualified Agents</h4>
                                    <p>All our team members are high-qualified, educated and skilled agents. All of them are being trained according to the latest technologies.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="text-sm-center text-lg-left">
                            <div className='treee pt-2'>
                            <FaPiggyBank className="reg"></FaPiggyBank>

                                <div className='leaf pt-2'>
                                    <h4>Fair Prices</h4>
                                    <p>Our prices are both fair and affordable for all people. We offer flexible discount system so you could use any service you need.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="text-sm-center text-lg-left">
                            <div className='treee pt-2'>
                            <FaStar className="reg"></FaStar>

                                <div className='leaf pt-2'>
                                    <h4>Best Offers</h4>
                                    <p>We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* why choose end */}

            
            {/* our mission start */}
            
            <Container>
                <Row className="pd-y">
                    <Col xs={12} md={6}>
                        <div className="mission">
                            <h3>OUR MISSION</h3>
                            <p>We work to ensure people's comfort at their home, and to provide the best and the fastest help at fair prices. We stand for quality, safety and credibility, so you could be sure about our work.</p>
                            <p>Initially we started as a company specializing in household maintenance. During our successful work we expanded our list of services. Now we are proud that we can help people with welding, moving, dry cleaning, landscaping and even pest control.</p>
                            <p>Every member of our team is indeed good at his job and the company guarantees the quality of work and materials we use.</p>
                            <p>We value our every worker and every client, and we strive to do our best to provide you with the best services ever.</p>

                            <button className="ourr mt-4">OUR PROJECTS</button>
                        </div>                    
                    </Col>
                    <Col xs={12} md={6} className="mt-sm-5 mt-md-0">
                        <h3>POPULAR QUESTIONS</h3>
                        <p className="mt-4"><FaCaretRight></FaCaretRight> Why does a renovation project cost so much?</p>
                        <p><FaCaretRight></FaCaretRight> What is the timeline for the project?</p>
                        <p><FaCaretRight></FaCaretRight> What is the total budget for construction?</p>
                        <p><FaCaretRight></FaCaretRight> How is renovation project initiated?</p>
                    </Col>
                </Row>

            </Container>
            
            {/* our mission end */}
            <Footer />

        </>
    )
}
export default About;
