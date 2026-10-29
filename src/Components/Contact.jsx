const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <p>CONTACT US</p>

        <h2>
          Let's Power Your Future
          <span> With Solar Energy</span>
        </h2>

        <p>
          Have a solar project in mind? Contact us today and
          let us help you find the right solar solution.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h3>Get In Touch</h3>00
           

          <p>
            We are ready to answer your questions and help you
            choose the right solar energy system.
          </p>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+234 800 000 0000</p>
            </div>
          </div>

          <div className="contact-item">
            <span>💬</span>
            <div>
              <h4>WhatsApp</h4>
              <p>+234 800 000 0000</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <p>info@solarcompany.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Osogbo, Osun State, Nigeria</p>
            </div>
          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form">

          <h3>Request a Quote</h3>

          <form>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required</label>

              <select id="service">
                <option value="">Select a service</option>
                <option value="solar-installation">
                  Solar Installation
                </option>
                <option value="inverter-battery">
                  Inverter & Battery
                </option>
                <option value="system-design">
                  Solar System Design
                </option>
                <option value="maintenance">
                  Maintenance & Repair
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your solar project"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Request
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;