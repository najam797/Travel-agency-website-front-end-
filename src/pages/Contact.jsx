import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import companyImg from '../assets/img/company-img.jpg';

/* ── Sub-component: Company Address ── */
function CompanyAddress() {
  return (
    <div className="company-address">
      <div className="address-group">
        <i className="fas fa-map-marker-alt fa-3x text-red"></i>
        <h2 className="text-gray md-heading">Location</h2>
        <p>#2661 Janakpuri Colony, city name, town name</p>
      </div>
      <div className="address-group">
        <i className="far fa-envelope fa-3x text-red"></i>
        <h2 className="text-gray md-heading">Email</h2>
        <p>harshitvashisth@mycompany.com</p>
      </div>
      <div className="address-group">
        <i className="fas fa-phone-square-alt fa-3x text-red"></i>
        <h2 className="text-gray md-heading">Call</h2>
        <p>+910101010101</p>
      </div>
      <img src={companyImg} alt="Company" />
    </div>
  );
}

/* ── Sub-component: Contact Form ── */
function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ username: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="form">
      <h1 className="lg-heading text-black">Contact Us</h1>
      <p className="text-gray">
        Let us know your questions, suggestions and concerns by filling out the contact
        form below.
      </p>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="button" className="form-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

/* ── Contact Page ── */
function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <CompanyAddress />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
