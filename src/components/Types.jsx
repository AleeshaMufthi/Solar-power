import React from "react";
import { Sun } from "lucide-react";
import image1 from '../assets/Installation-of-gorund-mounted-solar-panels-770x500.jpg'
import image2 from '../assets/installing-solar-panels-on-pitched-roof-770x500.jpg'
import image3 from '../assets/Lamekatus_4-770x500.jpg'
import image4 from '../assets/set4.jpg'
import image5 from '../assets/set5.jpg'
import image6 from '../assets/set6.jpg'

const installationTypes = [
  {
    id: 1,
    title: "Installation of solar panels on pitched roofs",
    subtitle: "INSTALLATION METHOD",
    description: "The most common INSTALLATION METHOD for gable roofs of a house or building.",
    image: image1,
    link: "#",
  },
  {
    id: 2,
    title: "Installation of solar panels on flat roofs",
    subtitle: "INSTALLATION METHOD",
    description: "Adhesive flat roof solution for solar panels",
    image: image2,
    link: "#",
  },
  {
    id: 3,
    title: "Ground-mounted solar panel installation",
    subtitle: "INSTALLATION METHOD",
    description: "Most common way of installing ground mounted solar panels",
    image: image3,
    link: "#",
  },
    {
    id: 4,
    title: "Installation of solar panels on pitched roofs",
    subtitle: "INSTALLATION METHOD",
    description: "The most common INSTALLATION METHOD for gable roofs of a house or building.",
    image: image4,
    link: "#",
  },
  {
    id: 5,
    title: "Installation of solar panels on flat roofs",
    subtitle: "INSTALLATION METHOD",
    description: "Adhesive flat roof solution for solar panels",
    image: image5,
    link: "#",
  },
  {
    id: 6,
    title: "Ground-mounted solar panel installation",
    subtitle: "INSTALLATION METHOD",
    description: "Most common way of installing ground mounted solar panels",
    image: image6,
    link: "#",
  },
];

export default function Types() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-green-600 mb-5 font-semibold uppercase">
Solar panels and solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Installation methods we offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {installationTypes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 rounded-full p-4 shadow">
                    <Sun className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pt-12 pb-8">
                <p className="text-md font-semibold uppercase tracking-wide text-black mb-2">
                  {item.subtitle}
                </p>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="text-gray-900 font-semibold underline"
                >
                  MORE DETAILS
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
