import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaAmbulance,
  FaHeartbeat,
  FaLungs,
  FaBolt,
  FaTint,
  FaClock,
  FaFirstAid,
  FaHospital,
  FaSnowflake,
  FaUserMd,
} from 'react-icons/fa'; // Importing icons
import { SiOxygen } from 'react-icons/si';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with a duration of 600ms
  }, []);

  return (
    <section className="career-sec-2" id='ambulance'>
      {/* Content Section */}
      <div className="career-sec-2-content">
        <div
          className="career-sec-2-text"
          data-aos="fade-right" // Animation for the text
        >
          <h2 className="career-sec-2-title">Join Our Team</h2>
          <p className="career-sec-2-description">
          Be part of something bigger at Venkataeswara Hospital, where every role contributes to compassionate, high-quality patient care. We seek dedicated professionals eager to grow and make a difference. Explore our opportunities and build a meaningful career with us.
          </p>
        </div>
        <div
          className="career-sec-2-image"
          data-aos="fade-left" // Animation for the image
        >
          <img src="/assets/hosp/vh08.webp" alt="Ambulance" /> {/* Set your ambulance image path */}
        </div>
      </div>

      {/* Equipment Section */}
      {/* <div className="career-sec-2-equipment" data-aos="fade-up">
        <div className="career-sec-2-icon">
          <FaAmbulance />
        </div>
        <h3>
          We provide top quality emergency care with the following equipment
          available in our ambulance:
        </h3>
        <ul>
          <li>
            <FaHeartbeat /> Monitor
          </li>
          <li>
            <FaLungs /> Ventilator
          </li>
          <li>
            <FaBolt /> Defibrillator
          </li>
          <li>
            <FaTint /> Infusion pumps
          </li>
          <li>
            <SiOxygen /> Continuous O2 supply
          </li>
          <li>
            <FaClock /> 24×7 services provided for all patient transport needs
          </li>
          <li>
            <FaFirstAid /> Event cover and First Aid support for parties, sports
            activities and crowded gatherings
          </li>
          <li>
            <FaHospital /> Patient transfers from home to hospital & from
            hospital to hospital
          </li>
          <li>
            <FaSnowflake /> Fully equipped air-conditioned ambulance for patient
            comfort
          </li>
          <li>
            <FaUserMd /> Ambulance managed by highly trained medical personnel
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Section2;
