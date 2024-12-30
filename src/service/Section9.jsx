import React from 'react';
import { WiStars } from "react-icons/wi";

const Section9 = () => {
  return (
    <section className="service-sec-6">
      <div className="service-sec-6-content">
        <div className="service-sec-6-text">
          <h2 className="service-sec-6-title">OPERATION THEATRES</h2>
          <p className="service-sec-6-description">
          Venkataeswara Hospitals is equipped with three Operation Theatres. Two theatres are utilised for major procedures, while the third caters to more minor surgical procedures. The main feature of the theatres is the 0.3-micron filter fitted with laminar airflow systems. This reduces infection contracted during procedures to the minimum.
          </p>
        </div>
        <div className='service-sec-6-details'>

        <div className="service-sec-6-points service-sec-9-point ">
          <ul>
            <li><WiStars/>Harmonic Scalpel</li>
            <li><WiStars/>C-Arm </li>
            <li><WiStars/>Anaesthesia Ventilator </li>
            <li><WiStars/>Laparoscopy Instruments </li>
            <li><WiStars/>Diathermy </li>
            <li><WiStars/>Adequate Surgical instruments </li>
            </ul>
        </div>
        <div className="service-sec-6-image service-sec-9-image">
          <img src="/assets/operation.webp" alt="Health Checkups" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
