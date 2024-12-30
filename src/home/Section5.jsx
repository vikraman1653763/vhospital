import React, { useState } from 'react';

const Section5 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Default to the first index

  // Data for each section
  const data = [
    {
      title: "SERVICES",
      content: "With a modern clinic managed by qualified and experienced doctors, Venkataeswara Hospitals works to offer the very best in preventative and curative healthcare. We utilise the latest in medical technology to ensure our patients receive accurate diagnoses. We have received the ISO 9001:2008 certification for quality."
    },
    {
      title: "HEALTH CHECKUPS",
      content: "At Venkataeswara Hospitals, we are committed to providing preventive healthcare. After all, prevention of disease is the best way to building a healthy society. We offer comprehensive health checkups that will help you get started on your journey to good health."
    },
    {
      title: "LABORATORY",
      content: "Our top priority is the care of our patients. That's why, at Venkataeswara Hospitals, we have invested in the best possible laboratory equipment. We aim to offer the best possible preventive and curative care."
    },
    {
      title: "MODERN CLINICAL PRACTICES",
      content: "With the best in laboratory and imaging equipment, and a team of highly qualified doctors, Venkataeswara Hospitals prioritises accurate diagnosis and provision of treatment information in a timely and compassionate manner to patients and their caregivers."
    },
    {
      title: "DIETARY",
      content: "We are what we eat! Dietary planning and restriction is one of the most important parts of holistic healthcare. Our team of experienced healthcare providers also shares dietetic advice and post-hospitalisation diet plans, as well as providing dietary care during inpatient hospitalisation, as required."
    }
  ];

  // Handle index click
  const handleIndexClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="home-sec-5-container">
      <div className="home-sec-5-index">
        {data.map((item, index) => (
          <button
            key={index}
            className={`home-sec-5-index-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleIndexClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="home-sec-5-content">
        <h2>{data[selectedIndex].title}</h2>
        <p>{data[selectedIndex].content}</p>
      </div>
    </div>
  );
};

export default Section5;
