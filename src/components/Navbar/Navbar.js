import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
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

      <ul className="navItems">
        <Link to="#">
          <li className="navItem">Home</li>
        </Link>

        <Link to="#">
          <li className="navItem">About</li>
        </Link>

        <Link to="#">
          <li className="navItem">Services</li>
        </Link>

        <Link to="#">
          <li className="navItem">Gallery</li>
        </Link>

        <Link to="#">
          <li className="navItem">Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
