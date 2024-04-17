import React from 'react';
import { BiLogoWhatsapp } from "react-icons/bi";
import './whatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '972546605111'; 
  const message = encodeURIComponent("I'm interested in your services"); 

  const handleClick = () => window.open(`https://wa.me/${phoneNumber}?text=${message}`);

  return (
    <BiLogoWhatsapp 
        size={50} 
        onClick={handleClick}
        className='whatsapp-button'
    />
  );
}

export default WhatsAppButton;
