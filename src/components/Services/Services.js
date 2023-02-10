import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Services.scss"

const Services = () => {
  return (
    <section id="services" className="section servicesContainer">
      <StaticImage
        src="../../images/services.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className="image"
        style={{width: '100%'}}
      />
      <h1 className="title">WHAT WE OFFER</h1>
      <div className="services">
        <div className="service">
          <h2 className="subtitle">SEPTUM PIERCING</h2>
          <p className="content">
            At our piercing shop, we offer a wide range of septum piercing
            options, from simple studs to more elaborate designs. Our
            experienced piercers will work with you to find the perfect septum
            piercing that fits your style and personality.
          </p>
        </div>

        <div className="service">
          <h2 className="subtitle">NOSE PIERCING</h2>
          <p className="content">
            We offer a wide range of nose piercing options, from traditional
            nostril piercings to more unusual septum piercings. All of our
            piercings are performed using sterile techniques and the highest
            quality jewelry to ensure both your comfort and safety.
          </p>
        </div>

        <div className="service">
          <h2 className="subtitle">BELLY PIERCING</h2>
          <p className="content">
            Our experienced piercer offer a wide range of belly piercing
            services to suit your individual style and preferences. From simple
            studs to more elaborate designs, we have a wide selection of
            high-quality jewelry to choose from.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
