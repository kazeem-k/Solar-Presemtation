import React from "react";

const Home = () => {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="hero-subtitle">CLEAN • RELIABLE • AFFORDABLE</p>

          <h1>
            Power Your Future
            <span> With Solar Energy</span>
          </h1>

          <p className="hero-text">
            We provide reliable solar energy solutions for homes,
            businesses, and organizations. Enjoy clean and affordable
            electricity with our professional solar installation services.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Get a Quote
            </a>

            <a href="#projects" className="secondary-btn">
              View Our Projects
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="/solar images/rr.jpg"
            alt="Solar panels installed on a building"
          />
        </div>
      </section>


      {/* Introduction Section */}
      <section className="intro-section">

        <div className="section-heading">
          <p>OUR SOLAR SOLUTIONS</p>

          <h2>
            Reliable Energy for a
            <span> Better Future</span>
          </h2>

          <p>
            We design and install quality solar power systems that help
            homes and businesses reduce electricity costs and enjoy
            dependable power.
          </p>
        </div>

      </section>

    </main>
  );
};

export default Home;