import React from 'react'
import "./TopInfo.scss"
import { ImFacebook, ImInstagram, ImLink, ImTwitter } from "react-icons/im"

const TopInfo = () => {
  return (
    <section id='home' className='top'>
        <div className="left">
            <a href="mailto:contact@piercings.com">contact@piercings.com</a>
            <a href="tel:+9747406685">+91 9747406685</a>
        </div>

        <div className="right">
            <a href=""><ImFacebook /></a>
            <a href=""><ImInstagram /></a>
            <a href=""><ImTwitter /></a>
            <a href=""><ImLink /></a>
        </div>
    </section>
  )
}

export default TopInfo