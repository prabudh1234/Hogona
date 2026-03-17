import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Data } from "../Main/Main";
import "./destinationdetails.css";
import { 
  HiOutlineLocationMarker, 
  HiOutlineClock, 
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiChevronLeft,
  HiChevronRight
} from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = Data.find((dest) => dest.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  if (!destination) {
    return (
      <div className="not-found">
        <h2>Destination not found</h2>
        <button onClick={() => navigate("/packages")} className="btn">
          Go Back to Packages
        </button>
      </div>
    );
  }

  const {
    destTitle,
    location,
    grade,
    fees,
    description,
    duration,
    groupSize,
    images,
    itinerary,
    costBreakdown,
    included,
    excluded,
  } = destination;

  const totalCost = Object.values(costBreakdown).reduce((a, b) => a + b, 0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="destination-details">
      {/* Hero Section with Carousel */}
      <div className="hero-section" data-aos="fade-in">
        <div className="image-carousel">
          <img 
            src={images[currentImageIndex]} 
            alt={`${destTitle} ${currentImageIndex + 1}`}
            className="carousel-image"
          />
          <button className="carousel-btn prev" onClick={prevImage}>
            <HiChevronLeft />
          </button>
          <button className="carousel-btn next" onClick={nextImage}>
            <HiChevronRight />
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">{destTitle}</h1>
          <div className="hero-info">
            <span className="hero-location">
              <HiOutlineLocationMarker /> {location}
            </span>
            <span className="hero-grade">{grade}</span>
          </div>
        </div>
      </div>

      <div className="details-container">
        {/* Quick Info */}
        <div className="quick-info" data-aos="fade-up">
          <div className="info-card">
            <HiOutlineClock className="info-icon" />
            <div>
              <p className="info-label">Duration</p>
              <p className="info-value">{duration}</p>
            </div>
          </div>
          <div className="info-card">
            <HiOutlineUserGroup className="info-icon" />
            <div>
              <p className="info-label">Group Size</p>
              <p className="info-value">{groupSize}</p>
            </div>
          </div>
          <div className="info-card">
            <FaMoneyBillWave className="info-icon" />
            <div>
              <p className="info-label">Price</p>
              <p className="info-value">NPR {fees}</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="section-block" data-aos="fade-up">
          <h2 className="section-title">Overview</h2>
          <p className="overview-text">{description}</p>
        </section>

        {/* Itinerary */}
        <section className="section-block" data-aos="fade-up">
          <h2 className="section-title">Detailed Itinerary</h2>
          <div className="itinerary-container">
            {itinerary.map((day, index) => (
              <div key={index} className="itinerary-day">
                <div className="day-header">
                  <span className="day-number">Day {day.day}</span>
                  <h3 className="day-title">{day.title}</h3>
                </div>
                <div className="day-details">
                  <div className="time-block">
                    <h4>🌅 Morning</h4>
                    <p>{day.morning}</p>
                  </div>
                  <div className="time-block">
                    <h4>☀️ Afternoon</h4>
                    <p>{day.afternoon}</p>
                  </div>
                  <div className="time-block">
                    <h4>🌆 Evening</h4>
                    <p>{day.evening}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="section-block" data-aos="fade-up">
          <h2 className="section-title">Cost Breakdown</h2>
          <div className="cost-breakdown">
            {Object.entries(costBreakdown).map(([key, value]) => (
              <div key={key} className="cost-item">
                <span className="cost-label">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </span>
                <span className="cost-value">NPR {value.toLocaleString()}</span>
              </div>
            ))}
            <div className="cost-item total">
              <span className="cost-label">Total Cost</span>
              <span className="cost-value">NPR {totalCost.toLocaleString()}</span>
            </div>
          </div>
        </section>

        {/* What's Included/Excluded */}
        <section className="section-block inclusions" data-aos="fade-up">
          <div className="inclusion-column">
            <h3 className="inclusion-title included">
              <HiOutlineCheckCircle /> What's Included
            </h3>
            <ul className="inclusion-list">
              {included.map((item, index) => (
                <li key={index}>
                  <HiOutlineCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="inclusion-column">
            <h3 className="inclusion-title excluded">
              <HiOutlineXCircle /> What's Not Included
            </h3>
            <ul className="inclusion-list">
              {excluded.map((item, index) => (
                <li key={index}>
                  <HiOutlineXCircle className="cross-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Section */}
        <section className="booking-section" data-aos="fade-up">
          <div className="booking-card">
            <h2>Ready to Book?</h2>
            <p>Start your adventure to {destTitle} today!</p>
            <div className="booking-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate("/signup")}
              >
                Book Now - NPR {fees}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetails;