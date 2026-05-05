import React from 'react'
import LazyImage from '../LazyImage';
import '../../css/home-service.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import rioAlmDashboard from '../../assets/images/rio-alm-dashboard f.png';
import memsCompliance from '../../assets/images/mems compliance.png';
import userFlowImage from '../../assets/images/User flow-pana.svg';



function Services() {
  const services = [
    {
      title: 'RIO ALM',
      description: 'A complete asset management product for companies that need to track equipment, maintenance, documents, vendors, and asset value in one place.',
      image: rioAlmDashboard,
      path: '/products/rio-alm',
      outcome: 'Asset Lifecycle Management'
    },
    {
      title: 'RIO MEMS',
      description: 'A medical equipment maintenance system for hospitals to manage biomedical devices, service schedules, calibration, breakdowns, and audit records.',
      image: memsCompliance,
      path: '/products/medical-equipment-maintenance',
      outcome: 'Hospital Equipment Maintenance'
    },
    {
      title: 'AIssist',
      description: 'A LinkedIn assistant that helps founders, recruiters, students, and professionals write better comments, replies, and messages faster.',
      image: userFlowImage,
      path: '/products/aissist',
      outcome: 'LinkedIn Engagement Assistant'
    }
  ];

  return (
    <section className='service' id="rio-products">
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
              <div className="service-card-media">
                <LazyImage src={service.image} alt={`${service.title} product preview`} width={420} height={240}/>
              </div>
              <span className="service-outcome">{service.outcome}</span>
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