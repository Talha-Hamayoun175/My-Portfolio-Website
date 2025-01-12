import React, { useState } from "react";
import { init, send } from "emailjs-com";
import "../styles/Contact.css";

// Initialize EmailJS with your User ID
init("kx_XYPrNXVa0nB2dQ");

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            setError("Please fill out all fields.");
            return;
        }

        setError("");

        // Send email via EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        send(
            "service_8w2hm3x", // Replace with your EmailJS service ID
            "template_qpj8cnd", // Replace with your EmailJS template ID
            templateParams
        )
        .then((response) => {
            setIsSent(true);
            console.log("Message sent successfully", response);
        })
        .catch((err) => {
            setError("Failed to send message. Please try again later.");
            console.error("Failed to send message", err);
        });
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            {error && <p className="error">{error}</p>}
            {isSent && <p className="success">Your message has been sent!</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
