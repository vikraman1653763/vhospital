import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Section8 = () => {
  const descNums = [
    {
      num: 50,
      text: "Expert Doctors",
    },
    {
      num: 50000,
      text: "Happy Patients",
    },
    {
      num: 23,
      text: "Emergency Service",
    },
    // {
    //   num: 100,
    //   text: "Operation Theatres",
    // },
    {
      num: 100,
      text: "Hospital Rooms",
    },
  ];

  const [counterActive, setCounterActive] = useState(false); // Track if counter has been triggered

  return (
    <div className="descnums-container">
      {descNums.map((descNum, index) => (
        <div className="descnum-card" key={index}>
          <ScrollTrigger
            onEnter={() => setCounterActive(true)} // Activate the counter when the section enters the viewport
            onExit={() => setCounterActive(false)} // Optionally reset when leaving the viewport (if needed)
            triggerOnce={true} // Ensure the animation triggers only once
          >
            <h3>
              {counterActive ? (
                <CountUp start={0} end={descNum.num} duration={2} separator="," />
              ) : (
                "0"
              )}
              +
            </h3>
          </ScrollTrigger>
          <p>{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Section8;
