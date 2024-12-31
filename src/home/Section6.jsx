import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section6 = () => {
  // Data for the cards
  useEffect(() => {
    AOS.init({ duration: 600 }); 
  }, []);

  const cardsData = [
    {
      image: "/assets/qu-1.webp", 
      title: "QUALITY",
      description: "Venkataeswara Hospitals is an ISO 9001:2008 certified organisation. We offer high-quality care and service to all our patients, supported by strong infrastructure and a galaxy of eminent academic and medical specialists."
    },
    {
        image: "/assets/im-1.webp", 
      title: "IMAGING",
      description: "Our Imaging Department provides a wide range of medical imaging types and modalities. While most imaging is conducted during regular office hours, we ensure that care beyond hours is not restricted. Special attention is given to on-call emergencies as well."
    },
    {
        image: "/assets/am-1.webp", 
              title: "AMBULANCE",
      description: "Our ambulances carry oxygen therapy equipment with defibrillators to provide immediate aid in the event of any deterioration in the health of patients while in our care."
    }
  ];

  return (
    <div className="home-sec-6-container">
      <div className="home-sec-6-cards">
        {cardsData.map((card, index) => ( 
          <div key={index} className="home-sec-6-card" data-aos="zoom-out"  >
            <img src={card.image} alt={`Card ${index + 1}`} className="home-sec-6-card-image" />
            
            <div className='home-sec-6-card-container'>

            <h3 className="home-sec-6-card-title">{card.title}</h3>
            <p className="home-sec-6-card-description">{card.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
