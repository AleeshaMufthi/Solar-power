import React from 'react'
import ceo from '../assets/userIcon.jpg'

const Review = () => {
  return (
<div className="w-full bg-white py-16 px-6 lg:px-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side */}
    <div>
      <p className="text-green-600 font-semibold uppercase mb-2">
       Customer feedback
      </p>
      <h2 className="text-3xl font-bold mb-6">
        What do customers say about us?
      </h2>
      <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
        
OUR SERVICES
      </button>
    </div>

    {/* Right Side - Testimonial */}
    <div className="flex items-start gap-6">
      {/* Image */}
      <img
        src={ceo}
        alt="Client"
        className="w-28 h-28 object-cover rounded"
      />

      {/* Testimonial Text */}
      <div className="flex-1">
        {/* Stars */}
        <div className="flex text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Feedback */}
        <p className="text-gray-600 mb-4">
          We have been cooperating for a very long time. They offer turnkey solutions with all necessary permits.
The products offered are always better and suitable for our Nordic climate. I highly recommend!
        </p>

        {/* Author */}
        <p className="font-bold">Arno Kirik</p>
        <p className="text-gray-400 text-sm uppercase">CEO of Simon OÜ</p>
      </div>

      {/* Quote Icon */}
      <div className="text-gray-300 text-5xl font-serif leading-none">‟</div>
    </div>
  </div>
</div>

  )
}

export default Review
