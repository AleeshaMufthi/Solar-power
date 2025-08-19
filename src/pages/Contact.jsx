import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import image from '../assets/Lamekatus_4-770x500.jpg'

const Contact = () => {
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
        Contact Us
      </h2>
    </div>
  </div>


      <div className="mt-10 mb-10 max-w-lg w-full bg-white shadow-lg rounded-xl p-6">
     
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    
    <Footer />
</>
  )
}

export default Contact
