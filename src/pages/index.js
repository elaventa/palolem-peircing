import React from 'react'
import Artist from '../components/Artist/Artist'
import Navbar from '../components/Navbar/Navbar'
import "../styles/global.scss"

const Index = () => {
  return (
    <div>
        <Navbar />
        <Artist />
    </div>
  )
}

export default Index