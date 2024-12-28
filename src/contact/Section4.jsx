import React,{useEffect, useState} from 'react';
import {useNavigate}from 'react-router-dom';

const Section4 = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e)=>{
    //     e.preventDefault()
    //     setIsSubmitting(true);
    //     const enquiryData={companyName,email,phoneNumber,message}
      
    //     const response = await fetch(`${serverUrl}/api/enquiry`, { 
    //       method: 'POST',
    //       body: JSON.stringify(enquiryData),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    // );
        
        // const json = await response.json()
      
        // if(!response.ok){
        //   setError(json.error)
        // }
        // if(response.ok){
          
        //   setError(null)
        //   navigate('/success')
        //   setIsSubmitting(false)
        // }
      }
    return (
        <div className="contact-sec-4">
            <div className="contact-sec-4-container">
                  <form className="contact_form"
                        onSubmit={handleSubmit}
                        style={{ cursor: isSubmitting ? 'wait' : 'auto' }} >
                <div className="contact-sec-4-heading">Get In Touch</div>
        <div className='contact-form-box'>
          <label htmlFor="companyname">Company name</label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            value={companyName}
            disabled={isSubmitting}
            onChange={(e) => setCompanyName(e.target.value)}
            />
        </div>
          <div className='contact-form-box'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='contact-form-box'>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isSubmitting}
              />
          </div>
        <div className='contact-form-box'>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            />
        </div>
        <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}</button>
        {error && <div className="error">{error}</div>}
      </form>
          </div>
        </div>
    );
  };
  export default Section4;
  

  