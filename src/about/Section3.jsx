import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section3 = () => {
  useEffect(() => {
      AOS.init({ duration: 600 }); 
    }, []);
  const visionPoints = [
    {
      title: "Trusted Lifesavers",
      description: "To become the most trusted hospital for saving lives in the region.",
    },
    {
      title: "Excellence and Affordability",
      description: "To be the centre of excellence and apex institution for affordable healthcare.",
    },
  ];

  const missionPoints = [
    {
      title: "Patient-Centered Care",
      description: "To deliver consistent, patient-centred, holistic and affordable healthcare.",
    },
    {
      title: "Healthy Society Contribution",
      description: "To contribute to a healthy society by consistently updating and improving available healthcare facilities.",
    },
    {
      title: "Advanced Emergency Care",
      description: "To deliver comprehensive advanced care for cardiovascular emergencies and trauma care.",
    },
  ];

  const valuesPoints = [
    {
      title: "Comprehensive Care",
      description: "Focus on delivering high-quality and comprehensive care.",
    },
    {
      title: "Transparency",
      description: "Maintain openness and honesty in all processes.",
    },
    {
      title: "Teamwork",
      description: "Foster collaboration and teamwork at all levels.",
    },
    {
      title: "Accountability",
      description: "Promote self and group accountability for better results.",
    },
    {
      title: "Integrity",
      description: "Uphold integrity in all practices and services.",
    },
  ];

  return (
    <section className="vision-section">
      <h2 className="vision-heading">OUR VISION</h2>
      <div className="vision-cards">
        {visionPoints.map((point, index) => (
          <div key={index} className="vision-card" data-aos="fade-up">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>

      <h2 className="vision-heading">OUR MISSION</h2>
      <div className="vision-cards">
        {missionPoints.map((point, index) => (
          <div key={index} className="vision-card"data-aos="fade-up">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>

      <h2 className="vision-heading">OUR VALUES</h2>
      <div className="vision-cards">
        {valuesPoints.map((point, index) => (
          <div key={index} className="vision-card"data-aos="fade-up">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
