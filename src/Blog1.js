import './App.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Blog1()
{
    return(
        <>
            <div className="im22">
                <Container>
                    <Row className="pt-5">
                        <Col xs={12} md={6}><h5>BLOG</h5></Col>
                        <Col xs={12} md={6}>
                            <ul className="d-flex justify-content-md-end">
                                <li>You Are Here: </li>
                                <li><Link to="/" className='aboutt'>HOME</Link></li>
                                <li>/ BLOG</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

        
        </>
    )
}
export default Blog1;