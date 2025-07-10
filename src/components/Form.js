import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;