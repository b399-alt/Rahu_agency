import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>
              Creative<span>Agency</span>
            </h1>
          </div>
          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("services")}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")}>About</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("testimonials")}>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contact")}
                  className="contact-btn"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
