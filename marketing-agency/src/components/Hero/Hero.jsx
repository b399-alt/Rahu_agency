import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Brand with <span>Creative Marketing</span>
            </h1>
            <p className="hero-description">
              We are a full-service digital marketing agency helping businesses grow
              through innovative strategies, stunning design, and data-driven campaigns.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get Started
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('portfolio')}>
                View Our Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="400" fill="#f0f0f0"/>
                <circle cx="250" cy="150" r="60" fill="#6366f1" opacity="0.2"/>
                <circle cx="150" cy="250" r="40" fill="#8b5cf6" opacity="0.2"/>
                <circle cx="350" cy="280" r="50" fill="#ec4899" opacity="0.2"/>
                <path d="M 100 300 Q 250 200 400 300" stroke="#6366f1" strokeWidth="3" fill="none"/>
                <text x="250" y="200" textAnchor="middle" fill="#6366f1" fontSize="24" fontWeight="bold">Marketing</text>
                <text x="250" y="230" textAnchor="middle" fill="#333" fontSize="16">Strategy & Growth</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
