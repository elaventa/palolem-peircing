import React from 'react'
import "./TopInfo.scss"
import SocialIcons from '../SocialIcons/SocialIcons'

const TopInfo = () => {
  return (
    <section id='home' className='top'>
        <div className="left">
            <a href="mailto:pravinkhavadiya@gmail.com">pravinkhavadiya@gmail.com</a>
            <a href="tel:+919921209571">+91 99212 09571</a>
        </div>

        <SocialIcons />
    </section>
  )
}

export default TopInfo