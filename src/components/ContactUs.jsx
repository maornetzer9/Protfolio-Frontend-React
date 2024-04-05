import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import "../layout/contactUs.css"; // Import the CSS file

export default function ContactUs({ scrollToTop = () => {} }) {
    return (
        <div className="contactContainer">
            <h2>Get In Touch</h2>
            <div className="inputGroup">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
            </div>
            <textarea
                className="textarea"
                placeholder="Enter your message..."
            />
            <button>Send Message</button>
            <div className="footerContainer">
                <a
                    href="http://linkedin.com/in/maor-netzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkButton"
                >
                    <BiLogoLinkedin size={20} />
                </a>
                <div style={{ margin: "50px" }}>
                    <button onClick={scrollToTop}>Scroll To Top</button>
                </div>
            </div>
        </div>
    );
}
