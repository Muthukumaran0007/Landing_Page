import React from 'react'
import LazyImage from '../LazyImage';
import '../../css/home-service.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



function Services() {
  const services = [
    {
      title: 'Get more people to notice you',
      description: 'We help your business show up online, look trustworthy, and bring in more enquiries through ads, SEO, branding, and content.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/m0v93zn1r5ehnqamqhpc.png',
      path: '/our-service/digital-marketing/',
      outcome: 'Marketing'
    },
    {
      title: 'Make your website look premium',
      description: 'We build clean, fast, mobile-friendly websites that explain your business clearly and make it easy for visitors to contact you.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png',
      path: '/our-service/web-development',
      outcome: 'Websites'
    },
    {
      title: 'Build the app your idea needs',
      description: 'Have an app idea or need software for your team? We design and build apps that are simple to use and ready for real customers.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bwa6k62zz3jvvfb8wsbx.png',
      path: '/our-service/app-development',
      outcome: 'Apps'
    },
    {
      title: 'Find the right people faster',
      description: 'We help you hire the right talent for short-term, long-term, direct hiring, and business support roles without wasting time.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png',
      path: '/our-service/staffing',
      outcome: 'Hiring'
    },
    {
      title: 'Manage your business assets better',
      description: 'RIO ALM helps companies track equipment, maintenance, compliance, and asset usage from one organized system.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png',
      path: '/products/rio-alm',
      outcome: 'Asset system'
    }
  ];

  return (
    <section className='service'>
      <div className="service-shell">
        <div className="service-header">
          <p className="service-eyebrow">What we can do for you</p>
          <h2 className='title'>One team for your website, marketing, app, hiring, and business systems</h2>
          <p className='subtitle-homeser'>
            You do not have to talk to many different agencies. Tell us your goal, and we will show you what will help first.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <Link to={service.path} className='service-card' key={service.title}>
              <div className="service-card-top">
                <span className="service-icon-wrap">
                  <LazyImage src={service.image} alt={service.title} width={90} height={90}/>
                </span>
                <span className="service-outcome">{service.outcome}</span>
              </div>
              <h3 className='title_head'>{service.title}</h3>
              <p className='descrip_para'>{service.description}</p>
              <Divider className="service-card-divider" />
              <span className='service-card-footer'>
                See how it helps <span className="service-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services