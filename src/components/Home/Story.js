import React from 'react';
import '../../css/Story.css';
import CheckIcon from '@mui/icons-material/Check';

function Story() {
  const storyImage = 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/iadzqmfi8a7fjcloukmg.webp';
  const highlights = [
    {
      title: 'Single growth partner',
      text: 'Strategy, technology, marketing, and staffing coordinated in one place.'
    },
    {
      title: 'Client-ready execution',
      text: 'Clear planning, premium delivery, and launch support from start to finish.'
    },
    {
      title: 'Built to scale',
      text: 'Solutions shaped around your market, team, budget, and long-term goals.'
    },
    {
      title: 'Outcome focused',
      text: 'Every recommendation is tied to visibility, efficiency, revenue, or growth.'
    }
  ];

  return (
    <section className="story-section">
      <div className="container">
        <div className="row story-layout">
          <div className="col-lg-6">
            <div className="story-copy">
            <span className="story-eyebrow">Why clients choose RioBizSols</span>
            <h2 className="story-title">We turn business ideas into measurable outcomes.</h2>
            <p className="story-des">
              Our team connects strategy, technology, marketing, and talent so you get a practical roadmap, a polished delivery experience, and solutions that are ready to grow with your business.
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
                  <strong>100% result-focused</strong>
                  <span>Practical execution for real business momentum.</span>
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
