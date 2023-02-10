import React from "react"
import { ImFacebook, ImInstagram, ImLink, ImTwitter } from "react-icons/im"
import "./ReachUs.scss"

const ReachUs = () => {
  return (
    <section className="section reachUsContainer">
      <div className="left">
        <div className="row">
          <h2 className="subtitle">Email</h2>
          <a href="mailto:contact@piercings.com">contact@piercings.com</a>
        </div>

        <div className="row">
          <h2 className="subtitle">Phone</h2>
          <a href="tel:+9747406685">+91 9747406685</a>
        </div>

        <div className="row">
          <h2 className="subtitle">Social</h2>
          <div className="social">
            <a href="">
              <ImFacebook />
            </a>
            <a href="">
              <ImInstagram />
            </a>
            <a href="">
              <ImTwitter />
            </a>
            <a href="">
              <ImLink />
            </a>
          </div>
        </div>
      </div>

      <div className="right">
        <h1 className="title">Reach out to us</h1>
        <p className="content">
          We are here to help! Our dedicated team is ready to provide you with
          the support you need.
        </p>

        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default ReachUs
