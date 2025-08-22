import React from 'react'
import planning from '../assets/project_planning.jpg'
import planning2 from '../assets/planning2.jpg'

const Planning = () => {
  return (
<div className="w-full bg-white py-16 px-6 lg:px-20">
  {/* Section Header */}
  <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
    <div>
      <p className="text-green-600 font-semibold uppercase mb-2">    
News and articles
      </p>
      <h2 className="text-3xl font-bold mb-4">
        What's happening in Greenpapulus?
      </h2>
    </div>
    <p className="text-gray-600 max-w-2xl">
      We try to write on our blog and keep our customers informed about news and developments in the 
solar and energy storage sector. When there is news from our company or 
new products or product innovations, we try to share this information with our customers.
    </p>
  </div>

  {/* Articles */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Article 1 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={planning2}
        alt="Article"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <p className="text-green-600 font-semibold uppercase text-sm mb-2">
          22 Dec, 2024
        </p>
        <h3 className="text-xl font-bold mb-4">
          Why use solar panels with battery systems?
        </h3>
        <a href="#" className="text-black font-semibold hover:text-green-600">
         
READ ON
          <span className="block w-16 h-0.5 bg-green-600 mt-1"></span>
        </a>
      </div>
    </div>

    {/* Article 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={planning}
        alt="Article"
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <p className="text-green-600 font-semibold uppercase text-sm mb-2">
          22 Dec, 2024
        </p>
        <h3 className="text-xl font-bold mb-4">
          Advantages of solar energy
        </h3>
        <a href="#" className="text-black font-semibold hover:text-green-600">
          READ ON
          <span className="block w-16 h-0.5 bg-green-600 mt-1"></span>
        </a>
      </div>
    </div>

    {/* Extra slot for future articles */}
    <div className="hidden lg:block"></div>
  </div>
</div>

  )
}

export default Planning
