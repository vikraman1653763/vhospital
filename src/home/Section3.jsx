import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WiStars } from "react-icons/wi";

const Section3 = () => {

  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);

  return (
    <div className="home-sec-3-container">
      <div className="home-sec-3-video"   data-aos="fade-up">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BT6LrWnUh1Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="home-sec-3-content">
        <h1 className="home-sec-3-title">
          Stay healthy.<br />
          Stay happy.
        </h1>
        <ul className="home-sec-3-description">
          <li><WiStars/> At Venkataeswara Hospitals, your health is our passion! Meet our specialists for holistic, sustainable long-term care.</li>
          <li><WiStars/> Because we care for you, we are taking all the precautionary measures for your safety and good health.</li>
          <li><WiStars/> Let’s fight back COVID-19 by following general health guidelines and staying at home, as life is more precious than anything.</li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
