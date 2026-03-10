import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineEye,
  HiOutlineDownload,
} from "react-icons/hi";
import { Data } from "./Main";
import Aos from "aos";
import "aos/dist/aos.css";

const Booking = () => {
  const navigate = useNavigate();
  
  // Sample bookings data - In real app, fetch from backend/API
  const [bookings] = useState([
    {
      id: 1,
      bookingReference: "BK12345678",
      destinationId: 1,
      status: "confirmed", // confirmed, completed, cancelled, pending
      travelDate: "2026-03-15",
      numberOfTravelers: 2,
      totalAmount: 10000,
      bookedOn: "2026-02-01",
      customerInfo: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+977 9812345678",
      },
      paymentStatus: "paid", // paid, pending, partial
      paymentMethod: "full",
    },
    {
      id: 2,
      bookingReference: "BK87654321",
      destinationId: 7,
      status: "completed",
      travelDate: "2026-01-20",
      numberOfTravelers: 4,
      totalAmount: 276000,
      bookedOn: "2025-12-15",
      customerInfo: {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+977 9823456789",
      },
      paymentStatus: "paid",
      paymentMethod: "advance",
    },
    {
      id: 3,
      bookingReference: "BK11223344",
      destinationId: 9,
      status: "pending",
      travelDate: "2026-04-10",
      numberOfTravelers: 3,
      totalAmount: 17997,
      bookedOn: "2026-02-05",
      customerInfo: {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+977 9834567890",
      },
      paymentStatus: "pending",
      paymentMethod: "advance",
    },
    {
      id: 4,
      bookingReference: "BK99887766",
      destinationId: 8,
      status: "confirmed",
      travelDate: "2026-05-01",
      numberOfTravelers: 2,
      totalAmount: 13800,
      bookedOn: "2026-02-07",
      customerInfo: {
        name: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "+977 9845678901",
      },
      paymentStatus: "paid",
      paymentMethod: "full",
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all"); // all, confirmed, completed, cancelled, pending

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Get destination details by ID
  const getDestination = (destinationId) => {
    return Data.find((dest) => dest.id === destinationId);
  };

  // Filter bookings by status
  const filteredBookings = bookings.filter((booking) => {
    if (filterStatus === "all") return true;
    return booking.status === filterStatus;
  });

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "completed":
        return "status-completed";
      case "cancelled":
        return "status-cancelled";
      case "pending":
        return "status-pending";
      default:
        return "";
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <HiOutlineCheckCircle />;
      case "completed":
        return <HiOutlineCheckCircle />;
      case "cancelled":
        return <HiOutlineXCircle />;
      case "pending":
        return <HiOutlineClock />;
      default:
        return null;
    }
  };

  // View booking details
  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close booking details
  const closeDetails = () => {
    setSelectedBooking(null);
  };

  // Print booking
  const printBooking = () => {
    window.print();
  };

  // Download booking (placeholder)
  const downloadBooking = () => {
    alert("Download functionality - Connect to your backend to generate PDF");
  };

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <div className="bookings-hero" data-aos="fade-in">
        <div className="hero-overlay">
          <h1>My Bookings</h1>
          <p>View and manage all your travel bookings</p>
        </div>
      </div>

      <div className="bookings-container">
        {/* Booking Details View */}
        {selectedBooking ? (
          <div className="booking-details-view" data-aos="fade-up">
            <button className="back-button" onClick={closeDetails}>
              ← Back to All Bookings
            </button>

            <div className="booking-details-card">
              {/* Header */}
              <div className="details-header">
                <div className="header-left">
                  <h2>Booking Details</h2>
                  <p className="reference-number">
                    Reference: {selectedBooking.bookingReference}
                  </p>
                </div>
                <div className="header-right">
                  <span className={`status-badge-large ${getStatusColor(selectedBooking.status)}`}>
                    {getStatusIcon(selectedBooking.status)}
                    {selectedBooking.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Destination Info */}
              {(() => {
                const destination = getDestination(selectedBooking.destinationId);
                return (
                  <div className="destination-details-section">
                    <div className="destination-image-wrapper">
                      <img src={destination.imgSrc} alt={destination.destTitle} />
                      <div className="destination-overlay">
                        <h3>{destination.destTitle}</h3>
                        <p>
                          <HiOutlineLocationMarker />
                          {destination.location}
                        </p>
                      </div>
                    </div>

                    <div className="trip-info-grid">
                      <div className="info-item">
                        <HiOutlineCalendar className="info-icon" />
                        <div>
                          <span className="info-label">Travel Date</span>
                          <strong className="info-value">
                            {new Date(selectedBooking.travelDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </strong>
                        </div>
                      </div>

                      <div className="info-item">
                        <HiOutlineUsers className="info-icon" />
                        <div>
                          <span className="info-label">Travelers</span>
                          <strong className="info-value">
                            {selectedBooking.numberOfTravelers} {selectedBooking.numberOfTravelers === 1 ? 'Person' : 'People'}
                          </strong>
                        </div>
                      </div>

                      <div className="info-item">
                        <HiOutlineClock className="info-icon" />
                        <div>
                          <span className="info-label">Duration</span>
                          <strong className="info-value">{destination.duration}</strong>
                        </div>
                      </div>

                      <div className="info-item">
                        <HiOutlineDocumentText className="info-icon" />
                        <div>
                          <span className="info-label">Grade</span>
                          <strong className="info-value">{destination.grade}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Customer Information */}
              <div className="details-section">
                <h3>Customer Information</h3>
                <div className="customer-info-grid">
                  <div className="customer-detail">
                    <span className="detail-label">Full Name:</span>
                    <span className="detail-value">{selectedBooking.customerInfo.name}</span>
                  </div>
                  <div className="customer-detail">
                    <HiOutlineMail className="detail-icon" />
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{selectedBooking.customerInfo.email}</span>
                  </div>
                  <div className="customer-detail">
                    <HiOutlinePhone className="detail-icon" />
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{selectedBooking.customerInfo.phone}</span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="details-section">
                <h3>Payment Information</h3>
                <div className="payment-details-grid">
                  <div className="payment-row">
                    <span>Total Amount:</span>
                    <strong>₹ {selectedBooking.totalAmount.toLocaleString()}</strong>
                  </div>
                  <div className="payment-row">
                    <span>Payment Method:</span>
                    <strong>{selectedBooking.paymentMethod === 'full' ? 'Full Payment' : '30% Advance'}</strong>
                  </div>
                  <div className="payment-row">
                    <span>Payment Status:</span>
                    <span className={`payment-badge ${selectedBooking.paymentStatus === 'paid' ? 'paid' : 'pending'}`}>
                      {selectedBooking.paymentStatus.toUpperCase()}
                    </span>
                  </div>
                  {selectedBooking.paymentMethod === 'advance' && selectedBooking.paymentStatus === 'paid' && (
                    <>
                      <div className="payment-row">
                        <span>Amount Paid:</span>
                        <strong>₹ {(selectedBooking.totalAmount * 0.3).toLocaleString()}</strong>
                      </div>
                      <div className="payment-row highlight">
                        <span>Balance Due:</span>
                        <strong>₹ {(selectedBooking.totalAmount * 0.7).toLocaleString()}</strong>
                      </div>
                    </>
                  )}
                  <div className="payment-row">
                    <span>Booked On:</span>
                    <span>
                      {new Date(selectedBooking.bookedOn).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="booking-actions-details">
                <button className="btn-primary" onClick={printBooking}>
                  <HiOutlineDocumentText />
                  Print Booking
                </button>
                <button className="btn-secondary" onClick={downloadBooking}>
                  <HiOutlineDownload />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Bookings List View */
          <>
            {/* Filter Tabs */}
            <div className="filter-tabs" data-aos="fade-down">
              <button
                className={`filter-tab ${filterStatus === "all" ? "active" : ""}`}
                onClick={() => setFilterStatus("all")}
              >
                All Bookings ({bookings.length})
              </button>
              <button
                className={`filter-tab ${filterStatus === "confirmed" ? "active" : ""}`}
                onClick={() => setFilterStatus("confirmed")}
              >
                Confirmed ({bookings.filter(b => b.status === "confirmed").length})
              </button>
              <button
                className={`filter-tab ${filterStatus === "completed" ? "active" : ""}`}
                onClick={() => setFilterStatus("completed")}
              >
                Completed ({bookings.filter(b => b.status === "completed").length})
              </button>
              <button
                className={`filter-tab ${filterStatus === "pending" ? "active" : ""}`}
                onClick={() => setFilterStatus("pending")}
              >
                Pending ({bookings.filter(b => b.status === "pending").length})
              </button>
            </div>

            {/* Bookings Grid */}
            {filteredBookings.length === 0 ? (
              <div className="no-bookings" data-aos="fade-up">
                <HiOutlineRefresh className="no-bookings-icon" />
                <h3>No Bookings Found</h3>
                <p>You don't have any {filterStatus !== "all" ? filterStatus : ""} bookings yet.</p>
                <button className="btn-primary" onClick={() => navigate("/")}>
                  Explore Destinations
                </button>
              </div>
            ) : (
              <div className="bookings-grid" data-aos="fade-up">
                {filteredBookings.map((booking) => {
                  const destination = getDestination(booking.destinationId);
                  return (
                    <div key={booking.id} className="booking-card">
                      {/* Booking Image */}
                      <div className="booking-image">
                        <img src={destination.imgSrc} alt={destination.destTitle} />
                        <span className={`status-badge ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status}
                        </span>
                      </div>

                      {/* Booking Info */}
                      <div className="booking-info">
                        <h3 className="booking-title">{destination.destTitle}</h3>
                        <p className="booking-location">
                          <HiOutlineLocationMarker />
                          {destination.location}
                        </p>

                        <div className="booking-meta">
                          <div className="meta-item">
                            <HiOutlineCalendar />
                            <span>{new Date(booking.travelDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                          <div className="meta-item">
                            <HiOutlineUsers />
                            <span>{booking.numberOfTravelers} {booking.numberOfTravelers === 1 ? 'Person' : 'People'}</span>
                          </div>
                        </div>

                        <div className="booking-footer">
                          <div className="booking-price">
                            <span className="price-label">Total</span>
                            <span className="price-value">₹ {booking.totalAmount.toLocaleString()}</span>
                          </div>
                          <button
                            className="view-details-btn"
                            onClick={() => viewBookingDetails(booking)}
                          >
                            <HiOutlineEye />
                            View Details
                          </button>
                        </div>

                        <div className="booking-reference">
                          Ref: {booking.bookingReference}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;