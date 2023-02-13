import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
    <section className="section footer">

      <div className="image">
      <StaticImage
        src="../../images/logo.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className="image"
        // style={{width: '100%'}}
      />
      </div>

      <div className="category">
        <h1>ARTIST PORTFOLIO</h1>
        <li>Rutik KavdIiya </li><br/>
        <h1>CATEGORIES</h1>
        <li> Septum Piercing</li>
        <li> Nose Peircing</li>
        <li> Belly Peircing</li>
      </div>
      <div>
        <h1>IMPORTANT LINKS</h1>
        <li> PeirIcing after care</li>
        <li> Blog</li>
        <li> Privacy Policy</li>
        <li> Terms & Conditions</li>
      </div>
      <div>
        <p> PIERCING STUDIO  PVT LTD34/265, Anand Nagar,Vakola, Santacruz East,Mumbai 400055Maharashtra , India <br />
        <br />
          +91 85913 36124 <br />
          contact@piercings.com</p>
        
      </div>
      </section>
      <p>2023 All Rights Reserved. Palolem Piercing Studio Pvt Ltd.</p>
    </div>
  )
}

export default Footer