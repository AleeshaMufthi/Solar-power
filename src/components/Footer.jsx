import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#0d1117] text-gray-300 py-12 px-6 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Company Info */}
    <div>
      {/* <img
        src="/logo.png" // Replace with your logo path
        alt="Solar Estonia"
        className="mb-4 w-40"
      /> */}
      <h1 className='text-2xl font-bold text-blue-400'>DAW Power India</h1>
      <p className="text-sm leading-relaxed">
       Daw Power India is an energy company that focuses primarily on providing renewable energy solutions.
      </p>
      <p className="text-sm leading-relaxed mt-4">
The company is known for designing and building specialized and technically complex
solar energy system solutions. We help our clients maximize energy efficiency,
reducing dependence on traditional energy sources.
      </p>
    </div>

    {/* Categories */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        PRODUCT CATEGORY
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>› Battery banks with inverter</li>
        <li>› Hybrid inverters</li>
        <li>› Battery banks</li>
        <li>› Solar panel kits</li>
        <li>› Carports</li>
        <li>› Products with installation</li>
        <li>› Battery banks with inverter – all in one towers</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        
OUR SERVICES
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>› Installation of solar panels on pitched roofs</li>
        <li>› Installation of solar panels on flat roofs</li>
        <li>› Ground-mounted solar panel installation</li>
        <li>› Installation of solar panels on facades</li>
        <li>› Installing solar panels as a carport</li>
        <li>› Installation of solar panels as roofing material</li>
        <li>› Energy storage systems</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        REQUISITES
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>DAW Power India</li>
        <li>Registry code: 12647942</li>
        <li>KMKR nr: EE101716510</li>
        <li>Phone: +372 5340 9016</li>
        <li>E-mail: info@dawpowerindia.com</li>
        <li>
          Address: India, 76404
          <br />
         India
        </li>
      </ul>
      <div className="mt-6">
        {/* <img
          src="/badge.png" // Replace with your badge image path
          alt="Usaldusväärne ettevõte"
          className="w-36"
        /> */}
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-10 pt-6">
    Copyright © 2025 DAW Power India, All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer
