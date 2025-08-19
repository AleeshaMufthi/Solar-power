import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Types from '../components/Types'
import image from '../assets/wind-turbines-solar-panels-field-yellow-flowers.jpg'

const Services = () => {
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
        Our Services
      </h2>
    </div>
  </div>
      <Types />
      <Footer />
    </>
  )
}

export default Services
