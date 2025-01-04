import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import SpecialityPage from './component/SpecialityPage.jsx';
import specialityData from './speciality.json'; 
import './App.css';
import Success from "./component/Success.jsx";
import Err from "./component/404.jsx";
import Service from './component/service.jsx';
import Loader from './component/Loader.jsx';
import useMediaLoader from './component/useMediaLoader.jsx'; 
import ScrollToTop from './component/ScrollToTop.jsx';
function App() {
  const isLoaded = useMediaLoader();

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar/>
        <div className='main'>
      <Routes>

        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/success' element={<Success/>}/>
        {specialityData.map((speciality) => (
          <Route
          key={speciality.id}
          path={`/speciality/${speciality.id}`}
          element={<SpecialityPage data={speciality} />}
          />
        ))}
        <Route path="*" element={<Err />} />
      </Routes>
          </div>
      <Footer />
      <ScrollToTop/>
    </Router>
  );
}

export default App;
