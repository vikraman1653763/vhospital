import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import Loader from './component/Loader.jsx';
import Footer from './component/Footer.jsx';
import ScrollToTop from './component/ScrollToTop.jsx';
import specialityData from './speciality.json';
import './App.css';
// Lazy-loaded components
const Home = lazy(() => import('./component/Home.jsx'));
const About = lazy(() => import('./component/About.jsx'));
const Contact = lazy(() => import('./component/Contact.jsx'));
const Service = lazy(() => import('./component/service.jsx'));
const SpecialityPage = lazy(() => import('./component/SpecialityPage.jsx'));
const Success = lazy(() => import('./component/Success.jsx'));
const Err = lazy(() => import('./component/404.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="main">
          <Routes>
            {/* Static Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/success" element={<Success />} />

            {/* Dynamic Routes */}
            {specialityData.map((speciality) => (
              <Route
                key={speciality.id}
                path={`/speciality/${speciality.id}`}
                element={<SpecialityPage data={speciality} />}
              />
            ))}

            {/* Fallback Route */}
            <Route path="*" element={<Err />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </Router>
  );
}

export default App;
