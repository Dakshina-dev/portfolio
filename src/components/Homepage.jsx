import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Portfolio from './Portfolio'
import Contactform from './Contactform' 
import Footer from './Footer' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


const Homepage = () => {
  return (
    <Router>
      <div className='bg-[#010e28]'>
    <div className="items-center bg-[#010e28]  bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
   <Header/>
   <Hero/>
    </div>
   <About/>
   <Portfolio/>
   <Services/>
   <Contactform/>
   <Footer/>
   </div>
    </Router>
  )
}

export default Homepage