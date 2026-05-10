import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Movies from '../components/Movies'
import Trailers from '../components/Trailers'
import News from '../components/News'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Movies/>
        <Trailers/>
        <News/>
    </div>
  )
}

export default Home