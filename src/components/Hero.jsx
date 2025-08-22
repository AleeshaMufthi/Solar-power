import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from '../assets/wind-turbines-solar-panels-field-yellow-flowers.jpg'
import image2 from '../assets/wind-turbines-generating-clean-energy.jpg';
import image3 from '../assets/sunset-sky-powers-wind-solar-energy-generated-by-ai.jpg';

const slides = [
  {
    id: 1,
    image: image1,
    title: "We can provide a high-quality and good solar power plant",
    buttonText: "OUR PRODUCTS",
  },
  {
    id: 2,
    image: image2,
    title: "Solar energy for your home and business",
    buttonText: "OUR PRODUCTS",
  },
  {
    id: 3,
    image: image3,
    title: "Green energy, clean future",
    buttonText: "OUR PRODUCTS",
  },
];

const Hero = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    
 <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
          <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
      
          <img
            src={slides[index].image}
            alt="solar"
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-12 md:px-24">
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-snug">
              {slides[index].title}
            </h1>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded">
              {slides[index].buttonText}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

   
    </section>


  )
}

export default Hero
