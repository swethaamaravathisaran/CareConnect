// ContactPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css'; // Import your CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <Link to="/" className="back-button">Back</Link>
      <video autoPlay muted loop className="bg-video">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0482/large_preview/_import_62aad5c5abd6e9.44692960.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-info">
          If you have any questions, feedback, or suggestions, feel free to contact us using the form below or through our email address.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p className="contact-email">Email: careconnect@example.com</p>
      </div>
    </div>
  );
}

export default ContactPage;
