import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);
  return (
    <div className="about-sec-4-container">
      <div className="about-sec-4-content">
        {/* Section Title */}
        <h2 className="about-sec-4-title">GUIDING PHILOSOPHY</h2>

        {/* Content Container */}
        <div className="about-sec-4-body">
          {/* Left Image Content */}
          <div className="about-sec-4-imgcontainer" data-aos="fade-left">
            <img 
              src="/assets/guide.webp" 
              alt="Guiding Philosophy" 
              className="about-sec-4-img" 
            />
          </div>

          {/* Right Text Content */}
          <div className="about-sec-4-text">
            <p className="about-sec-4-description">
              Preventing lifestyle diseases, especially heart attacks, is our mission. Proper medication, lifestyle changes, and regular checkups can predict, prevent, and control heart diseases.
            </p>
            <p className="about-sec-4-description">
              Early detection of obesity, diabetes, hypertension, and high cholesterol can prevent heart attacks, strokes, kidney failure, and some cancers. Visit us for regular health checkups.
            </p>
            <p className="about-sec-4-description">
              We believe health education improves health outcomes. Venkataeswara Hospitals is proud to be a Centre of Excellence, offering paramedical courses to educate future healthcare professionals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;
