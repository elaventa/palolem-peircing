import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SocialIcons from "../SocialIcons/SocialIcons"
import "./ReachUs.scss"
import { useForm, ValidationError } from "@formspree/react"

const Icon = () => {
  return (
    <StaticImage
      src="../../images/icon.png"
      loading="eager"
      width={400}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="palolem piercing logo"
    />
  )
}

const ReachUs = () => {
  const [state, handleSubmit] = useForm("mnqyplkq")
  if (state.succeeded) {
    return <p>Thanks for Contacting Us!</p>
  }
  return (
    <section id="contact" className="section reachUsContainer">
      <div className="icon1">
        <Icon />
      </div>
      <div className="icon2">
        <Icon />
      </div>
      <div className="icon3">
        <Icon />
      </div>

      <div className="left">
        <div className="row">
          <h2 className="subtitle">Email</h2>
          <a href="mailto:pravinkhavadiya@gmail.com">pravinkhavadiya@gmail.com</a>
        </div>

        <div className="row">
          <h2 className="subtitle">Phone</h2>
          <a href="tel:+919921209571">+91 99212 09571</a>
        </div>

        <div className="row">
          <h2 className="subtitle">Social</h2>
          <SocialIcons />
        </div>
      </div>

      <div className="right">
        <h1 className="title">Reach out to us</h1>
        <p className="content">
          We are here to help! Our dedicated team is ready to provide you with
          the support you need.
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input type="email" placeholder="Email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input type="submit" value="Submit" disabled={state.submitting} />
        </form>
      </div>
    </section>
  )
}

export default ReachUs
