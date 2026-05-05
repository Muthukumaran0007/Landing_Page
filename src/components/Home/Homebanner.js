import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import '../../css/Homebanner.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckIcon from '@mui/icons-material/Check';

function Homebanner() {
  const imageUrl = "//res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png";
  const proofPoints = ['Simple growth plan', 'Mobile-friendly website', 'Ads that bring enquiries', 'One team to handle it'];
  const metrics = [
    { value: '50+', label: 'Brands helped' },
    { value: '100+', label: 'Clients served' },
    { value: '24h', label: 'Quick response' }
  ];

  return (
    <div className="banner-wrapper">
      <section className="banner" aria-label="RioBizSols landing page hero">
        <div className="container">
          <div className="row homebanner-row">
            <div className="col-lg-7 col-12 homebanner-text-col">
              <p className="hero-eyebrow">Websites, ads, apps, hiring and business tools</p>
              <h1 className="homebanner-title">
                Need more customers? We make your business look trusted, modern, and ready to choose.
              </h1>
              <p className="homebanner-des">
                RioBizSols helps you get a better website, run smarter ads, build useful apps, hire the right people, and set up tools that make your business easier to run.
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
                  Get my free growth plan <ArrowCircleRightIcon />
                </Link>
                <Link to="/our-service" className="hero-secondary-link">
                  See what we do
                </Link>
              </div>
              <p className="hero-action-note">Tell us your goal. We will suggest the easiest next step for your business.</p>
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
                    <p className="hero-floating-title">Easy for clients to trust</p>
                    <p className="hero-floating-text">Clear message, clean design, and strong call to action</p>
                  </div>
                </div>
                <div className="hero-stack-card">
                  <p className="hero-stack-title">Ready for ads</p>
                  <p className="hero-stack-text">Your page explains fast and guides people to contact you.</p>
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