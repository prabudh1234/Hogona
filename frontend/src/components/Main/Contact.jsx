import React, { useState, useEffect } from "react";
import "./Contact.css";
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineClock 
} from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { HiOutlineCheckCircle } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero" data-aos="fade-in">
        <div className="hero-overlay">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Let's plan your next adventure together!</p>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-section" data-aos="fade-up">
          <div className="info-card-contact">
            <div className="icon-wrapper">
              <HiOutlineLocationMarker />
            </div>
            <h3>Visit Us</h3>
            <p>Kattigenahalli,Bengaluru</p>
            <p>Karnataka,560064</p>
          </div>

          <div className="info-card-contact">
            <div className="icon-wrapper">
              <HiOutlinePhone />
            </div>
            <h3>Call Us</h3>
            <p>+977 9812345678</p>
            <p>+977 01-4567890</p>
          </div>

          <div className="info-card-contact">
            <div className="icon-wrapper">
              <HiOutlineMail />
            </div>
            <h3>Email Us</h3>
            <p>info@hogona.com</p>
            <p>support@hogona.com</p>
          </div>

          <div className="info-card-contact">
            <div className="icon-wrapper">
              <HiOutlineClock />
            </div>
            <h3>Working Hours</h3>
            <p>Mon - Fri: 9AM - 6PM</p>
            <p>Sat - Sun: 10AM - 4PM</p>
          </div>
        </div>

        {/* Contact Form & Map Section */}
        <div className="contact-content-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section" data-aos="fade-right">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-subtitle">
              Have questions? Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitStatus === "success" && (
              <div className="success-message">
                <HiOutlineCheckCircle />
                <p>Thank you! Your message has been sent successfully. We'll contact you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Information</option>
                    <option value="customized">Customized Package</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="map-section" data-aos="fade-left">
            <h2 className="section-title">Find Us Here</h2>
            
            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe
                title="Hogona Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.635!3d13.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a123456789%3A0xabcdefabcdef!2sKattigenahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <p>Stay connected for travel tips, deals, and inspiration!</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/trip.hogona?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FaTwitter />
                </a>
                <a href="https://wa.me/9779812345678" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="quick-contact">
              <h3>Need Immediate Assistance?</h3>
              <p>Our team is available 24/7 for emergency support</p>
              <a href="tel:+9779812345678" className="emergency-btn">
                <HiOutlinePhone />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section" data-aos="fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I book a tour?</h4>
              <p>You can book a tour by clicking the "Book Now" button on any package page, or contact us directly via phone or email.</p>
            </div>
            <div className="faq-item">
              <h4>What is your cancellation policy?</h4>
              <p>Cancellations made 15+ days before departure receive full refund. 7-14 days: 50% refund. Less than 7 days: no refund.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer customized packages?</h4>
              <p>Yes! We specialize in creating personalized itineraries based on your preferences, budget, and schedule.</p>
            </div>
            <div className="faq-item">
              <h4>Are your tours suitable for families?</h4>
              <p>Absolutely! We offer family-friendly packages with activities suitable for all age groups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing import for success message icon


export default Contact;