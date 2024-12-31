import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="contact-sec-2">
      <h2 data-aos="fade-down">Get in Touch with Us</h2>
      <div className="contact-sec-2-cards">
        <div className="contact-sec-2-card" data-aos="fade-right">
          <h3>Contact:</h3>
          <p>Phone: (91)-44-4511 1111 / (91)-44-4511 4511</p>
          <p>Fax: (91)-44-4210 1111</p>
        </div>
        <div className="contact-sec-2-card" data-aos="fade-right" >
          <h3>For Enquiry:</h3>
          <p>Mobile: +91-9841275552</p>
          <p>Whatsapp: +91-9841275552 (10 a.m. - 6 p.m.)</p>
        </div>
        <div className="contact-sec-2-card" data-aos="fade-left" >
          <h3>Location:</h3>
          <p>Address: No. 36 – A, Chamiers Road, Nandanam, Chennai – 600 035</p>
        </div>
        <div className="contact-sec-2-card" data-aos="fade-left" >
          <h3>Email:</h3>
          <p>info@vhospitals.com</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
