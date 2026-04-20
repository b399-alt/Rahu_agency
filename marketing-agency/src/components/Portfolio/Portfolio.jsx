import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Redesign',
      category: 'web',
      description: 'Complete website redesign for an online fashion retailer'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: 'social',
      description: 'Viral social media campaign for a tech startup'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'branding',
      description: 'Complete brand identity package for a restaurant chain'
    },
    {
      id: 4,
      title: 'SEO Strategy',
      category: 'seo',
      description: 'Comprehensive SEO overhaul resulting in 300% traffic increase'
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'web',
      description: 'UI/UX design for a fitness tracking mobile application'
    },
    {
      id: 6,
      title: 'Content Marketing',
      category: 'social',
      description: 'Content strategy and creation for B2B software company'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'social', label: 'Social Media' },
    { id: 'branding', label: 'Branding' },
    { id: 'seo', label: 'SEO' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore some of our recent projects and success stories
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#6366f1" opacity="0.1"/>
                  <circle cx="200" cy="150" r="40" fill="#6366f1" opacity="0.3"/>
                  <rect x="150" y="120" width="100" height="60" fill="#8b5cf6" opacity="0.4" rx="5"/>
                  <text x="200" y="220" textAnchor="middle" fill="#6366f1" fontSize="16" fontWeight="bold">Project</text>
                </svg>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <button className="portfolio-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
