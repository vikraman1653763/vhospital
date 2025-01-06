import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WiStars } from "react-icons/wi";

const Section6 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with a duration of 600ms
  }, []);

  return (
    <section className="service-sec-6" id='image'>
      <div className="service-sec-6-content">
        <div className="service-sec-6-text">
          <h2 className="service-sec-6-title" data-aos='fade-right'>IMAGING SERVICES</h2>
          <p className="service-sec-6-description">
            Our Imaging Department provides a wide range of medical imaging types and modalities. While most imaging is conducted during regular office hours, we ensure that care beyond hours is not restricted. Special attention is given to on-call emergencies as well.
          </p>
        </div>
        <div className='service-sec-6-details'>
          <div className="service-sec-6-image">
            <img src="/assets/xray.webp" alt="xray" />
          </div>
          <div className="service-sec-6-points">
            <ul>
              <li ><WiStars /> Radiography (X-rays)</li>
              <li ><WiStars /> Ultrasound</li>
              <li ><WiStars /> Echocardiography</li>
              <li ><WiStars /> Vascular Doppler Study</li>
              <li ><WiStars /> Computed Tomography (CT scan)</li>
              <li d><WiStars /> Nuclear Medicine</li>
              <li><WiStars /> Angiography</li>
              <li><WiStars /> Mammography</li>
              <li ><WiStars /> Obstetric scanning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
