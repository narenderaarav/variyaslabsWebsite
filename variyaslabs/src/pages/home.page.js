import React from 'react'
import Slider from '../component/slider.component'
import About from '../component/homeAbout.component'
import HomeServices from '../component/services.component'
import Blog from '../component/blog.component'
const Home = () =>{
  return(
    <>
    <Slider/>
    <About/>
    <HomeServices/>
    <Blog/>
    </>
  )
}

export default Home;