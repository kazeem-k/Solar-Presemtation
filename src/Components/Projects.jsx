const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div className="section-heading" id>
        <p>OUR PROJECTS</p>

        <h2>
          Our Recent Solar
          <span> Installations</span>
        </h2>

        <p>
          Take a look at some of the solar energy projects we have
          completed for homes, businesses, and organizations.
        </p>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="/images/.jpg"
              alt="Residential solar installation"
            />
          </div>

          <div className="project-content">
            <p className="project-type">RESIDENTIAL</p>

            <h3>Home Solar Installation</h3>

            <p>
              Complete solar power system installed to provide
              reliable electricity for a residential building.
            </p>

            <div className="project-details">
              <span>5 kVA Inverter</span>
              <span>8 Solar Panels</span>
            </div>
          </div>
        </div>


        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="/solar images/rr.jpg"
              alt="Commercial solar installation"
            />
          </div>

          <div className="project-content">
            <p className="project-type">COMMERCIAL</p>

            <h3>Business Solar System</h3>

            <p>
              A commercial solar installation designed to provide
              dependable power and reduce electricity costs.
            </p>

            <div className="project-details">
              <span>7.5 kVA Inverter</span>
              <span>10 Solar Panels</span>
            </div>
          </div>
        </div>


        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="/images/solar5.jpg"
              alt="Large solar power installation"
            />
          </div>

          <div className="project-content">
            <p className="project-type">LARGE SYSTEM</p>

            <h3>High-Capacity Solar System</h3>

            <p>
              A high-capacity solar system designed to support
              the energy needs of a larger property.
            </p>

            <div className="project-details">
              <span>10 kVA System</span>
              <span>15 kWh Battery</span>
            </div>
          </div>
        </div>


        {/* Project 4 */}
        <div className="project-card">
          <div className="project-image">
            <img
              src="/solar images/solar project 3.jpg"
              alt="Solar installation project"
            />
          </div>

          <div className="project-content">
            <p className="project-type">RESIDENTIAL</p>

            <h3>Hybrid Solar Installation</h3>

            <p>
              A hybrid solar system providing backup power and
              reducing dependence on the national grid.
            </p>

            <div className="project-details">
              <span>5 kVA Hybrid Inverter</span>
              <span>Lithium Battery</span>
            </div>
          </div>
        </div>

      </div>

      <div className="projects-button">
        <a href="#contact" className="primary-btn">
          Start Your Project
        </a>
      </div>

    </section>
  );
};

export default Projects;