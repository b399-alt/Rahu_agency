import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#6366f1" opacity="0.1" rx="20"/>
                <circle cx="200" cy="150" r="50" fill="#6366f1" opacity="0.3"/>
                <rect x="100" y="220" width="200" height="15" fill="#6366f1" opacity="0.5" rx="5"/>
                <rect x="100" y="250" width="150" height="15" fill="#8b5cf6" opacity="0.5" rx="5"/>
                <rect x="100" y="280" width="180" height="15" fill="#ec4899" opacity="0.5" rx="5"/>
                <text x="200" y="350" textAnchor="middle" fill="#6366f1" fontSize="20" fontWeight="bold">Team Excellence</text>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title">About Our Agency</h2>
            <p className="about-description">
              We are a passionate team of marketing professionals dedicated to helping businesses
              achieve their goals through innovative digital strategies and creative solutions.
            </p>
            <p className="about-description">
              With over 10 years of experience in the industry, we've helped hundreds of clients
              transform their online presence and drive measurable results.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">250+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Team Members</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
