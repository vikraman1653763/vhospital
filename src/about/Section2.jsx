import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {

  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);
  return (
    <div className="sec-2-container">
      <div className="sec-2-content">
        {/* Section Title */}
        <h2 className="sec-2-title">Founder of Venkataeswara Hospitals<br></br>-Dr. Thillai Vallal</h2>

        {/* Content Container */}
        <div className="sec-2-body">
          {/* Left Image Content */}
          <div className="sec-2-imgcontainer" data-aos="fade-left">
            <img 
              src="/assets/founder.webp" 
              alt="Founderimg" 
              className="sec-2-img" 
            />
          </div>

          {/* Right Text Content */}
          <div className="sec-2-text">
              <p className="sec-2-description">
              Venkataeswara Hospitals, founded in 2003 by renowned cardiologist Dr. Thillai Vallal, aims to provide high-quality, affordable healthcare in Chennai and beyond. A native of Tirunelveli, Tamil Nadu, Dr. Thillai Vallal earned his MD and DM from Madras Medical College. He is an active member of the Cardiological Society of India, Association of Physicians of India, Indian Medical Association, and the European Society of Cardiology. With extensive teaching experience, he serves as senior faculty at The Tamil Nadu Dr. M.G.R. Medical University and chairs the Allied Health Sciences Department. Committed to advanced, patient-centric care, he envisioned a multispecialty hospital blending modern technology with compassionate treatment. Today, Venkataeswara Hospitals is a trusted healthcare provider across Tamil Nadu and beyond.
              </p>
              
            </div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
