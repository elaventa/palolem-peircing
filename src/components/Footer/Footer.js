import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
      <section className="section footer">
        <div className="imageWrapper">
          <StaticImage
            src="../../images/logo.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="image"
          />
        </div>

    

      <div className="category">
        <h1>ARTIST PORTFOLIO</h1>
       <a href=""> <li>Rutik KavdIiya </li><br/></a>
        <h1>CATEGORIES</h1>
        <a href=""> <li> Septum Piercing</li></a>
        <a href=""> <li> Nose Peircing</li></a>
        <a href=""> <li> Belly Peircing</li></a>
      </div>
      <div>
        <h1>IMPORTANT LINKS</h1>
        <a href=""><li> PeirIcing after care</li></a>
        <a href=""> <li> Blog</li></a>
        <a href=""><li> Privacy Policy</li></a>
        <a href=""><li> Terms & Conditions</li></a>
      </div>
      <div>
        <p> Palolem Main Street, Next to The Sun N Moon Wine Shop, Canacona, 403702, Goa, India <br />
        <br />
          +91 99212 09571 <br />
          palolempiercingshop@gmail.com</p>
        
      </div>
        
      </section>
      <p className="copyright">2023 All Rights Reserved. Palolem Piercing Shop Pvt Ltd.</p>
    </div>
  )
}

export default Footer
