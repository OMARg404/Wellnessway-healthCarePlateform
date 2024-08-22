import './mainHome.css';

function MainHome() {
  return (
    <>
      <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <aside className="bd-sidebar">
          <div
            className="offcanvas-lg offcanvas-start"
            tabIndex="-1"
            id="bdSidebar"
            aria-labelledby="bdSidebarOffcanvasLabel"
          >
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">
                Browse docs
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdSidebar"
              ></button>
            </div>

            <div className="offcanvas-body">
              <nav
                className="bd-links w-100"
                id="bd-docs-nav"
                aria-label="Docs navigation"
              >
                <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
                  <li><a href="#">Nearby Hospitals</a></li>
                  <li><a href="#">Doctor Availability</a></li>
                  <li><a href="#">Book Appointment</a></li>
                  <li><a href="#">Telemedicine</a></li>
                  <li><a href="#">Patient Reviews</a></li>
                  <li><a href="#">Insurance Compatibility</a></li>
                  <li><a href="#">Cost Estimation</a></li>
                  <li><a href="#">Specialized Search</a></li>
                  <li><a href="#">Health Tracking</a></li>
                  <li><a href="#">Community Resources</a></li>
                  <li><a href="#">My Medical History</a></li>
                  <li><a href="#">Reminders</a></li>
                  <li><a href="#">Emergency Contacts</a></li>
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Multilingual Support</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>

        <main className="bd-main order-1">
          <div className="bd-intro pt-2 ps-lg-2">
            <div className="d-md-flex flex-md-row-reverse align-items-center justify-content-between">
              <div className="mb-3 mb-md-0 d-flex text-nowrap">
                <a
                  className="btn btn-sm btn-bd-light rounded-2"
                  href=""
                  title="View and edit this file on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
              <h1 className="bd-title mb-0" id="content">
                Welcome to WellnessWay
              </h1>
            </div>
            <p className="bd-lead">
              A digital platform designed to enhance your well-being and healthcare experience.
            </p>
          </div>

          <div className="bd-content ps-lg-2">
            <section className="overview">
              <h2>Website Overview</h2>
              <p>
                Our hospital website offers a user-friendly experience for all your healthcare needs. Here's what you can expect:
              </p>
              <ul>
                <li>
                  <strong>Locate Nearby Hospitals:</strong> Easily find hospitals close to your location.
                </li>
                <li>
                  <strong>View Details and Book Appointments:</strong> Get comprehensive information about hospitals and book appointments effortlessly.
                </li>
                <li>
                  <strong>Real-Time Doctor Availability:</strong> Check the availability of doctors in real-time.
                </li>
                <li>
                  <strong>Telemedicine Options:</strong> Access virtual consultations from the comfort of your home.
                </li>
                <li>
                  <strong>Patient Reviews:</strong> Read reviews from other patients to make informed decisions.
                </li>
                <li>
                  <strong>Insurance Compatibility:</strong> Filter hospitals based on insurance compatibility.
                </li>
                <li>
                  <strong>Cost Estimation:</strong> Estimate the cost of medical services before booking.
                </li>
                <li>
                  <strong>Specialized Search Options:</strong> Find hospitals and doctors based on specific needs and specialties.
                </li>
                <li>
                  <strong>Personalized User Experience:</strong> Manage your medical history, set reminders, and store emergency contacts.
                </li>
                <li>
                  <strong>Multilingual Support and Accessibility:</strong> Ensure the website is accessible to everyone with support for multiple languages and accessibility options.
                </li>
                <li>
                  <strong>Health Tracking and Community Resources:</strong> Track your health and connect with community resources for comprehensive care.
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainHome;
