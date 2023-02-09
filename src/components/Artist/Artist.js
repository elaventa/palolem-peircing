import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Artist.scss"

const Artist = () => {
  return (
    <section className="artistContainer">
      <div className="left">
        <h1 className="title">MEET THE ARTIST</h1>
        <p className="content">
          Meet Rutik Khavdiya aka RK, a highly skilled body piercing artist who
          completed his course in piercing from the prestigious Aliens Tattoo
          School in Mumbai. With a passion for the art of body piercing, he has
          honed his skills to bring the latest and most innovative techniques to
          his clients.
          <br />
          <br />
          Whether you're looking for a simple stud or a more elaborate design,
          RK is dedicated to ensuring that each and every piercing is not only
          safe but also an expression of personal style. With a focus on safety
          and hygiene, he will ensure that you feel confident and comfortable
          throughout the entire piercing process. So whether you're looking for
          a new piercing or simply want to express your individuality, look no
          further than RK, the expert body piercing artist.
        </p>
      </div>
      <div className="right">
        <StaticImage
          src="../../images/artist1.png"
          loading="eager"
          width={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
    </section>
  )
}

export default Artist
