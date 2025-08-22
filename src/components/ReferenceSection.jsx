import React from 'react'
import product1 from '../assets/set4.jpg'
import product2 from '../assets/set5.jpg'
import product3 from '../assets/set6.jpg'
import product4 from '../assets/Simple_green-1.png'

const ReferenceSection = () => {

        const products = [
      {
        id: 1,
        name: "2-module carport 26x580W with installation",
        price: "10050,00 ",
        image: product1, 
      },
      {
        id: 2,
        name: "3-module carport 34x580W with installation",
        price: "14000,00 ",
        image: product2,
      },
      {
        id: 3,
        name: "4-module carport 42x580W with installation",
        price: "15000,00 ",
        image: product3,
      },
      {
        id: 4,
        name: "5-module carport 50x580W with installation",
        price: "19400,00 ",
        image: product4,
      },
     {
        id: 1,
        name: "2-module carport 26x580W with installation",
        price: "10050,00 ",
        image: product1, 
      },
      {
        id: 2,
        name: "3-module carport 34x580W with installation",
        price: "14000,00 ",
        image: product2,
      },
      {
        id: 3,
        name: "4-module carport 42x580W with installation",
        price: "15000,00 ",
        image: product3,
      },
      {
        id: 4,
        name: "5-module carport 50x580W with installation",
        price: "19400,00 ",
        image: product4,
      },
      {
        id: 4,
        name: "5-module carport 50x580W with installation",
        price: "19400,00 ",
        image: product1,
      },
    ];

  return (
 <>
 <div className="max-w-7xl mx-auto px-6 py-8 mt-10 mb-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col items-center text-center"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>

          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default ReferenceSection
