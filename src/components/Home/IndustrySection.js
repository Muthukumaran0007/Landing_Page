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
      title: 'Startups',
      subtitle: 'Launch faster',
      description: 'Get a website, app, marketing, and hiring support without building a big internal team.',
      color: 'tech-startup',
      stats: 'MVP to Series A'
    },
    {
      id: 'ecommerce',
      title: 'Online Stores',
      subtitle: 'Sell more online',
      description: 'Improve your store, attract more buyers, and make the buying journey easier.',
      color: 'ecommerce',
      stats: '$100K - $5M+'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      subtitle: 'Work smarter',
      description: 'Track work, stock, people, and daily operations with simpler digital systems.',
      color: 'manufacturing',
      stats: 'Efficiency First'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      subtitle: 'Better patient experience',
      description: 'Use better websites, systems, and staffing support to serve patients smoothly.',
      color: 'healthcare',
      stats: 'Care-Focused Tech'
    },
    {
      id: 'saas',
      title: 'SaaS',
      subtitle: 'Grow your product',
      description: 'Build, market, improve, and support your software business as it scales.',
      color: 'saas',
      stats: 'Seed to Series B+'
    }
  ];

  return (
    <section className="industry-section">
      <div className="container">
        <div className="industry-header">
          <span className="industry-eyebrow">Made for different businesses</span>
          <h2>Whatever your business type, we help you grow in a practical way.</h2>
          <p>We understand that every business is different. So we suggest what you actually need instead of pushing a one-size-fits-all package.</p>
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
          <p>Not sure what your business needs first?</p>
          <Link to="/contact" className="industry-cta-btn">
            Ask for a Free Recommendation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
