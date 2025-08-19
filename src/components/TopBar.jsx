import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {

  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide top bar
        setShowTopBar(false);
      } else {
        // scrolling up → show top bar
        setShowTopBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
 <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div
        className={`bg-green-600 text-white text-sm transition-transform duration-500 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-8xl text-lg mx-auto flex justify-between items-center px-4 py-3">
          <span>Call: +372 5340 9016 / Email: info@solar.ee</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow transition-all duration-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">SolarEnergy</div>

          {/* Menu Items */}
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-semibold">
              <li className="cursor-pointer">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-lime-800 cursor-pointer">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="hover:text-lime-800 cursor-pointer">
                <Link to="/shop">SHOP</Link>
              </li>
              <li className="hover:text-lime-800 cursor-pointer">
                <Link to="/overview">REFERENCE</Link>
              </li>
              <li className="hover:text-lime-800 cursor-pointer">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="hover:text-lime-800 cursor-pointer">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default TopBar
