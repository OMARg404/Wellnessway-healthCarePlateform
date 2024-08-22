import React, { useEffect } from 'react';
import './home.css';

function Footer() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/8d2dd34e3b.js';
    script.crossOrigin = 'anonymous';
    script.async = true;
    // Append script to document head
    document.head.appendChild(script);

    // Cleanup function to remove the script if component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
    <hr></hr>
      <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="WellnessWay">
                <span className="fs-5">WELLNESSWAY</span>
              </a>
              <ul className="list-unstyled small">
                <li className="mb-2">Designed and built with all the care in the world for your mental wellness.</li>
                <li className="mb-2">All content is licensed under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                <li className="mb-2">Currently v1.0.0.</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/about">About Us</a></li>
                <li className="mb-2"><a href="/services">Services</a></li>
                <li className="mb-2"><a href="/contact">Contact</a></li>
                <li className="mb-2"><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/guides">Guides</a></li>
                <li className="mb-2"><a href="/faq">FAQ</a></li>
                <li className="mb-2"><a href="/support">Support</a></li>
                <li className="mb-2"><a href="/terms">Terms of Service</a></li>
                <li className="mb-2"><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Connect</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li className="mb-2"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li className="mb-2"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li className="mb-2"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/forum">Forum</a></li>
                <li className="mb-2"><a href="/events">Events</a></li>
                <li className="mb-2"><a href="/partners">Partners</a></li>
                <li className="mb-2"><a href="/careers">Careers</a></li>
                <li className="mb-2"><a href="/volunteer">Volunteer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
