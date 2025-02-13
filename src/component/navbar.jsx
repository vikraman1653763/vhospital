import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import serviceLinks from '../speciality.json'; // Import the JSON data

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track the active menu
  const location = useLocation();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle the clicked menu, close others
  };

  useEffect(() => {
    setActiveMenu(null); // Close all menus on route change
  }, [location]);

  return (
    <nav>
      <div className={`navbar ${activeMenu ? 'active' : ''}`}> 
        <div className='nav-logo'>
          <Link to="/">
            <img className="logooimg" src="/assets/logo.webp" alt="logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li onClick={() => toggleMenu('specialities')}>
            <span>Specialities & Consultants</span>
          </li>
          <li className="menu-item" onClick={() => toggleMenu('academic')}>
            <span>Academic</span>
            {activeMenu === 'academic' && (
              <motion.ul 
                className="submenu-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <li><a href="https://venkataeswaraalliedhealthsciences.com/" target="_blank" rel="noopener noreferrer">Enroll Online</a></li>
                <li><a href="/assets/Enroll-Online.pdf" target="_blank" rel="noopener noreferrer">Download Form</a></li>
              </motion.ul>
            )}
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {activeMenu === 'specialities' && (
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
