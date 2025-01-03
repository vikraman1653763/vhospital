import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiCaduceus } from "react-icons/gi";

const serverUrl = 'https://www.vhospitals.com:8443'; 
// const serverUrl = 'http://localhost:8080';

const Section4 = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enquiryData = { companyName, email, phoneNumber, message };

    try {
      const response = await fetch(`${serverUrl}/api/enquiry`, {
        method: 'POST',
        body: JSON.stringify(enquiryData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || 'Failed to submit enquiry');
        return;
      }

      // Reset form and navigate to success page
      setCompanyName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setError(null);
      navigate('/success');
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="contact-sec-4">
      <div className="contact-sec-4-container">
      
        <GiCaduceus className='ribbon-icon' />
      
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact-sec-4-heading">Get In Touch</div>

          {error && <div className="error-message">{error}</div>}

          <div className="contact-form-box">
            <label htmlFor="companyname">Company name</label>
            <input
              type="text"
              name="companyname"
              id="companyname"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-box">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Section4;
