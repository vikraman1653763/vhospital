import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); 
  }, []);

  return (
    <div className="home-sec-2-container">
      <div className="home-sec-2-content">
        <h1 className="home-sec-2-title">
          Welcome to Venkataeswara Hospitals!
        </h1>
        <p className="home-sec-2-description">
          Venkataeswara Hospitals, a leading multispeciality hospital, is located in the heart of the city at Chamiers Road, Nandanam, Chennai, standing very close to the main arterial road of Mount Road (Anna Salai). We provide specialised and general medical services with professionalism, competence and a caring touch.
        </p>
      </div>
      <div className="home-sec-2-logo"   >
      <img
          src="/assets/logo-2.png"
          alt="Venkataeswara Hospitals Logo"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default Section2;
