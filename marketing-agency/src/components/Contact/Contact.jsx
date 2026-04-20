import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's talk about how we can help your business grow.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Marketing Street<br/>New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email Us</h3>
                <p>info@creativeagency.com<br/>support@creativeagency.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567<br/>Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                Thank you! We'll get back to you soon.
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
