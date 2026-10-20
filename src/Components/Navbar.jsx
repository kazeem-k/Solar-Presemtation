const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">

        <a href="#" className="logo">
          Solar<span>Power</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="quote-btn">
          Get a Quote
        </a>

      </nav>
    </header>
  );
};

export default Navbar;