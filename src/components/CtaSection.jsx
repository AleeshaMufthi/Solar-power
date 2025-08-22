import React from 'react'
import image1 from '../assets/solar-planning-1.jpeg'
import image2 from '../assets/solar-planning2.jpeg'
import image3 from '../assets/solar-panel-installing-3.jpeg'
import image4 from '../assets/solar-planning-4.jpg'

const CtaSection = () => {
  return (
    <>
    <div className="mt-10 w-full bg-white py-16">
  {/* Section Title */}
  <p className='uppercase text-center text-green-600 font-semibold mb-4'>
    How do we work?
  </p>
  <h2 className="text-4xl font-semibold text-center mb-12">
Our work process in stages
  </h2>

  {/* Steps */}
  <div className="flex justify-center items-start gap-12 relative">
    {/* Step 1 */}
    <div className="flex flex-col items-center text-center w-56 relative">
      <div className="relative">
        <img
          src={image1}
          alt="Step 1"
          className="rounded-full border-4 border-dashed border-gray-300"
        />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
          01
        </span>
      </div>
      <p className="mt-4 font-semibold">
        Project estimation and bid preparation
      </p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center text-center w-56 relative">
      <div className="relative">
        <img
          src={image2}
          alt="Step 2"
          className="rounded-full border-4 border-dashed border-gray-300"
        />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
          02
        </span>
      </div>
      <p className="mt-4 font-semibold">
        Design and obtaining a building permit
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center text-center w-56 relative">
      <div className="relative">
        <img
          src={image3}
          alt="Step 3"
          className="rounded-full border-4 border-dashed border-gray-300"
        />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
          03
        </span>
      </div>
      <p className="mt-4 font-semibold">
Product transportation and installation work</p>
    </div>

    {/* Step 4 */}
    <div className="flex flex-col items-center text-center w-56 relative">
      <div className="relative">
        <img
          src={image4}
          alt="Step 4"
          className="rounded-full border-4 border-dashed border-gray-300"
        />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
          04
        </span>
      </div>
      <p className="mt-4 font-semibold">
     Operating permits, after-sales service and maintenance work
      </p>
    </div>
  </div>
</div>

{/* Green CTA Section */}
<div className="w-full bg-green-500 text-white py-12 px-6 text-center">
  <h2 className="text-2xl font-bold mb-2">
    Do you have any great projects coming up?
  </h2>
  <p className="mb-6">
Let us finish this!</p>
  <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-green-600 transition">
    CONTACT US
  </button>
</div>

    </>
  )
}

export default CtaSection
