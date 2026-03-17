import React, { useEffect } from "react";
import "./About.css";
import founderImage from "../../Assets/PRABUDH_PHOTO.jpeg";

import { 
  HiOutlineMail, 
  HiOutlinePhone
} from "react-icons/hi";

import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram 
} from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Hero */}
        <div className="about-hero" data-aos="fade-down">
          <h1>About Hogona</h1>
          <p>Your trusted travel partner for unforgettable journeys</p>
        </div>

        {/* Story */}
        <div className="company-story" data-aos="fade-up">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Hogona was founded to make travel accessible and memorable for everyone.
            </p>
            <p>
              We’ve grown into a trusted travel brand serving thousands of happy travelers.
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="founder-section" data-aos="fade-up">
          <h2 className="section-title">Meet Our Founder</h2>

          <div className="founder-card">
            <div className="founder-image-container">
              <img
                src={founderImage}
                alt="Prabudh N - Founder of Hogona"
                className="founder-image"
              />

              <div className="founder-overlay">
                <div className="social-links">

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>

                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>

                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                  </a>

                  <a href="https://www.instagram.com/itz_prabu" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                  </a>

                </div>
              </div>
            </div>

            <div className="founder-info">
              <h3>Prabudh N</h3>
              <p className="founder-title">Founder & CEO</p>

              <p>
                Passionate about travel and innovation, he built Hogona to create unforgettable experiences.
              </p>

              <div className="founder-contact">
                <div className="contact-item">
                  <HiOutlineMail className="contact-icon" />
                  <span>prabudh@hogona.com</span>
                </div>

                <div className="contact-item">
                  <HiOutlinePhone className="contact-icon" />
                  <span>+91 7676622640</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section" data-aos="fade-up">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let us help you create unforgettable travel memories</p>

          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
              Get in Touch
            </button>

            <button className="btn-secondary" onClick={() => window.location.href = '/offers'}>
              Explore Packages
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;