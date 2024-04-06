import React, { useEffect, useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import "../layout/contactUs.css"; // Import the CSS file
import axios from 'axios';

export default function ContactUs({ scrollToTop = () => {} }) {

    const [contact, setContact] = useState({
        message: '',
        from: '',
        email: ''
    });

    const clearInputs = () => setContact({message: "", from: "", email: ""});
    const handleUserContact = ({target: {name, value}}) => setContact({...contact, [name]: value} );

    async function sendUserContact()
    {
        try
        {
            const request = "http://localhost:5050/email";
            const emailRegex = /\S+@\S+\.\S+/;
            const { message: userMessage, from, email } = contact;

            if ( !userMessage || !from || !email ) return alert('Missing required fields');
            if ( !emailRegex.test( contact.email ) ) return alert('Please enter a valid email address.');

            const response = await axios.post(request, contact);
            const { code, message } = response.data;
            
            if(code !== 200 ) return alert(message);
            
            alert(message);
            clearInputs();
        }
        catch(err) 
        {
            console.error(err);;
        }
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className="contactContainer">
            <h2>Get In Touch</h2>
            <div className="inputGroup">
                <input 
                    type="text" 
                    name="from" 
                    placeholder="Name" 
                    value={contact.from}
                    onChange={handleUserContact} 
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={contact.email}
                    onChange={handleUserContact} 
                />
            </div>
            <textarea
                value={contact.message}
                name="message"
                className="textarea"
                onChange={handleUserContact}
                placeholder="Enter your message..."
            />
            <button 
                onClick={sendUserContact}
                style={{padding: '10px 40px '}}
            >
                Send Message
            </button>
            <button onClick={scrollToTop}> 
                Scroll To Top
            </button>
            <div className="footerContainer">
                <a
                    href="http://linkedin.com/in/maor-netzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkButton"
                >
                    <BiLogoLinkedin size={20} />
                </a>
            </div>
        </div>
    );
}
