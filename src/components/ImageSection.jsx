import React from 'react'
import video from '../assets/solar_video.mp4'

const ImageSection = () => {
  return (
<div className="relative mt-10">
  {/* Background Image */}
  {/* <img
    className="w-[950px] h-[700px] object-cover"
    src="https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg"
    alt="background"
  /> */}
    <video
    className="w-[950px] h-[700px] object-cover"
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Text Overlay Section */}
  <div className="absolute bottom-14 right-64 bg-green-600 text-white p-12 w-[32%] h-[550px]">
    <p className="uppercase font-bold tracking-wide">Turnkey solutions</p>
    <h1 className="text-4xl font-bold mt-2">We offer</h1>
    <h1 className="text-4xl font-bold mt-1">full service!</h1>
    <div className="text-lg mt-2 text-gray-200">
        <p>We offer the service as a complete solution, starting with
        from design to obtaining a permit to use. We have</p>
        <p>from design to obtaining a permit to use. We have specialists in all areas in our team. For example, we have</p>
        <p>our own installation team, meaning we do all the work</p>
        <p>from start to finish yourself. By choosing us, you can be sure that
        you will get the best, most beautiful and highest quality service! We are
        there will be all sorts of warranty problems in the future</p>
        <p>solving.</p>
    </div>
    <button className="mt-5 bg-white text-black font-semibold px-6 py-4 rounded">
      READ MORE
    </button>
  </div>
</div>

  )
}

export default ImageSection
