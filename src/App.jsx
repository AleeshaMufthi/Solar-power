import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Overview from './pages/Reference';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </Router>

  )
}

export default App
