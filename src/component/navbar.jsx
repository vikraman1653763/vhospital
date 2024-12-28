import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mini, setMini] = useState(false);
  const [types, setTypes] = useState(null);
  const location = useLocation(); 

  const toggleFuture = () => {
    setMini(!mini);
    setTypes(null);
  };

  const toggleTypes = (index) => {
    setTypes((prev) => (prev === index ? null : index));
  };

  const droneLinks = [
    {
      type: 'Agricultural Drone',
      models: [
        { name: 'AGR 10', link: '/agr10' },
        { name: 'AGR 16', link: '/agr16' },
        { name: 'AGR 20', link: '/agr20' },
      ],
    },
    {
      type: 'Surveillance Drone',
      models: [
        { name: 'VTOL', link: '/vtol' },
        { name: 'Quadcopter', link: '/Quadcopter' },
      ],
    },
    {
      type: 'Military Drone',
      models: [
        { name: 'LW-50', link: '/lw-50' },
        { name: 'HW-60', link: '/hw-60' },
      ],
    },
    {
      type: 'Accessories',
      models: [
        { name: 'Flight Controller', link: '/flight-controller' },
        { name: 'Batteries', link: '/batteries' },
      ],
    },
  ];

  // Close dropdowns when the route changes
  useEffect(() => {
    setMini(false);
    setTypes(null);
  }, [location]);

  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img className="logooimg" src="/assets/logo.webp" alt="logo" />
        </Link>
        <ul>
          <li onClick={toggleFuture}>
            <span>Future</span>
          </li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/Specialities">SPECIALITIES & CONSULTANTS</Link></li>
          <li><Link to="/Contact ">CONTACT</Link></li>
          
        </ul>
      </div>

      <AnimatePresence>
        {mini && (
          <motion.div
            className="future-container"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {droneLinks.map((drone, index) => (
              <div key={index} onClick={() => toggleTypes(index)} className="drone-link">
                {drone.type}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {types !== null && (
          <motion.div
            className="types-box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="future-type-container">
              {droneLinks[types].models.map((model, modelIndex) => (
                <Link key={modelIndex} to={model.link}>
                  {model.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;

