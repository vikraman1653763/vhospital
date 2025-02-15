import React from 'react'
import '../style/contact.css';
import Section1 from '../contact/Section1';
import Section2 from '../contact/Section2';
import Section3 from '../contact/Section3';
import Section4 from '../contact/Section4';
import Section5 from '../contact/Section5';

function Contact() {
  return (
    <div className='contact-page'>
      <Section1/>
       <Section2/> 
     <Section3/>
      {/* <Section4/> */}
      <Section5/>
    </div>
  )
}

export default Contact
