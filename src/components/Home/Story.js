import React from 'react';
import '../../css/Story.css';
import CheckIcon from '@mui/icons-material/Check';

function Story() {
  const storyImage = 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/iadzqmfi8a7fjcloukmg.webp';
  const highlights = [
    {
      title: 'Products made from real problems',
      text: 'Each product solves a common work problem: asset tracking, hospital maintenance, or daily LinkedIn engagement.'
    },
    {
      title: 'Simple demos before decisions',
      text: 'We show how the product works first, so your team can understand the value clearly.'
    },
    {
      title: 'Setup support from our team',
      text: 'For RIO ALM and RIO MEMS, we help with setup, data, user training, and rollout.'
    },
    {
      title: 'Built to grow with you',
      text: 'Start with the features you need now and expand as your organization grows.'
    }
  ];

  return (
    <section className="story-section">
      <div className="container">
        <div className="row story-layout">
          <div className="col-lg-6">
            <div className="story-copy">
            <span className="story-eyebrow">Why choose Rio products</span>
            <h2 className="story-title">We build products that make everyday work easier to control.</h2>
            <p className="story-des">
              RIO ALM, RIO MEMS, and AIssist are made to solve clear problems. They help teams reduce manual tracking, improve follow-up, and stay organized without making work complicated.
            </p>
            <div className="story-benefits">
              {highlights.map((highlight) => (
                <div className="story-benefit-card" key={highlight.title}>
                  <span className="story-benefit-icon">
                    <CheckIcon />
                  </span>
                  <strong>{highlight.title}</strong>
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="story-visual">
              <img src={storyImage} alt="RioBizSols team planning client growth solutions" className="story-img" />
              <div className="story-result-card">
                <span className="story-result-icon">
                  <CheckIcon />
                </span>
                <div>
                  <strong>Product-led support</strong>
                  <span>Clear demos, practical rollout, and useful guidance.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
