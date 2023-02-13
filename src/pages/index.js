import React from "react"
import Artist from "../components/Artist/Artist"
import Book from "../components/Book/Book"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import ReachUs from "../components/ReachUs/ReachUs"
import Reviews from "../components/Reviews/Reviews"
import Seo from "../components/seo"
import Services from "../components/Services/Services"
import TopInfo from "../components/TopInfo/TopInfo"
import Works from "../components/Works/Works"
import "../styles/global.scss"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return (
    <div>
      <motion.div
        animate={{
          y: '-100vh'
        }}
        transition={{
          delay: 3,
          duration: 1
        }}
        className="pageLoader"
      >
        <motion.div 
        className="logo"
        initial={{
          y: "-100vh"
        }}
        animate={{
          y: '0',
        }}
        transition={{
          type: 'spring',
          duration: 2,
          stiffness: 100
        }}
        >
          <StaticImage
            src="../images/white-logo-only.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="palolem piercing logo"
          />
        </motion.div>

        <motion.h1 initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{delay: 1, duration: 1}}
        className="title"
        >
          Palolem Piercing
        </motion.h1>
      </motion.div>
      <TopInfo />
      <Navbar />
      <Hero />
      <Artist />
      <Services />
      <Works />
      <Book />
      <Reviews />
      <ReachUs />
    </div>
  )
}

export const Head = () => <Seo />

export default Index
