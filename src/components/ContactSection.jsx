import React, { useState } from 'react';
import '../App.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    console.log(formData); //Printer på consolen
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact-section">
      <h2 className="sub-titles">Contact me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <h4>Name:</h4>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </label>

        <label>
          <h4>Email:</h4>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>

        <hr />

        <label>
          <h4>Message:</h4>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
