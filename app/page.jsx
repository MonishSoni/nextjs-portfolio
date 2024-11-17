"use client"
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import React, { useEffect } from 'react'
import FixedMenu from '@/components/FixedMenu'

const Home = () => {

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    }

    loadLocomotiveScroll()
  }, [])


  return (
    <>
      <Hero />
      <FixedMenu/>
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* <div className='h-[3000px]'></div> */}
    </>
  )
}

export default Home