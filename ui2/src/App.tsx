import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import SvgComponent from './graph';
import EnterpriseAIIcon from './obserbox';
import ComplianceIcon from './comp2';
import './back.css';
import "./App.css";
import Footerbg from './footerbg';
import Mainbg from './mainbg';
import Blurbg from './blurbg';

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

  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Footerbg />)
  );

  const mainbgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Mainbg />)
  );


  return (
    <>
      <div >
        {/* <div className='mesh-background' style={{ backgroundImage: `url("data:image/svg+xml,${mainbgString}")`}} > */}
        <div>
          <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="container">
              <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
                <p className="head-text-center" style={{ fontFamily: "Noto Sans"}}>
                  Middleware for your AI applications and models
                </p>
              </div>
              <div className="px-md-5"> {/* Adding padding on medium and larger screens */}
                <p className="head-text-center-2" style={{ color: '#811331', fontFamily: "Noto Sans" }}>
                  Deploy and manage your LLM applications with confidence, integrate with 3rd party vendors. Get actionable insights and visbility and scale better.
                </p>
              </div>
            </div>
          </section>
          <section id="features" className="py-5" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            <div className="container">
              <h1 className="feature-text-center mb-5 font-weight-bold">Features</h1>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <SvgComponent style={{ width: '60%', height: '60%' }} />
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                  <div>
                    <h2>Access Control</h2>
                    <p>Add user authentication and add rules based on vector db context. Aggressively restrict untoward queries.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-md-6 d-flex align-items-center'>
                  <div>
                    <h2>Observability</h2>
                    <ul>
                      <li>Efficiently log and monitor usage.</li>
                      <li>Tailor made for LLM usage and get insights on your vector database and model usage.</li>
                      <li>Get suggestions for optimizations.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <EnterpriseAIIcon style={{ width: '60%', height: '60%' }} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <ComplianceIcon style={{ width: '60%', height: '60%' }} />
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                  <div>
                    <h2>Compliance</h2>
                    <ul>
                      <li>Efficiently log and monitor usage.</li>
                      <li>Tailor made for LLM usage and get insights on your vector database and model usage.</li>
                      <li>Get suggestions for optimizations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <section>
              <Footerbg />
            </section> */}
          </section >
          <section id='contact' className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")`, height: '80vh' }}>
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
        </div>
      </div>
    </>
  );
}

export default App;
