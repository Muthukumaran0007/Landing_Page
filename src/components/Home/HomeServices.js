import React from 'react'
import LazyImage from '../LazyImage';
import '../../css/home-service.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';



function Services() {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Performance-led campaigns, SEO, branding, content, and paid media built to improve visibility, leads, and ROI.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599907/rio_main_website/m0v93zn1r5ehnqamqhpc.png',
      path: '/our-service/digital-marketing/',
      outcome: 'Lead generation and brand growth'
    },
    {
      title: 'Web Development',
      description: 'Fast, conversion-focused websites and platforms that look premium, load smoothly, and support your sales process.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png',
      path: '/our-service/web-development',
      outcome: 'Modern web presence'
    },
    {
      title: 'App Development',
      description: 'Mobile and cross-platform apps designed around user experience, scalability, and business-ready delivery.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bwa6k62zz3jvvfb8wsbx.png',
      path: '/our-service/app-development',
      outcome: 'Custom product builds'
    },
    {
      title: 'Staffing Solutions',
      description: 'Flexible talent support for temporary staffing, direct hiring, temp-to-hire, lateral hiring, and workforce planning.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png',
      path: '/our-service/staffing',
      outcome: 'Right talent, faster'
    },
    {
      title: 'RIO ALM',
      description: 'Asset lifecycle management for tracking, maintenance, depreciation, compliance, and smarter enterprise operations.',
      image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png',
      path: '/products/rio-alm',
      outcome: 'Asset control at scale'
    }
  ];

  return (
    <section className='service'>
      <div className="service-shell">
        <div className="service-header">
          <p className="service-eyebrow">Solutions built around your growth</p>
          <h2 className='title'>Everything your business needs to launch, grow, and scale</h2>
          <p className='subtitle-homeser'>
            From strategy to execution, RioBizSols brings marketing, technology, products, and talent into one coordinated growth engine.
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
                Explore solution <span className="service-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services