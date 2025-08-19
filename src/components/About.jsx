import React from "react";
import { Check, Sun } from "lucide-react";
import image from '../assets/Simple_green-1.png';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-12xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Text */}
        <div className="pl-40">
          <p className="text-green-600 font-semibold uppercase mb-3">
            Kes me oleme
          </p>
          <h2 className="text-4xl md:text-4xl font-bold leading-snug mb-6">
            Hoiame loodust ja kasutame koos taastuvenergiat
          </h2>
          <ul className="space-y-4 text-lg mb-8">
            {[
              "Toodame enda hoonele vajaliku energia",
              "Oleme sõltumatud kõikuvatest energiahindadest",
              "Kasutame akulahendusi elektrivarustuskindluse ning hinnalae tagamiseks",
              "Investeerime tulevikku ja hoiame raha kokku",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <Check className="text-green-600 font-extrabold w-6 h-6 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded">
            LOE LÄHEMALT
          </button>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="house on leaf"
            className="max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Stats */}
        <div className="space-y-10">
          {[
            { number: "350", text: "rahuloleva kliendi" },
            { number: "15", text: "aasta kogemust solaaride alal" },
            { number: "27", text: "aastase ajalooga ettevõte" },
          ].map((stat, i) => (
            <div key={i} className="flex items-start gap-4">
              <Sun className="mt-20 text-green-600 w-8 h-8" />
              <div>
                <p className="mt-20 text-2xl font-bold text-gray-900">
                  üle {stat.number}.
                </p>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}