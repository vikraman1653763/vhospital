import React from 'react';
import Marquee from "react-fast-marquee";
import { FaHeartbeat, FaUserMd, FaChild, FaBrain, FaStethoscope } from 'react-icons/fa';
import { GiStomach, GiHealthNormal } from 'react-icons/gi';
import { MdOutlineCoronavirus } from 'react-icons/md';
import { BiDna } from 'react-icons/bi';

const specialties = [
  { icon: <GiHealthNormal />, name: 'Dermatology' },
  { icon: <FaBrain />, name: 'Neurology' },
  { icon: <FaChild />, name: 'Pediatrics' },
  { icon: <FaStethoscope />, name: 'Internal Medicine' },
  { icon: <GiStomach />, name: 'Gastroenterology' },
  { icon: <MdOutlineCoronavirus />, name: 'Rheumatology' },
  { icon: <BiDna />, name: 'Oncology' },
  { icon: <FaHeartbeat />, name: 'Cardiology' },
];

function Section4() {
  return (
    <div className='home-sec-4'>
        <div className='home-sec-4-cards'>
        <Marquee autoFill={true} pauseOnHover={true} speed={30} gradient={true} gradientColor="#ffffff">
        {specialties.map((specialty, index) => (
          <div key={index} className='home-sec-4-card'>
            <div className='home-sec-4-icon'>{specialty.icon}</div>
            <div className='home-sec-4-name'>{specialty.name}</div>
          </div>
        ))}
      </Marquee>
      </div>
    </div>
  );
}

export default Section4;
