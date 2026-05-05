import React from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../css/ConversionSections.css';

function ConversionSections() {
  const outcomes = [
    {
      title: 'RIO ALM keeps assets under control',
      text: 'Know where every asset is, when service is due, which documents are ready, and what needs attention.'
    },
    {
      title: 'RIO MEMS keeps hospital equipment ready',
      text: 'Biomedical teams can track medical devices, maintenance, calibration, incidents, and audit records in one place.'
    },
    {
      title: 'AIssist saves time on LinkedIn',
      text: 'Professionals can write better comments, replies, and messages faster while keeping their own tone.'
    }
  ];

  const steps = [
    'Tell us your industry, team size, and the problem you want to solve.',
    'We help you choose the right product: RIO ALM, RIO MEMS, or AIssist.',
    'We walk you through the product, answer questions, and guide the next step.'
  ];

  const faqs = [
    {
      question: 'Which product is right for my business?',
      answer: 'If you manage physical assets, start with RIO ALM. If you are a hospital or healthcare provider, look at RIO MEMS. If you want better LinkedIn engagement, try AIssist.'
    },
    {
      question: 'Can I see a demo before deciding?',
      answer: 'Yes. You can request a product walkthrough and our team will show how the product works for your use case.'
    },
    {
      question: 'What happens after I submit the form?',
      answer: 'Our team will review your requirement and contact you with the right product recommendation and next steps.'
    }
  ];

  return (
    <>
      <section className="conversion-strip" aria-label="RioBizSols campaign outcomes">
        <div className="conversion-strip-inner">
          <div>
            <span className="conversion-strip-label">Three focused products</span>
            <h2>Choose the product that solves your biggest daily problem.</h2>
          </div>
          <p>
            Whether you manage business assets, hospital equipment, or LinkedIn engagement, RioBizSols has a product built for that exact need.
          </p>
        </div>
      </section>

      <section className="conversion-section">
        <div className="conversion-container">
          <div className="conversion-header">
            <span className="conversion-eyebrow">Why clients care</span>
            <h2>Our products are made to reduce confusion, manual work, and daily follow-up stress.</h2>
            <p>
              Each product focuses on a real problem: asset control, hospital equipment maintenance, or faster professional communication.
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
              <span className="conversion-eyebrow">How to get started</span>
              <h2>Pick a product, see how it works, and decide with clarity.</h2>
              <p>
                You do not need to understand every technical detail. Tell us your problem, and we will show the product that fits.
              </p>
              <Link to="/contact" className="conversion-process-cta">
                Ask for product guidance <ArrowCircleRightIcon />
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
            <span className="conversion-eyebrow">Quick product answers</span>
            <h2>Simple answers before you book a demo.</h2>
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
