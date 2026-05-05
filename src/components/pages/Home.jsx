import React from 'react'
import Homebanner from '../Home/Homebanner'
import HomeServices from '../Home/HomeServices'
import Story from '../Home/Story'
import Team from '../Home/Team'
import Count from '../Home/Count'
import ClientLogohead from '../Home/ClientLogohead'
import HomeContact from '../Home/HomeContact'
import IndustrySection from '../Home/IndustrySection'
import ConversionSections from '../Home/ConversionSections'
import { Helmet } from 'react-helmet-async';



function Home() {
  return (
    <div>

      <Helmet>
        <title>Get More Leads, Better Websites & Business Growth Help | RioBizSols</title>
        <meta name="description" content="RioBizSols helps businesses get more leads, build better websites and apps, hire the right people, and manage work with simple digital solutions." />
        <meta name="keywords" content="business solutions, digital marketing, staffing services, web development, app development, Odoo ERP, asset lifecycle management, business consulting" />
        <meta name="author" content="RioBizSols" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Get More Leads, Better Websites & Business Growth Help | RioBizSols" />
        <meta property="og:description" content="RioBizSols helps businesses get more leads, build better websites and apps, hire the right people, and manage work with simple digital solutions." />
        <meta property="og:url" content="https://riobizsols.com" />
        <meta property="og:image" content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png" />
        <meta property="og:image:alt" content="RioBizSols - End-to-End Business Solutions" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get More Leads, Better Websites & Business Growth Help | RioBizSols" />
        <meta name="twitter:description" content="RioBizSols helps businesses get more leads, build better websites and apps, hire the right people, and manage work with simple digital solutions." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599895/rio_main_website/u9grcwa3mm6fz6e816nn.png" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://riobizsols.com" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      
        <Homebanner/>
        <ConversionSections/>
        <HomeServices/>
        <ClientLogohead/>
        <IndustrySection/>
         <Story/> 
          <Count/>    
         <Team/>    
        <HomeContact/> 
        
    </div>
  )
}

export default Home