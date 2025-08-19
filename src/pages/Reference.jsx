import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import image from '../assets/sunset-sky-powers-wind-solar-energy-generated-by-ai.jpg'
import ReferenceSection from '../components/ReferenceSection'


const Overview = () => {
  return (
    <>
    <TopBar />
    <div className="relative w-full h-[50vh]">
       <img
         src={image}
         alt="Services"
         className="w-full h-full object-cover opacity-60 blur-sm"
       />
   
       {/* Overlay Text */}
       <div className="absolute inset-0 flex items-center justify-center">
         <h2 className="text-4xl md:text-5xl font-bold text-gray-600 drop-shadow-lg">
           References
         </h2>
       </div>
     </div>
    <ReferenceSection />
  <Footer />
    </>
  )
}

export default Overview
