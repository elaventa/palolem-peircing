import React from "react"
import "./SocialIcons.scss"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"
const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <a href="https://instagram.com/palolem_piercingshop">
        <BsInstagram  style={{color: "#E1306C", fontWeight: 'bolder', fontSize: '30'}} />
      </a>

      <a href="https://wa.me/+919921209571">
        <BsWhatsapp  style={{color: "#25D366", fontWeight: 'bolder', fontSize: '30'}} />
      </a>

      <a href="https://www.google.com/maps/place/Prav+Ink+Tattoos+Palolem/@15.0129304,74.0209363,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbe45515d7120e5:0x317b01ded0976c6d!8m2!3d15.0129304!4d74.0231303?hl=en-IN&coh=164777&entry=tt&shorturl=1">
        <MdLocationPin style={{color: "red", fontWeight: 'bolder', fontSize: '30'}} />
      </a>
    </div>
  )
}

export default SocialIcons
