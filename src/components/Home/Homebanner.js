import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckIcon from '@mui/icons-material/Check';

function Homebanner() {
  const imageUrl = "//res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png";
  const proofPoints = ['Ad-ready offer', 'Mobile-first experience', 'Clear conversion path', 'One delivery team'];
  const metrics = [
    { value: '50+', label: 'Brands supported' },
    { value: '100+', label: 'Customer relationships' },
    { value: '24h', label: 'Fast response window' }
  ];

  return (
    <div className="banner-wrapper">
      <section className="banner" aria-label="RioBizSols landing page hero">
        <div className="container">
          <div className="row homebanner-row">
            <div className="col-lg-7 col-12 homebanner-text-col">
              <p className="hero-eyebrow">Ad-ready growth partner for serious businesses</p>
              <h1 className="homebanner-title">
                Turn ad clicks into <span className="hero-highlight">qualified leads</span> with one trusted growth team.
              </h1>
              <p className="homebanner-des">
                RioBizSols helps you build the right digital presence, marketing engine, product systems, and talent support so paid traffic lands on a page that feels credible, clear, and ready to convert.
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
                  Get a free growth plan <ArrowCircleRightIcon />
                </Link>
                <Link to="/our-service" className="hero-secondary-link">
                  Explore services
                </Link>
              </div>
              <p className="hero-action-note">Built for ad visitors who need clarity fast: what you do, why it matters, and how to get started.</p>
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
                  src={imageUrl}
                  alt="RIOBizSols business solutions dashboard illustration"
                  className="homebanner-img"
                  width={600}
                  height={400}
                />
                </div>
                <div className="hero-floating-card">
                  <span className="hero-floating-icon"><CheckIcon /></span>
                  <div>
                    <p className="hero-floating-title">Click-to-call clarity</p>
                    <p className="hero-floating-text">A focused path from first visit to consultation</p>
                  </div>
                </div>
                <div className="hero-stack-card">
                  <p className="hero-stack-title">Campaign-ready stack</p>
                  <p className="hero-stack-text">Offer, page, service, and follow-up aligned.</p>
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