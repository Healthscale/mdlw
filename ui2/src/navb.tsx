import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './navb.css';

const Navb = () => {
  const [buttonVariant, setButtonVariant] = useState('outline-dark');
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setIsTop(window.pageYOffset === 0);
    };
  }, []);

  return (
    <Navbar style={{ paddingTop: "1rem" }} collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className={isTop ? 'px-3' : 'shadow-sm px-3'}>
      <Navbar.Brand href="#home" className="ml-7 font-weight-bold text-dark" style={{"paddingLeft": '8%' }} >
        <span style={{ fontWeight: "bold", fontSize: '1.5em', color: '#811331' }}>ObzerveAI</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="nav-link-lg mr-3 font-weight-bold text-dark ml-auto" href="#features" style={{ fontSize: '1.2em' }}>Features</Nav.Link>
          <NavDropdown className="nav-link-lg font-weight-bold text-dark" title="Resources" id="collasible-nav-dropdown" style={{ fontSize: '1.2em' }}>
            <NavDropdown.Item href="#discord" style={{ fontSize: '1.2em' }}>Discord</NavDropdown.Item>
            <NavDropdown.Item href="#whitepapers" style={{ fontSize: '1.2em' }}>White Papers</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div style={{ "paddingRight": "8%" }}>
        <Button
          variant={buttonVariant}
          className="ml-2 mr-5"
          onMouseEnter={() => setButtonVariant('dark')}
          onMouseLeave={() => setButtonVariant('outline-dark')}
          onMouseDown={() => setButtonVariant('light')}
          onMouseUp={() => setButtonVariant('dark')}
        >
          Schedule a Demo
        </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navb;