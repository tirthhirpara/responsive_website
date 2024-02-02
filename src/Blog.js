import Header from "./Header";
import './App.js';
import './App.css';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Check from "./Check.js";
import { FaRegClock, FaMedal, FaPiggyBank, FaStar, FaCaretRight } from "react-icons/fa";
import Blog1 from "./Blog1";
import img25 from './image/im25.jpeg';
import img26 from './image/im26.jpeg';
import img27 from './image/im27.jpeg';

function Blog() {
    return (
        <>
            <Header />
            <Blog1 />

            <Container>
                <Row className="pd-y">
                    <Col xs={12}>
                        <div className="img25">

                            <div className="content25 text-center">
                                <h2 className="pt-5">ELIT SED DO EIUSMOD TEMPOR</h2>

                                <p className="px-5">From art market mainstays to persistent provocateu. It was a tall order and a picky search for us, when we tasked ourselves with determining an ultimate list of the greatest living modern artists. Chances are, that the list below will be debated by many but alas… When you need your company...</p>

                                <button className="btn25 mb-5">VIEW MORE</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="img26">

                            <div className="content25 text-center">
                                <h2 className="pt-5">ELIT SED DO EIUSMOD TEMPOR</h2>

                                <p className="px-5">From art market mainstays to persistent provocateu. It was a tall order and a picky search for us, when we tasked ourselves with determining an ultimate list of the greatest living modern artists. Chances are, that the list below will be debated by many but alas… When you need your company...</p>

                                <button className="btn25 mb-5">VIEW MORE</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="img27">

                            <div className="content25 text-center">
                                <h2 className="pt-5">ELIT SED DO EIUSMOD TEMPOR</h2>

                                <p className="px-5">From art market mainstays to persistent provocateu. It was a tall order and a picky search for us, when we tasked ourselves with determining an ultimate list of the greatest living modern artists. Chances are, that the list below will be debated by many but alas… When you need your company...</p>

                                <button className="btn25 mb-5">VIEW MORE</button>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>

            <Footer />
        </>
    )
}
export default Blog;