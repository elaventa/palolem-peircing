import React from 'react'
import Artist from '../components/Artist/Artist'
import Book from '../components/Book/Book'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import ReachUs from '../components/ReachUs/ReachUs'
import Reviews from '../components/Reviews/Reviews'
import Services from '../components/Services/Services'
import TopInfo from '../components/TopInfo/TopInfo'
import Works from '../components/Works/Works'
import "../styles/global.scss"

const Index = () => {
  return (
    <div>
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

export default Index