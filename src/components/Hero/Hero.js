import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="section hero">
      <StaticImage
        src="../../images/hero.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className="image"
        style={{width: '100%'}}
      />

      <div className="heroContent">
        <h1 className="title">EXPERT TATTOOS <br /> AND PIERCINGS</h1>
        <p className="content">Unleash your individuality with precision piercing.</p>
        <button className="btn">Contact Us</button>
      </div>

    </section>
  )
}

export default Hero