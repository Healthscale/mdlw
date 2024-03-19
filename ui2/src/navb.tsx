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
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className={isTop ? 'p-3' : 'shadow-sm p-3'}>
      <Navbar.Brand href="#home" className="ml-7 font-weight-bold">
        <span style={{fontWeight: "bold"}}>ObzerveAI</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="nav-link-lg mr-3 font-weight-bold" href="#features">Features</Nav.Link>
          <NavDropdown className="nav-link-lg font-weight-bold" title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#discord">Discord</NavDropdown.Item>
            <NavDropdown.Item href="#whitepapers">White Papers</NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navb;