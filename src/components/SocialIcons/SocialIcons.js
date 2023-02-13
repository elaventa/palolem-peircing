import React from "react"
import "./SocialIcons.scss"
import { ImFacebook, ImLink, ImTwitter } from "react-icons/im"
import { BsInstagram } from "react-icons/bs"

const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <a href="">
        <ImFacebook />
      </a>
      <a href="">
        <BsInstagram />
      </a>
      <a href="">
        <ImTwitter />
      </a>
      <a href="">
        <ImLink />
      </a>
    </div>
  )
}

export default SocialIcons
