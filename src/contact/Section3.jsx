import React from 'react';
import { GiNestedHexagons } from "react-icons/gi";

const Section3 = () => {
  return (
    <section className="contact-sec-3">
      <GiNestedHexagons className='design-icon-1'/>
      <h2>Our Location</h2>
      <div className="contact-sec-3__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0975853048426!2d80.24151337572373!3d13.02945731360587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1f0f26955%3A0xdaf15505e8cf3a8e!2sVenkataeswara%20Hospitals!5e0!3m2!1sen!2sin!4v1735390001421!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Section3;
