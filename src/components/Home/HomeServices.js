import React from 'react'
import LazyImage from '../LazyImage';
import '../../css/home-service.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



function Services() {
  const services = [
    {
      title: 'RIO ALM',
      description: 'A complete asset management product for companies that need to track equipment, maintenance, documents, vendors, and asset value in one place.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/m0v93zn1r5ehnqamqhpc.png',
      path: '/products/rio-alm',
      outcome: 'Asset Lifecycle Management'
    },
    {
      title: 'RIO MEMS',
      description: 'A medical equipment maintenance system for hospitals to manage biomedical devices, service schedules, calibration, breakdowns, and audit records.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png',
      path: '/products/medical-equipment-maintenance',
      outcome: 'Hospital Equipment Maintenance'
    },
    {
      title: 'AIssist',
      description: 'A LinkedIn assistant that helps founders, recruiters, students, and professionals write better comments, replies, and messages faster.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bwa6k62zz3jvvfb8wsbx.png',
      path: '/products/aissist',
      outcome: 'LinkedIn Engagement Assistant'
    }
  ];

  return (
    <section className='service' id="products">
      <div className="service-shell">
        <div className="service-header">
          <p className="service-eyebrow">Our main products</p>
          <h2 className='title'>Three focused products built to solve real business problems</h2>
          <p className='subtitle-homeser'>
            Whether you manage company assets, hospital equipment, or LinkedIn engagement, RioBizSols has a product made for that exact need.
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
                View product <span className="service-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services