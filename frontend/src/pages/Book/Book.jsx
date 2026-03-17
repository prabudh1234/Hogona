import React from "react";
import { useLocation } from "react-router-dom";
import "./Book.css";

const Book = () => {

  const location = useLocation();
  const hotel = location.state;

  if (!hotel) {
    return <h2 className="no-hotel">No hotel selected</h2>;
  }

  return (
    <div className="book-container">

      <h1 className="book-title">Hotel Booking</h1>

      {/* HOTEL INFO */}

      <div className="book-card">

        <img
          className="hotel-image"
          src={hotel.image}
          alt={hotel.name}
        />

        <div className="book-info">

          <h2>{hotel.name}</h2>

          <p className="hotel-location">
            📍 {hotel.location}
          </p>

          <p className="price">
            ₹ {hotel.price} / night
          </p>

        </div>

      </div>

      {/* BOOKING FORM */}

      <form className="book-form">

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <label>Check-in Date</label>
        <input type="date" required />

        <label>Check-out Date</label>
        <input type="date" required />

        <label>Guests</label>
        <input type="number" min="1" max="10" />

        <button className="confirm-btn" type="submit">
          Confirm Booking
        </button>

      </form>

    </div>
  );
};

export default Book;