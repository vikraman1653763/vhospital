import React from "react";

// import { descNums } from "./Const";

const Section8 = () => {
    const descNums = [
        {
          num: '500+',
          text: 'Expert Doctors',
        },
        {
          num: '20k+',
          text: 'Happy Patients',
        },
        {
          num: '24/7',
          text: 'Emergency Service',
        },
        {
          num: '100+',
          text: 'Operation Theatres',
        },
        {
          num: '850+',
          text: 'Hospital Rooms',
        },
      ];
      
  return (
    <div className="descnums-container">
      {descNums.map((descNum, index) => (
        <div className="descnum-card" key={index}>
          <h3>{descNum.num}</h3>
          <p>{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Section8;
