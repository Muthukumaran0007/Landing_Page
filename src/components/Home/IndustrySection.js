import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faShoppingCart,
  faIndustry,
  faHeartPulse,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import '../../css/IndustryCards.css';

const industryIcons = {
  'tech-startup': faRocket,
  'ecommerce': faShoppingCart,
  'manufacturing': faIndustry,
  'healthcare': faHeartPulse,
  'saas': faCloud
};

const IndustrySection = () => {
  const industries = [
    {
      id: 'tech-startup',
      title: 'Asset-heavy companies',
      subtitle: 'Use RIO ALM',
      description: 'Track equipment, service history, documents, and maintenance from one organized system.',
      color: 'tech-startup',
      stats: 'Assets under control'
    },
    {
      id: 'ecommerce',
      title: 'Hospitals',
      subtitle: 'Use RIO MEMS',
      description: 'Keep medical equipment ready, calibrated, and audit-friendly for safer patient care.',
      color: 'ecommerce',
      stats: 'Care-ready devices'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      subtitle: 'Use RIO ALM',
      description: 'Reduce downtime by tracking machines, planned service, vendors, and asset usage.',
      color: 'manufacturing',
      stats: 'Less downtime'
    },
    {
      id: 'healthcare',
      title: 'Professionals',
      subtitle: 'Use AIssist',
      description: 'Write better LinkedIn comments and replies faster while keeping your own voice.',
      color: 'healthcare',
      stats: 'Stay visible'
    },
    {
      id: 'saas',
      title: 'Recruiters & founders',
      subtitle: 'Use AIssist',
      description: 'Save time on LinkedIn outreach, comments, replies, and professional conversations.',
      color: 'saas',
      stats: 'Save time weekly'
    }
  ];

  return (
    <section className="industry-section">
      <div className="container">
        <div className="industry-header">
          <span className="industry-eyebrow">Who these products help</span>
          <h2>Built for teams that want less manual work and more control.</h2>
          <p>Whether you manage assets, hospital equipment, or LinkedIn engagement, our products are made to simplify daily work.</p>
        </div>

        <div className="industry-cards-grid">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/industry/${industry.id}`}
              className={`industry-card industry-card-${industry.color}`}
            >
              <div className="card-icon">
                <FontAwesomeIcon icon={industryIcons[industry.id]} />
              </div>
              <h3 className="card-title">{industry.title}</h3>
              <p className="card-subtitle">{industry.subtitle}</p>
              <p className="card-description">{industry.description}</p>
              <div className="card-footer">
                <span className="card-stats">{industry.stats}</span>
                <span className="card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="industry-cta">
          <p>Not sure which product fits your requirement?</p>
          <Link to="/contact" className="industry-cta-btn">
            Ask for Product Guidance
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
