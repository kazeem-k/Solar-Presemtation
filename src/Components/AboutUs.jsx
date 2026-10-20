const About = () => {
    return (
        <main >
   
            <section id="about" className="about-hero">
                <div className="about-content">
                    <p className="about-subtitle">ABOUT OUR COMPANY</p>

                    <h1>
                        Powering Homes and Businesses
                        <span> With Clean Energy</span>
                    </h1>

                    <p>
                        We are a professional solar energy company providing reliable
                        and affordable solar power solutions for homes, businesses,
                        and organizations.
                    </p>

                    <p>
                        Our goal is to help our customers enjoy dependable electricity
                        while reducing their dependence on traditional power sources.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src="/solar images/rr.jpg"
                        alt="Solar panels installed for a customer"
                    />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us">
                <div className="section-heading">
                    <p>WHY CHOOSE US</p>

                    <h2>
                        Reliable Solar Solutions
                        <span> You Can Trust</span>
                    </h2>

                    <p>
                        We are committed to providing quality solar installations
                        and excellent customer service.
                    </p>
                </div>

                <div className="about-cards">

                    <div className="about-card">
                        <h3>Quality Installation</h3>
                        <p>
                            We install solar systems carefully using quality equipment
                            and professional installation methods.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Reliable Power</h3>
                        <p>
                            Our solar solutions are designed to provide dependable
                            electricity for homes and businesses.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Customer Support</h3>
                        <p>
                            We provide support and guidance to help customers get the
                            best performance from their solar systems.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default About;