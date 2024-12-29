import React from 'react';
import {FaAmbulance, FaHeartbeat, FaLungs, FaBolt, FaTint, FaClock, FaFirstAid, FaHospital, FaSnowflake, FaUserMd } from 'react-icons/fa'; // Importing icons
import { SiOxygen } from "react-icons/si";

const Section2 = () => {
  return (
    <section className="service-sec-2">
      <div className="service-sec-2-content">
        <div className="service-sec-2-text">
          <h2 className="service-sec-2-title">AMBULANCE SERVICES</h2>
          <p className="service-sec-2-description">
            Your loved ones will be cared for professionally from the moment of pickup to reaching our hospital, with personalised, one-to-one attention at all times. We ensure that their journey with us is as fast and comfortable as possible.
          </p>
        </div>
        <div className="service-sec-2-image">
          <img src="/specialityimg/counsel.png" alt="Ambulance" /> {/* Set your ambulance image path */}
        </div>
      </div>
     
      <div className="service-sec-2-equipment">
         <div className="service-sec-2-icon">
        <FaAmbulance  />
      </div>
        <h3>We provide top quality emergency care with the following equipment available in our ambulance:</h3>
        <ul>
          <li><FaHeartbeat /> Monitor</li>
          <li><FaLungs /> Ventilator</li>
          <li><FaBolt /> Defibrillator</li>
          <li><FaTint /> Infusion pumps</li>
          <li><SiOxygen /> Continuous O2 supply</li>
          <li><FaClock /> 24×7 services provided for all patient transport needs</li>
          <li><FaFirstAid /> Event cover and First Aid support for parties, sports activities and crowded gatherings</li>
          <li><FaHospital /> Patient transfers from home to hospital & from hospital to hospital</li>
          <li><FaSnowflake /> Fully equipped air-conditioned ambulance for patient comfort</li>
          <li><FaUserMd /> Ambulance managed by highly trained medical personnel</li>
        </ul>
      </div>
    </section>
  );
};

export default Section2;
