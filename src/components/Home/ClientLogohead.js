import React from 'react'
import '../../css/Clientlogo.css'

function Clientlogohead() {
  const clients = [
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/cm2ual5i2rb60xpdvo2f.jpg', alt: 'rio_kumaraguru_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/wqnu2tv7fqca4xzlzfny.jpg', alt: 'rio_amazon_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599892/rio_main_website/emji2okoikkynjs5gkxi.jpg', alt: 'rio_aplus_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599904/rio_main_website/byfeygcgtqndlktuerbj.jpg', alt: 'rio_dare_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599922/rio_main_website/o261jmycfmgsrp8jatpp.jpg', alt: 'rio_khadheejah_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599923/rio_main_website/zf5eo70focqreqzrial1.jpg', alt: 'rio_km_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/tjnywqleyex72rxpfogo.jpg', alt: 'rio_shobho_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599925/rio_main_website/tirnxnww9qmnxcfnv4nb.png', alt: 'rio_studieo_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599926/rio_main_website/kahnwjqxt0a3qesf23hw.png', alt: 'rio_studio11_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599925/rio_main_website/cscpsjpnozomodirhjgx.png', alt: 'rio_hydro_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599913/rio_main_website/xcoihvjmf4jctk88uryc.jpg', alt: 'rio_flipkart_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/cqakmrqlbjeqqjhvfu0c.jpg', alt: 'rio_waffel_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/bz2qqssyxzfciep8yfpv.jpg', alt: 'rio_rotol_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599890/rio_main_website/qafpvzgvch2iep6vlloa.jpg', alt: 'rio_plush_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/rxsl535dhbrolpuzayjn.jpg', alt: 'rio_grace_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/ronnusvbk5w3ecgzlcly.jpg', alt: 'rio_bloom_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/vtxc4mp0ijrs9k3nklro.jpg', alt: 'rio_ee_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/pzxugkk0rf8h8htl5irt.jpg', alt: 'rio_sk_logo' },
    { src: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599891/rio_main_website/mopvg37qvlk6xyvkrlom.jpg', alt: 'rio_raajis_logo' }
  ];

  return (
    <div className='client-logo'>
      <div className="client-logo-header">
        <p className="client-eyebrow">Trusted by businesses</p>
        <h1 className='client'>Products built by a team businesses already trust</h1>
        <p className="client-subtitle">RioBizSols combines product thinking, implementation support, and practical business understanding across RIO ALM, RIO MEMS, and AIssist.</p>
      </div>
        <div className='logo'>
        <div className='logo-slid'>
            {[...clients, ...clients].map((client, index) => (
              <img src={client.src} alt={client.alt} key={`${client.alt}-${index}`} />
            ))}
        </div>
        </div>
        </div>
  )
}

export default Clientlogohead