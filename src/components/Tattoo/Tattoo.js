import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Tattoo.scss"

const Tattoo = () => {
  return (
    <section className="section tattooContainer">
      <StaticImage
        src="../../images/tattoo.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className="image"
        style={{ width: "100%" }}
      />
      <h1 className="title">Ready for getting a tattoo? Let's get you started now!</h1>
      <p className="content">Clean and professional tattoos in a safe and sterile studio. Trust us to take care of you and your ink.</p>
      <a target="_blank" href="https://pravinktatoos.com">
        <button className="btn">VISIT TATTOO WEBSITE</button>
      </a>
    </section>
  )
}

export default Tattoo
