import React from 'react';
import '../../css/Story.css';
import CheckIcon from '@mui/icons-material/Check';

function Story() {
  const storyImage = 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599931/rio_main_website/iadzqmfi8a7fjcloukmg.webp';
  const highlights = [
    {
      title: 'One team for everything',
      text: 'No need to manage different people for website, ads, app, and hiring.'
    },
    {
      title: 'Clear plan before work starts',
      text: 'You know what we are doing, why we are doing it, and what comes next.'
    },
    {
      title: 'Built for real business use',
      text: 'We create practical solutions your team and customers can actually use.'
    },
    {
      title: 'Focused on results',
      text: 'Every idea is linked to more visibility, more leads, better work, or easier growth.'
    }
  ];

  return (
    <section className="story-section">
      <div className="container">
        <div className="row story-layout">
          <div className="col-lg-6">
            <div className="story-copy">
            <span className="story-eyebrow">Why businesses choose RioBizSols</span>
            <h2 className="story-title">We keep things simple, useful, and focused on growth.</h2>
            <p className="story-des">
              You tell us what you want to improve. We help you choose the right digital, marketing, staffing, or product solution and then support you until it is ready to work for your business.
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
                  <strong>Result-focused work</strong>
                  <span>Simple planning, clear delivery, and useful support.</span>
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
