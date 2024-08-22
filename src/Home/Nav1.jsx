import React, { useEffect } from 'react';
import './home.css';

function Nav1() {
  useEffect(() => {
    // Create script element for Font Awesome
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

  const isRegistered = false; // Replace with actual registration status logic

  return (
    <>
      {/* Welcome Section */}
      <div className="d-flex flex-column align-items-center justify-content-center h-100vh text-center">
        <h1>Welcome to WellnessWay</h1>
        <p>A digital platform for mental wellness and wellbeing.</p>
      </div>

      {/* Sticky Top Navbar with Social Media Icons and Registration Status */}
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            {/*<img src="" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />*/}
            WELLNESSWAY
          </a>
          <div className="d-flex align-items-center">
            {/* Social Media Icons */}
            <a className="nav-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="nav-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="nav-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="nav-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>

            {/* Registration Status Icon */}
            <span className="ms-3">
              {isRegistered ? (
                <i className="fas fa-user-check" title="You are registered"></i>
              ) : (
                <i className="fas fa-user-times" title="You need to register"></i>
              )}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Nearby Hospitals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Doctor Availability</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Book Appointment</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Telemedicine</a></li>
                  <li><a className="dropdown-item" href="#">Patient Reviews</a></li>
                  <li><a className="dropdown-item" href="#">Insurance Compatibility</a></li>
                  <li><a className="dropdown-item" href="#">Cost Estimation</a></li>
                  <li><a className="dropdown-item" href="#">Specialized Search</a></li>
                  <li><a className="dropdown-item" href="#">Health Tracking</a></li>
                  <li><a className="dropdown-item" href="#">Community Resources</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Medical History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reminders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Emergency Contacts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Accessibility</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Multilingual Support</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav1;
