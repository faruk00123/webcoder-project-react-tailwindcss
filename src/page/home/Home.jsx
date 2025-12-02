import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Explore from './Explore'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import MeetSections from './MeetSections'
import Pricing from './Pricing'
import FAQs from '../FAQs'
import NewsLetter from './NewsLetter'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <ToolsSection/>
    <CompanyLogos/>
    <Explore/>
    <Testimonials/>
    <Blogs/>
    <MeetSections/>
    <Pricing/>
    <FAQs/>
    <NewsLetter/>
    </>
  )
}

export default Home