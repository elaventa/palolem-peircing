import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Book.scss"

const Book = () => {
  return (
    <section className="section bookContainer">
      <StaticImage
        src="../../images/getPierced.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className="image"
        style={{width: '100%'}}
      />
      <h1 className="title">ARE YOU READY TO GET A PIERCING?</h1>
      <p className="content">Request an appointment NOW!</p>
     <a href="tel:+919921209571"> <button className="btn">BOOK APPOINTMENT</button></a>
    </section>
  )
}

export default Book
