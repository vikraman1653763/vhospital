import React from 'react'
import '../style/career.css';
import Section1 from '../career/Section1.jsx';
import Section2 from '../career/Section2.jsx';
import Section3 from '../career/Section3.jsx';
import Section4 from '../career/Section4.jsx';
import Section5 from '../career/Section5.jsx';

function Career() {
  return (
    <div className='career-page'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default Career