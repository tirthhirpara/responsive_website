import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaCaretRight } from "react-icons/fa";

function Footer() {
    return(
        <div>
            <div className='foot'>
        <Container>
          <Row className='pd-y footer'>
            <Col md={4}>
              <h5>ABOUT</h5>
              <p>Jardinier is a large company with more than 10 years of experience in helping people with their house problems and malfunctions. During our work we helped a huge number of people and have garnered a reputation as a stable company with a team of real skilled experts who don't fear any difficulties.</p>
            </Col>
            <Col md={4} className='fo'>
              <h3>SERVICES</h3>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Tree and Shrub Pruning</p>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Garden Bed Maintenance</p>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Irrigation & Drainage</p>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Lawn & Garden Care</p>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Planting & Removal</p>
              <p><i className='car'><FaCaretRight></FaCaretRight></i>Snow & Ice Removal</p>
            </Col>
            <Col md={4}>
              <h3>CONTACT</h3>
              <p>Call: (719) 445-2808</p>
              <p>Mon-Fri: 10 AM - 7 PM; Sat-Sun: 10 AM - 3 PM</p>
              <p>4578 Marmora Road, Glasgow</p>
              <p>info@demolink.org</p>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
    )
}
export default Footer;