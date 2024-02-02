import './App.css';
import './media.css'
import React from 'react';
import { Col, Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoMdTime, IoMdCall} from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronRight,FaSearch, FaShoppingCart, FaCampground} from "react-icons/fa";
import logo from './image/logo.webp';
import { Link } from "react-router-dom";



function Header() {
    return(
        <>
        <Container>
        <Row className='align-items-center py-4'>
          <Col className='logo text-center my-2' md={12} xl>
            <img src={logo}></img>
          </Col>
          <Col className='d-sm-none d-md-block my-2 text-center mon' md={4} xl>
            <div className='d-flex'>
              < IoMdTime className='fs-4 mt-1 time text-center'></IoMdTime>
              <ul className='ps-2'>
                <li>Mon-Fri: 10AM-7PM;</li>
                <li>Sat-Sun: 10AM-3PM</li>
              </ul>
            </div>
          </Col>
          <Col className=' d-sm-none d-md-block my-2 text-center mon' md={4} xl>
            <div className='d-flex'>
              <IoLocationSharp className='fs-4 mt-1 time'></IoLocationSharp>
              <ul className='ps-2'>
                <li>4578 Marmora Road,</li>
                <li>Glasgow</li>
              </ul>
            </div>
          </Col>
          <Col className='d-sm-none d-md-block my-2 text-center mon' md={4} xl>
            <div className='d-flex'>
              <IoMdCall className='fs-4 mt-1 time my-2' xl></IoMdCall>
              <ul className='ps-2'>
                <li>4578 Marmora Road,</li>
                <li>Glasgow</li>
              </ul>
            </div>
          </Col>
          <Col className=' d-sm-none d-xl-block mon'>
            <button className='btn1'>MAKE AN APPOINMENT</button>
          </Col>
        </Row>
      </Container>

      <div className='header'>
        <Container>
          <Navbar expand="lg" className="bg-color">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home"><Link to="/" className='abou'>HOME</Link></Nav.Link>
                  <Nav.Link href="#link"><Link to="/about" className='abou'>ABOUT</Link>
</Nav.Link>
                  <Nav.Link href="#link"><Link to="/blog" className='abou'>BLOG</Link></Nav.Link>

                  <NavDropdown title="PAGES" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><Link to="/projects" className='abo'>Projects<FaChevronRight></FaChevronRight></Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    <Link to="/jack" className='abo'>Team<FaChevronRight></FaChevronRight></Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Services<FaChevronRight></FaChevronRight></NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                  </NavDropdown>
                  <Nav.Link href="#link"><Link to="/contact" className='abou'>CONTACT</Link></Nav.Link>

                </Nav>
              </Navbar.Collapse>

              <Navbar.Brand href="#home"><FaSearch className='search'></FaSearch></Navbar.Brand>
              <Navbar.Brand href="#home"><FaShoppingCart className='search'></FaShoppingCart></Navbar.Brand>
              <Navbar.Brand href="#home"><FaCampground className='search'></FaCampground></Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </div>
        </>
    )
}
export default Header;