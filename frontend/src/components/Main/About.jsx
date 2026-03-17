import React, { useEffect } from "react";
import "./About.css";
import founderImage from "../../Assets/PRABUDH_PHOTO.jpeg";
import { 
  HiOutlineLocationMarker, 
  HiOutlineMail, 
  HiOutlinePhone,
  HiOutlineGlobe,
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
        {/* Hero Section */}
        <div className="about-hero" data-aos="fade-down">
          <h1>About Hogona</h1>
          <p>Your trusted travel partner for unforgettable journeys</p>
        </div>

        {/* Company Story */}
        <div className="company-story" data-aos="fade-up">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Hogona was founded with a simple yet powerful vision: to make travel 
              accessible, enjoyable, and memorable for everyone. We believe that 
              exploring new destinations, experiencing different cultures, and 
              creating lasting memories should be within everyone's reach.
            </p>
            <p>
              From humble beginnings, we've grown into a trusted name in the travel 
              industry, serving thousands of satisfied customers who've explored the 
              world with us. Our commitment to excellence, personalized service, and 
              attention to detail sets us apart.
            </p>
          </div>
        </div>

        {/* Founder Section */}
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
                  <a href="#" aria-label="LinkedIn" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="Twitter" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/itz_prabu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="social-icon">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="founder-info">
              <h3>Prabudh N</h3>
              <p className="founder-title">Founder & CEO</p>
              
              <div className="founder-bio">
                <p>
                  Prabudh N is the visionary founder behind Hogona. With a deep 
                  passion for travel and a commitment to exceptional customer service, 
                  he established Hogona to revolutionize the way people experience 
                  travel.
                </p>
                <p>
                  His extensive experience in the tourism industry, combined with 
                  an entrepreneurial spirit, has shaped Hogona into a customer-centric 
                  travel company that prioritizes authenticity, quality, and memorable 
                  experiences.
                </p>
                <p>
                  Under his leadership, Hogona has expanded its offerings to include 
                  destinations across India and beyond, always maintaining the core 
                  values of integrity, innovation, and customer satisfaction.
                </p>
              </div>

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

        {/* Mission & Vision */}
        <div className="mission-vision" data-aos="fade-up">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide exceptional travel experiences that inspire, educate, 
              and create lasting memories, while maintaining the highest standards 
              of service and customer satisfaction.
            </p>
          </div>

          <div className="vision-card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To be India's most trusted and innovative travel company, known for 
              curating authentic experiences that connect travelers with the beauty, 
              culture, and diversity of destinations worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values" data-aos="fade-up">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Trust</h4>
              <p>Building lasting relationships through transparency and reliability</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>Delivering superior quality in every aspect of our service</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Constantly evolving to meet changing travel needs</p>
            </div>

            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h4>Passion</h4>
              <p>Driven by love for travel and customer satisfaction</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h4>Sustainability</h4>
              <p>Committed to responsible and eco-friendly travel practices</p>
            </div>

            <div className="value-card">
              <div className="value-icon">👥</div>
              <h4>Community</h4>
              <p>Supporting local communities and authentic cultural experiences</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section" data-aos="fade-up">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Destinations</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Tour Packages</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose" data-aos="fade-up">
          <h2 className="section-title">Why Choose Hogona?</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h4>Expert Guidance</h4>
              <p>Professional travel consultants to help plan your perfect trip</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h4>Best Prices</h4>
              <p>Competitive rates with transparent pricing and no hidden costs</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock assistance whenever you need us</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h4>Curated Experiences</h4>
              <p>Handpicked destinations and authentic local experiences</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">05</div>
              <h4>Safety First</h4>
              <p>Your safety and security are our top priorities</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">06</div>
              <h4>Customization</h4>
              <p>Flexible packages tailored to your preferences and budget</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
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