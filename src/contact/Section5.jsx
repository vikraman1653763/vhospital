import React from 'react';
import { SiWhatsapp } from "react-icons/si";

const WhatsAppButton = ({ phoneNumber = "+919841275552", message = "" }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
  
  return (
    <div className="whatsapp-section">
      {/* Title */}
      <h2 className="whatsapp-title">Need Assistance? Contact Us!</h2>

      {/* Description */}
      <p className="whatsapp-description">
        Have questions or need help? Chat with us on WhatsApp and get instant support!
      </p>

      {/* WhatsApp Button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <SiWhatsapp/>Chat on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;
