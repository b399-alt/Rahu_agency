import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Creative<span>Agency</span></h3>
            <p className="footer-description">
              Transforming businesses through innovative marketing strategies and creative excellence.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">💼</a>
              <a href="#" className="social-icon">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Digital Strategy</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Brand Design</a></li>
              <li><a href="#">Web Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">Subscribe to get the latest news and updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Creative Agency. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
