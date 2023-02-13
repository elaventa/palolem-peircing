import React from 'react'
import "./TopInfo.scss"
import SocialIcons from '../SocialIcons/SocialIcons'

const TopInfo = () => {
  return (
    <section id='home' className='top'>
        <div className="left">
            <a href="mailto:contact@piercings.com">contact@piercings.com</a>
            <a href="tel:+9747406685">+91 9747406685</a>
        </div>

        <SocialIcons />
    </section>
  )
}

export default TopInfo