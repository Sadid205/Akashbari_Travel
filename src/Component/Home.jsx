import React from 'react'
import Headers from '../Component/Headers.jsx'
import Hero from '../Component/Hero.jsx'
import TopPackage from './TopPackage.jsx'
import HotDeals from './HotDeals.jsx'
import SpecialOffers from './SpecialOffers.jsx'
import ChooseToor from './ChooseToor.jsx'
import Blog from './Blog.jsx'
import Tours from './Tours.jsx'
import Gallery from './Gallery.jsx'
import Experiences from './Experiences.jsx'
import Footer from './Footer.jsx'


export const Home = () => {
  return (
   <div>
    <Hero/>
    <TopPackage/> 
    <HotDeals/>
    <SpecialOffers/>
    <Blog/>
    <ChooseToor/>
    <Tours/>
    <Gallery/>
    <Experiences/>
   </div>
  )
}



export default Home