import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import SpecialityPage from './component/SpecialityPage.jsx';
import specialityData from './speciality.json'; 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Routes for Specialties */}
        {specialityData.map((speciality) => (
          <Route
            key={speciality.id}
            path={`/speciality/${speciality.id}`}
            element={<SpecialityPage data={speciality} />}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
