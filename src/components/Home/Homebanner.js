import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckIcon from '@mui/icons-material/Check';

function Homebanner() {
  const imageUrl = "//res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png";
  const proofPoints = ['Staffing support', 'Web & app development', 'Digital marketing', 'RIO ALM systems'];
  const metrics = [
    { value: '50+', label: 'Brands supported' },
    { value: '100+', label: 'Happy customers' },
    { value: '20+', label: 'Product rollouts' }
  ];

  return (
    <div className="banner-wrapper">
      <section className="banner" aria-label="RioBizSols landing page hero">
        <div className="container">
          <div className="row homebanner-row">
            <div className="col-lg-7 col-12 homebanner-text-col">
              <p className="hero-eyebrow">Business growth partners for modern teams</p>
              <h1 className="homebanner-title">
                Build, market, staff, and scale with <span className="hero-highlight">one trusted partner.</span>
              </h1>
              <p className="homebanner-des">
                RioBizSols brings strategy, technology, marketing, and talent together so your business can move faster from idea to measurable growth.
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
                  Book a free strategy call <ArrowCircleRightIcon />
                </Link>
                <Link to="/our-service" className="hero-secondary-link">
                  Explore services
                </Link>
              </div>
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
                    <p className="hero-floating-title">Client-ready delivery</p>
                    <p className="hero-floating-text">Strategy to execution under one roof</p>
                  </div>
                </div>
                <div className="hero-stack-card">
                  <p className="hero-stack-title">Growth systems</p>
                  <p className="hero-stack-text">Teams, products, marketing, and support aligned.</p>
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