import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContainer, Navbar, Nav, Button, Card } from 'react-bootstrap';

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
              <Nav.Link href="#contact" className="btn btn-primary">Book a demo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'white' }}>
        <div className="container">
          <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
            <h1 className="text-center" style={{ fontSize: '4rem' }}>
              <span style={{ color: 'red' }}>Mdlw</span>
            </h1>
          </div>
          <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
            <h1 className="text-center" style={{ fontSize: '4rem' }}>
              Smart middleware to supercharge your <span style={{ color: 'red' }}>AI</span> applications and models
            </h1>
          </div>
        </div>
      </section>
      <section id="features" className="py-5" style={{ height: '75vh', backgroundColor: '#df2055', color: 'white', opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <div className="container">
          <h2 className="text-center mb-5 font-weight-bold">Features</h2>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <Card className="mb-4 flex-fill" bg="light" style={{ backgroundColor: '#f4e2e7' }}>
                <Card.Body>
                  <Card.Title>Observability</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Efficiently log and monitor usage.</li>
                      <li>Tailor made for LLM usage and get insights on your vector database and model usage.</li>
                      <li>Get suggestions for optimizations.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <Card className="mb-4 flex-fill" bg="light" style={{ backgroundColor: '#f4e2e7' }}>
                <Card.Body>
                  <Card.Title>Access Control</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Go beyond basic user authentication and add rules for vector db</li>
                      <li>Aggresively restrict untoward queries and reduce costs.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <Card className="mb-4 flex-fill" bg="light" style={{ backgroundColor: '#f4e2e7' }}>
                <Card.Body>
                  <Card.Title>Compliance</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Our middleware is fully compliant with local data laws</li>
                      <li>Control what is logged, monitored at all steps.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
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
