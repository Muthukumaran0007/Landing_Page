import React from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../../css/ConversionSections.css';

function ConversionSections() {
  const outcomes = [
    {
      title: 'People understand you quickly',
      text: 'Your visitors can see what you offer, why it matters, and how to contact you without confusion.'
    },
    {
      title: 'Your business looks more trustworthy',
      text: 'A clean website, clear message, and strong visuals help people feel confident before they call.'
    },
    {
      title: 'You get support after the first enquiry',
      text: 'We can help with marketing, website changes, app work, hiring, and follow-up systems as you grow.'
    }
  ];

  const steps = [
    'Tell us what you want: more leads, a better website, an app, hiring help, or business systems.',
    'We suggest the easiest and most useful next steps for your budget and business stage.',
    'Our team helps you build, promote, improve, and manage it with clear updates.'
  ];

  const faqs = [
    {
      question: 'I am not technical. Can you still help me?',
      answer: 'Yes. You only need to explain your business goal. We will suggest the right website, marketing, app, staffing, or system support in simple terms.'
    },
    {
      question: 'Can this help if I am running ads?',
      answer: 'Yes. The page is built so people who click your ads quickly understand your offer and know how to contact you.'
    },
    {
      question: 'What happens after I submit the form?',
      answer: 'Our team will review your details and contact you with practical ideas for the next step. No pressure, no confusing talk.'
    }
  ];

  return (
    <>
      <section className="conversion-strip" aria-label="RioBizSols campaign outcomes">
        <div className="conversion-strip-inner">
          <div>
            <span className="conversion-strip-label">Made for ads and real enquiries</span>
            <h2>When people click your ad, they should instantly know why to contact you.</h2>
          </div>
          <p>
            We make your online presence clear, attractive, and easy to understand so visitors do not leave confused.
          </p>
        </div>
      </section>

      <section className="conversion-section">
        <div className="conversion-container">
          <div className="conversion-header">
            <span className="conversion-eyebrow">Why this works</span>
            <h2>A simple landing page structure that helps people trust you faster.</h2>
            <p>
              The page is built around the questions every customer has: What do you do? Can I trust you? How can you help me? What should I do next?
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
              <span className="conversion-eyebrow">How we work</span>
              <h2>No complicated process. Just clear steps.</h2>
              <p>
                You tell us your goal. We explain what will help. Then we work with you to make it happen.
              </p>
              <Link to="/contact" className="conversion-process-cta">
                Talk to our team <ArrowCircleRightIcon />
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
            <h2>Simple answers before you contact us.</h2>
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
