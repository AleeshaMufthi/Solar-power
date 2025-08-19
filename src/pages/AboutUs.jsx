import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import image from '../assets/Installation-of-gorund-mounted-solar-panels-770x500.jpg'
import AboutSection from '../components/AboutSection'

const AboutUs = () => {
  return (
    <>
    <TopBar />
        <div className="relative w-full h-[50vh]">
    {/* Background Image */}
    <img
      src={image}
      alt="Services"
      className="w-full h-full object-cover opacity-60 blur-sm"
    />

    {/* Overlay Text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-600 drop-shadow-lg">
        About Us
      </h2>
    </div>
  </div>
  <AboutSection />
    <Footer />
    </>
  )
}

export default AboutUs
