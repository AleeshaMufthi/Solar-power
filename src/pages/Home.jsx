import React from 'react'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Types from '../components/Types'
import { Sun, Zap, Battery, WindIcon } from "lucide-react";
import ImageSection from '../components/ImageSection'
import CtaSection from '../components/CtaSection'
import Review from '../components/Review'
import Planning from '../components/Planning'
import Footer from '../components/Footer'

const cards = [
  { id: 1, icon: <Sun />, title: "Solar energy" },
  { id: 2, icon: <Zap />, title: "Energy Saving" },
  { id: 3, icon: <Battery />, title: "Battery solutions" },
  { id: 4, icon: <WindIcon />, title: "Home solutions" },
];

const Home = () => {
  return (
    <>
      <TopBar />
      <Hero />
   <div className="relative -mt-20 w-full h-full flex justify-center z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto px-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow p-16 border-b-4 border-green-600"
            >
              <div className="text-green-600 mb-3">{card.icon}</div>
              <h3 className="font-bold text-xl text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <About />
      <Types />
      <ImageSection />
      <CtaSection />
      <Review />
      <Planning />
      <Footer />
    </>
  )
}

export default Home
