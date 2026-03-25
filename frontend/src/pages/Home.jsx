import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Movies from '../components/Movies'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Movies/>
    </div>
  )
}

export default Home