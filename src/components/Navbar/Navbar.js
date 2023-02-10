import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { BsTelephone } from "react-icons/bs"
import "./Navbar.scss"

const Navbar = () => {
  const [clicked, setclicked] = useState(false)
  const handleClick = () => {
    setclicked(!clicked)
  }
  return (
    <nav className={`nav ${clicked}`}>
      <div className="logo">
        <StaticImage
          src="../../images/logo.png"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="palolem piercing logo"
        />
      </div>

      <ul className={`navItems ${clicked}`}>
        <Link to="#home">
          <li className="navItem" onClick={() => setclicked(false)}>
            Home
          </li>
        </Link>

        <Link to="#about">
          <li className="navItem" onClick={() => setclicked(false)}>
            About
          </li>
        </Link>

        <Link to="#services">
          <li className="navItem" onClick={() => setclicked(false)}>
            Services
          </li>
        </Link>

        <Link to="#gallery">
          <li className="navItem" onClick={() => setclicked(false)}>
            Gallery
          </li>
        </Link>

        <Link to="#contact">
          <li className="navItem" onClick={() => setclicked(false)}>
            Contact
          </li>
        </Link>
      </ul>
      <div className="mobileNav">
        <a style={{ color: "#000" }} href="tel:+919921209571">
          <div className="call">
            <BsTelephone className="icon" />
          </div>
        </a>
        <div onClick={handleClick} className={`hamburger ${clicked}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
