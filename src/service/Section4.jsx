import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiSiren } from "react-icons/gi";

const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with a duration of 600ms
  }, []);

  return (
    <section className="service-sec-4" id='emergency'>
      <div
        className="service-sec-4-icon"
        data-aos="zoom-in" // Animation for the icon
      >
        <GiSiren />
      </div>
      <div className="service-sec-4-content">
        <div
          className="service-sec-4-text"
        >
          <h2 className="service-sec-4-title">EMERGENCY AND TRAUMA</h2>
          <p className="service-sec-4-description">
            Venkataeswara Hospitals is equipped to handle complex, critical injuries with advanced technology and a skilled team of specialists.
            Our 24-hour emergency ward is prepared for all types of trauma and medical emergencies, including cardiac emergencies and poisonings.
          </p>
          <p className="service-sec-4-description">
            Our experienced Casualty Medical Officers and Nurses provide expert care and are actively involved in ongoing training to ensure the highest standards.
            Teamwork is our hallmark, with specialists collaborating to deliver timely and effective care.
          </p>
          <p className="service-sec-4-description">
            We focus on rapid assessment, communication, and mobilisation to save lives and reduce suffering, ensuring the best outcomes in critical situations.
          </p>
        </div>
        <div
          className="service-sec-4-image"
          data-aos="fade-left" // Animation for the image
        >
          <img src="/assets/hosp/vh 05.webp" alt="Emergency and Trauma" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
