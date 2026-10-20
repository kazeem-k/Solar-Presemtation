const Services = () => {
  return (
    <section className="services" id="services">

      <div className="section-heading">
        <p>OUR SERVICES</p>

        <h2>
          Complete Solar Energy
          <span> Solutions</span>
        </h2>

        <p>
          We provide reliable solar energy solutions designed to meet
          the power needs of homes, businesses, and organizations.
        </p>
      </div>

      <div className="services-container">

        {/* Service 1 */}
        <div className="service-card">
          <div className="service-icon">☀️</div>

          <h3>Solar Installation</h3>

          <p>
            Professional installation of solar power systems for homes,
            offices, shops, and other buildings.
          </p>

          <a href="#contact">Learn More →</a>
        </div>


        {/* Service 2 */}
        <div className="service-card">
          <div className="service-icon">🔋</div>

          <h3>Inverter & Battery</h3>

          <p>
            Installation of reliable inverter and battery systems
            for backup and uninterrupted power supply.
          </p>

          <a href="#contact">Learn More →</a>
        </div>


        {/* Service 3 */}
        <div className="service-card">
          <div className="service-icon">⚡</div>

          <h3>Solar System Design</h3>

          <p>
            We design solar systems based on your electricity
            consumption and specific energy requirements.
          </p>

          <a href="#contact">Learn More →</a>
        </div>


        {/* Service 4 */}
        <div className="service-card">
          <div className="service-icon">🔧</div>

          <h3>Maintenance & Repair</h3>

          <p>
            Professional maintenance and repair services to keep
            your solar system working efficiently.
          </p>

          <a href="#contact">Learn More →</a>
        </div>


        {/* Service 5 */}
        <div className="service-card">
          <div className="service-icon">🏢</div>

          <h3>Commercial Solar</h3>

          <p>
            Solar energy solutions for businesses and organizations
            looking to reduce electricity costs.
          </p>

          <a href="#contact">Learn More →</a>
        </div>


        {/* Service 6 */}
        <div className="service-card">
          <div className="service-icon">🏠</div>

          <h3>Residential Solar</h3>

          <p>
            Affordable solar power systems designed to provide
            reliable electricity for homes and families.
          </p>

          <a href="#contact">Learn More →</a>
        </div>

      </div>

    </section>
  );
};

export default Services;