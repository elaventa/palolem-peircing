import React from 'react'
import Artist from '../components/Artist/Artist'
import Book from '../components/Book/Book'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services'
import Works from '../components/Works/Works'
import "../styles/global.scss"

const Index = () => {
  return (
    <div>
        <Navbar />
        <Artist />
        <Services />
        <Works />
        <Book />
    </div>
  )
}

export default Index