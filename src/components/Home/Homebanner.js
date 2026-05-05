import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckIcon from '@mui/icons-material/Check';
import RioAlmDashboard from '../../assets/images/rio-alm-dashboard f.png';

function Homebanner() {
  const proofPoints = ['Asset management', 'Hospital equipment care', 'LinkedIn growth assistant', 'Demo-ready products'];
  const metrics = [
    { value: '3', label: 'Focused products' },
    { value: '45+', label: 'AIssist languages' },
    { value: '24h', label: 'Quick response' }
  ];

  return (
    <div className="banner-wrapper">
      <section className="banner" aria-label="RioBizSols landing page hero">
        <div className="container">
          <div className="row homebanner-row">
            <div className="col-lg-7 col-12 homebanner-text-col">
              <p className="hero-eyebrow">RIO product suite for modern businesses</p>
              <h1 className="homebanner-title">
                Smart products to manage assets, hospital equipment, and LinkedIn growth.
              </h1>
              <p className="homebanner-des">
                Meet RIO ALM, RIO MEMS, and AIssist - three practical products built to help teams stay organized, reduce manual work, and grow with confidence.
              </p>
              <ul className="hero-proof-list" aria-label="RioBizSols services">
                {proofPoints.map((point) => (
                  <li key={point}>
                    <span className="hero-check"><CheckIcon /></span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="hero-actions">
                <Link to="/contact" className="get-started">
                  Book a product demo <ArrowCircleRightIcon />
                </Link>
                <a href="#rio-products" className="hero-secondary-link">
                  Explore products
                </a>
              </div>
              <p className="hero-action-note">Not sure which product fits you? Tell us your need and we will guide you.</p>
              <div className="hero-trust-row" aria-label="RioBizSols business proof">
                {metrics.map((metric) => (
                  <div className="hero-trust-card" key={metric.label}>
                    <strong className="hero-trust-number">{metric.value}</strong>
                    <span className="hero-trust-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-12 homebanner-img-col">
              <div className="hero-visual-panel">
                <div className="hero-visual-card">
                  <LazyImage
                    src={RioAlmDashboard}
                    alt="RIO ALM product dashboard preview"
                    className="homebanner-img"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="hero-floating-card">
                  <span className="hero-floating-icon"><CheckIcon /></span>
                  <div>
                    <p className="hero-floating-title">Built for real teams</p>
                    <p className="hero-floating-text">Track assets, maintenance, audits, and daily work with clarity</p>
                  </div>
                </div>
                <div className="hero-stack-card">
                  <p className="hero-stack-title">Product-first growth</p>
                  <p className="hero-stack-text">RIO ALM, RIO MEMS, and AIssist in one product family.</p>
                  <div className="hero-stack-bars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homebanner;