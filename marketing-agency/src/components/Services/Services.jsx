import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎯',
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all major social media platforms.'
    },
    {
      id: 3,
      icon: '🎨',
      title: 'Brand Design',
      description: 'Creative and memorable brand identities that make your business stand out from the competition.'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers and drive business growth.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'SEO & Analytics',
      description: 'Data-driven SEO strategies to improve your search rankings and measure campaign success.'
    },
    {
      id: 6,
      icon: '📝',
      title: 'Content Marketing',
      description: 'Compelling content that tells your brand story and connects with your target audience.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive marketing solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
