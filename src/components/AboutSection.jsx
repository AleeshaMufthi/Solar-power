import React from 'react'
import video from '../assets/solar_video.mp4'

const AboutSection = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-6 mt-12">
  {/* Title */}
  {/* <h1 className="text-3xl font-bold text-center mb-6">Ajalugu</h1> */}

  {/* Paragraph */}
  <p className="text-gray-700 leading-relaxed text-justify mb-10">
    
We have a long history of business operations in DAW, dating back to 1997. Since then, we have offered our clients various solutions using the latest technological advances.
    <br /><br />
    
In 2014, we merged with the Finnish company Areva DAW OY, forming the joint venture ArevaSolar DAW. Over the years, we have grown and expanded in both Finland and DAW.
    <br /><br />
    In 2023, due to a change in business directions, operations in DAW were restored separately, and today the company is again based on 100% DAW capital.
    The company's management team is not just businessmen, they also have professional education. This has been the secret of our success.
    <br /><br />
    Our mission is to provide our customers with the greatest trust, fastest service, and longest-lasting warranty in the solar energy market.
  </p>
</div>

<div className="relative mt-10 mb-10">
    {/* <p className='uppercase text-center text-green-600 font-semibold mb-4'>
        Kuidas me töötame
    </p> */}
  <h2 className="text-4xl font-semibold text-center mb-12">
    Our work process in stages  
  </h2>
  {/* Background Image */}
  {/* <img
    className="w-[950px] h-[700px] object-cover"
    src="https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg"
    alt="background"
  /> */}
    <video
    className="w-[1000px] h-[500px] object-cover"
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Text Overlay Section */}
  <div className="absolute bottom-10 right-64 bg-gray-500 text-white p-10 w-[32%] h-[400px]">
    {/* <p className="uppercase font-bold text-center mb-2">võtmed kätte lahendused</p> */}
 <img className='object-cover w-[1000px] h-[300px]'
 src='https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg'
 alt='image' />
    
  </div>
</div>


  </>
  )
}

export default AboutSection
