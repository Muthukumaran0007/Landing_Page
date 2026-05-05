import React from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../css/ConversionSections.css';

function ConversionSections() {
  const outcomes = [
    {
      title: 'Campaigns that bring better leads',
      text: 'SEO, paid ads, branding, and content aligned around enquiries, not vanity numbers.'
    },
    {
      title: 'Websites that convert visitors',
      text: 'Fast, responsive pages with clear structure, premium visuals, and a strong enquiry path.'
    },
    {
      title: 'Teams that help you execute',
      text: 'Staffing and delivery support so your marketing, tech, and operations keep moving.'
    }
  ];

  const steps = [
    'We understand your goal, audience, budget, and current business stage.',
    'We recommend the right mix of website, marketing, staffing, or product support.',
    'We execute with clear milestones, responsive communication, and measurable outcomes.'
  ];

  const faqs = [
    {
      question: 'Is this suitable for ads and lead generation?',
      answer: 'Yes. The page is structured for paid traffic with a clear offer, quick proof, focused CTAs, and a simple contact path.'
    },
    {
      question: 'Can RioBizSols handle multiple business needs together?',
      answer: 'Yes. We support digital marketing, web and app development, staffing, and product systems under one coordinated delivery approach.'
    },
    {
      question: 'What happens after I submit the form?',
      answer: 'Our team reviews your details and reaches out with practical recommendations for your business goal.'
    }
  ];

  return (
    <>
      <section className="conversion-strip" aria-label="RioBizSols campaign outcomes">
        <div className="conversion-strip-inner">
          <div>
            <span className="conversion-strip-label">Ad-ready growth partner</span>
            <h2>Turn ad clicks into serious business conversations.</h2>
          </div>
          <p>
            Visitors from ads need instant clarity. This landing page now explains what you do, why clients should trust you, and how to take action without confusion.
          </p>
        </div>
      </section>

      <section className="conversion-section">
        <div className="conversion-container">
          <div className="conversion-header">
            <span className="conversion-eyebrow">What clients get</span>
            <h2>Built like an industry-grade website, focused like a campaign landing page.</h2>
            <p>
              Every section supports one goal: help your visitor understand the value quickly and contact RioBizSols with confidence.
            </p>
          </div>

          <div className="conversion-outcome-grid">
            {outcomes.map((outcome) => (
              <article className="conversion-outcome-card" key={outcome.title}>
                <span className="conversion-card-icon">
                  <CheckIcon />
                </span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>

          <div className="conversion-process">
            <div className="conversion-process-copy">
              <span className="conversion-eyebrow">Simple process</span>
              <h2>From first click to clear next step.</h2>
              <p>
                A client should never feel lost after clicking your ad. The page now gives them a guided path from your promise to a low-friction consultation.
              </p>
              <Link to="/contact" className="conversion-process-cta">
                Start with a free consultation <ArrowCircleRightIcon />
              </Link>
            </div>
            <div className="conversion-step-list">
              {steps.map((step, index) => (
                <div className="conversion-step" key={step}>
                  <span>{`0${index + 1}`}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="conversion-container faq-layout">
          <div className="faq-copy">
            <span className="conversion-eyebrow">Quick answers</span>
            <h2>Questions ad visitors usually ask before contacting you.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ConversionSections;
