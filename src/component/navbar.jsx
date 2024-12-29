import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import serviceLinks from '../speciality.json'; // Import the JSON data

const Navbar = () => {
  const [mini, setMini] = useState(false);
  const [types, setTypes] = useState(null);
  const [academicOpen, setAcademicOpen] = useState(false); // State for toggling Academic submenu
  const location = useLocation();

  const toggleservices = () => {
    setMini(!mini);
    setTypes(null); // Reset types when toggling services
  };

  const toggleTypes = () => {
    setTypes(!types); // Toggle the display of the individual types
  };

  const toggleAcademic = () => {
    setAcademicOpen(!academicOpen); // Toggle the Academic submenu
  };

  // Close dropdowns when the route changes
  useEffect(() => {
    setMini(false);
    setTypes(null);
    setAcademicOpen(false); // Close Academic submenu when route changes
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <div className='nav-logo'>
          <Link to="/">
            <img className="logooimg" src="/assets/logo.webp" alt="logo" />
            <img className="logooimg" src="/assets/emergency.webp" alt="logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/service">SERVICES</Link></li>
          <li onClick={toggleservices}>
            <span>SPECIALITIES & CONSULTANTS</span>
          </li>
          <li className="menu-item" onClick={toggleAcademic}>
            <span>ACADEMIC</span>
            {academicOpen && (
            <motion.ul 
              className="submenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <li><a href="https://venkataeswaraalliedhealthsciences.com/">Enroll Online</a></li>
              <li><a href="/assets/Enroll-Online.pdf" target="_blank" rel="noopener noreferrer">Download Form</a></li>
              </motion.ul>
          )}

          </li>
          <li><Link to="/Contact">CONTACT</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {mini && (
          <motion.div
            className="types-box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="indi-type-container">
              {serviceLinks.map((speciality) => (
                <li key={speciality.id}>
                  <Link to={`/speciality/${speciality.id}`}>{speciality.title}</Link>
                </li>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
