import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import SvgComponent from './graph';
import EnterpriseAIIcon from './obserbox';
import ComplianceIcon from './comp2';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById('features')?.offsetTop || 0;
      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      }
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
    <>
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
      <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'white' }}>
        <div className="container">
          {/* <div className="px-md-5">
            <h1 className="text-center" style={{ fontSize: '4rem' }}>
              <span style={{ color: '#FF7074' }}>Mdlw</span>
            </h1>
          </div> */}
          <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
            <p className="text-center" style={{ fontSize: '4rem', fontFamily: "Rubik" }}>
              Middleware for your <span style={{ }}>AI</span> applications and models
            </p>
          </div>
          <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
            <p className="text-center" style={{ color: '#FF7074', fontSize: '1.5rem', fontFamily: "Rubik" }}>
              Deploy and manage your LLM applications with confidence, integrate with 3rd party vendors. Get actionable insights and visbility and scale better.
            </p>
          </div>
        </div>
      </section>
      <section id="features" className="py-5" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <div className="container">
          <h2 className="text-center mb-5 font-weight-bold">Features</h2>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <SvgComponent style={{ width: '60%', height: '60%' }}/>
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div>
                <h3>Access Control</h3>
                <p>Add user authentication and add rules based on vector db context. Aggressively restrict untoward queries.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-md-6 d-flex align-items-center'>
              <div>
                <h3>Observability</h3>
                <ul>
                  <li>Efficiently log and monitor usage.</li>
                  <li>Tailor made for LLM usage and get insights on your vector database and model usage.</li>
                  <li>Get suggestions for optimizations.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <EnterpriseAIIcon style={{ width: '60%', height: '60%' }}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <ComplianceIcon style={{ width: '60%', height: '60%' }}/>
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div>
                <h3>Compliance</h3>
                <ul>
                  <li>Efficiently log and monitor usage.</li>
                  <li>Tailor made for LLM usage and get insights on your vector database and model usage.</li>
                  <li>Get suggestions for optimizations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section id='contact' className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'black' }}>
        <div className="container" style={{ width: '60%' }}>
          <div className='row bg-dark p-4 rounded-lg text-center'>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-left mb-4">
                <h2 className="font-weight-bold text-light">Get in touch</h2>
                <p className="text-light">Connect with us to improve your AI application</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-right">
                <Button variant="light" href="https://calendly.com/siddharth22/mdlw-ai-middleware-connect" size="lg">Book Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
