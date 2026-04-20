import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: '👩',
      text: 'Working with Creative Agency has been a game-changer for our business. Their strategic approach and creative solutions helped us increase our online presence by 250%.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director, GrowthCo',
      image: '👨',
      text: 'The team at Creative Agency delivered beyond our expectations. Their attention to detail and commitment to results is unmatched. Highly recommend!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, StyleHub',
      image: '👱‍♀️',
      text: 'From brand identity to digital campaigns, Creative Agency handled everything with professionalism and creativity. Our revenue has tripled since working with them.'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CMO, InnovateCorp',
      image: '🧔',
      text: 'Outstanding service and results! The Creative Agency team truly understands digital marketing and knows how to drive measurable business outcomes.'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevTestimonial}>
            ❮
          </button>

          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              {testimonials[activeTestimonial].text}
            </p>
            <div className="testimonial-author">
              <div className="author-image">
                {testimonials[activeTestimonial].image}
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[activeTestimonial].name}</h4>
                <p className="author-position">{testimonials[activeTestimonial].position}</p>
              </div>
            </div>
          </div>

          <button className="slider-btn next" onClick={nextTestimonial}>
            ❯
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
