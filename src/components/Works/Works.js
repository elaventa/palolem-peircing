import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Works.scss"

const Works = () => {
  return (
    <section className="section worksContainer">
      <h1 className="title">OUR LATEST WORK</h1>
      <div className="works">
        <StaticImage
          src="../../images/works/1.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/2.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/3.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/4.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/5.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/6.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/7.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />

        <StaticImage
          src="../../images/works/8.png"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="1"
        />
      </div>
    </section>
  )
}

export default Works
