import React from 'react'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'

const ShopItems = () => {

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
];


  return (
    <>
 <div className="max-w-7xl mx-auto px-6 py-8 mb-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">
          Showing 1–16 of 57 results
        </p>
        <select className="border rounded px-3 py-2 text-gray-700">
          <option>
Default order</option>
          <option>Price: low to high</option>
          <option>
Price: high to low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Product Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>

            {/* Price */}
            <p className="text-gray-600 mb-4">{product.price}</p>

            {/* Add to Cart */}
            <button className="bg-green-600 text-white font-medium px-6 py-2 rounded hover:bg-green-700">
              CONTACT US
            </button>
          </div>
        ))}
      </div>
    </div>

    
    </>
  )
}

export default ShopItems
