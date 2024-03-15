import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import SvgComponent from './graph';
import EnterpriseAIIcon from './obserbox';
import ComplianceIcon from './comp2';
import './back.css';

const Navb: React.FC = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     if (window.scrollY > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed={isNavbarFixed ? "top" : undefined}>
        <div className="container">
          <Navbar.Brand href="#">Mdlw.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              {/* <Nav.Link href="#">Home</Nav.Link> */}
              {/* <Nav.Link href="#">Contact</Nav.Link> */}
              {/* book a demo button */}
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact" className="btn btn-primary">Book a demo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
}

export default Navb;