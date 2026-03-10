import React, { useEffect, useState } from "react";
import "./Offers.css";
import { offersData } from "../../Data/offersData";
import { Data } from "../Main/Main"; // Import destinations data
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineSearch,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOffers, setFilteredOffers] = useState(offersData);
  const [filteredDestinations, setFilteredDestinations] = useState(Data);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [activeTab, setActiveTab] = useState("packages"); // 'packages' or 'destinations'

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  // Filter and search logic for offers
  useEffect(() => {
    let results = offersData;

    // Filter by location
    if (selectedLocation !== "all") {
      results = results.filter(
        (offer) => offer.location.toLowerCase() === selectedLocation.toLowerCase()
      );
    }

    // Search by title, location, or agency
    if (searchTerm) {
      results = results.filter(
        (offer) =>
          offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          offer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          offer.agency.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort offers
    if (sortBy === "price-low") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      results = [...results].sort((a, b) => b.price - a.price);
    } else if (sortBy === "duration") {
      results = [...results].sort((a, b) => {
        const daysA = parseInt(a.duration);
        const daysB = parseInt(b.duration);
        return daysB - daysA;
      });
    }

    setFilteredOffers(results);
  }, [searchTerm, selectedLocation, sortBy]);

  // Filter and search logic for destinations
  useEffect(() => {
    let results = Data;

    // Filter by location
    if (selectedLocation !== "all") {
      results = results.filter(
        (dest) => dest.location.toLowerCase() === selectedLocation.toLowerCase()
      );
    }

    // Search by title or location
    if (searchTerm) {
      results = results.filter(
        (dest) =>
          dest.destTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort destinations
    if (sortBy === "price-low") {
      results = [...results].sort((a, b) => parseInt(a.fees) - parseInt(b.fees));
    } else if (sortBy === "price-high") {
      results = [...results].sort((a, b) => parseInt(b.fees) - parseInt(a.fees));
    }

    setFilteredDestinations(results);
  }, [searchTerm, selectedLocation, sortBy]);

  // Get unique locations from both datasets
  const offersLocations = offersData.map((offer) => offer.location);
  const destinationsLocations = Data.map((dest) => dest.location);
  const allLocations = [...new Set([...offersLocations, ...destinationsLocations])];
  const locations = ["all", ...allLocations];

  const handleDetailsClick = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="offers-section">
      <div className="offers-container">
        {/* Page Header */}
        <div className="offers-title" data-aos="fade-down">
          <h2>Travel Packages & Destinations</h2>
        </div>

        {/* Tab Switcher */}
        <div className="offers-tabs" data-aos="fade-up">
          <button
            className={`tab-btn ${activeTab === "packages" ? "active" : ""}`}
            onClick={() => setActiveTab("packages")}
          >
            Travel Packages ({offersData.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "destinations" ? "active" : ""}`}
            onClick={() => setActiveTab("destinations")}
          >
            Most Visited Destinations ({Data.length})
          </button>
        </div>

        {/* Search and Filters */}
        <div className="offers-controls" data-aos="fade-up">
          {/* Search Box */}
          <div className="offers-search">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder={
                  activeTab === "packages"
                    ? "Search packages by destination or agency..."
                    : "Search destinations..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <HiOutlineSearch className="search-icon" />
            </div>
          </div>

          {/* Filters */}
          <div className="offers-filters">
            <div className="filter-group">
              <label className="filter-label">Location:</label>
              <select
                className="filter-select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === "all" ? "All Destinations" : location}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort By:</label>
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                {activeTab === "packages" && (
                  <option value="duration">Duration</option>
                )}
              </select>
            </div>
          </div>
        </div>

        {/* Travel Packages Grid */}
        {activeTab === "packages" && (
          <>
            {filteredOffers.length > 0 ? (
              <div className="offers-grid">
                {filteredOffers.map((offer) => (
                  <div
                    className="offer-card"
                    key={offer.id}
                    data-aos="fade-up"
                    data-aos-delay={offer.id * 50}
                  >
                    {/* Image Container */}
                    <div className="offer-image-container">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="offer-image"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="offer-content">
                      <h3 className="offer-title">{offer.title}</h3>
                      <p className="agency-name">{offer.agency}</p>

                      <div className="offer-location">
                        <HiOutlineLocationMarker />
                        <span>{offer.location}</span>
                      </div>

                      <div className="offer-quick-info">
                        <div className="info-item">
                          <HiOutlineClock />
                          <span>{offer.duration}</span>
                        </div>
                        <span className="info-separator"></span>
                        <div className="info-item">
                          <HiOutlineUserGroup />
                          <span>{offer.people}</span>
                        </div>
                      </div>

                      <div className="offer-price">
                        <FaMoneyBillWave />
                        <span>₹ {offer.price.toLocaleString()}</span>
                      </div>

                      <div className="offer-details">
                        <div className="detail-column includes">
                          <h4>Includes</h4>
                          <ul className="detail-list includes">
                            {offer.includes.map((item, index) => (
                              <li key={index}>
                                <HiOutlineCheckCircle />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="detail-column excludes">
                          <h4>Excludes</h4>
                          <ul className="detail-list excludes">
                            {offer.excludes.map((item, index) => (
                              <li key={index}>
                                <HiOutlineXCircle />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="offer-actions">
                        <button className="btn-view-details">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="offers-empty" data-aos="fade-up">
                <HiOutlineSearch />
                <h3>No packages found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </>
        )}

        {/* Most Visited Destinations Grid */}
        {activeTab === "destinations" && (
          <>
            {filteredDestinations.length > 0 ? (
              <div className="destinations-grid">
                {filteredDestinations.map(
                  ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                    <div
                      key={id}
                      data-aos="fade-up"
                      className="singleDestination"
                    >
                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>
                      <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                          <HiOutlineLocationMarker className="icon" />
                          <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>
                              {grade}
                              <small>+1</small>
                            </span>
                          </div>
                          <div className="price">
                            <h5>₹ {fees}</h5>
                          </div>
                        </div>
                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <button
                          className="btn flex"
                          onClick={() => handleDetailsClick(id)}
                        >
                          DETAILS <HiOutlineClipboardCheck className="icon" />
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="offers-empty" data-aos="fade-up">
                <HiOutlineSearch />
                <h3>No destinations found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </>
        )}

        {/* Results Count */}
        {((activeTab === "packages" && filteredOffers.length > 0) ||
          (activeTab === "destinations" && filteredDestinations.length > 0)) && (
          <div className="offers-results-info" data-aos="fade-up">
            <p>
              Showing{" "}
              {activeTab === "packages"
                ? filteredOffers.length
                : filteredDestinations.length}{" "}
              of{" "}
              {activeTab === "packages" ? offersData.length : Data.length}{" "}
              {activeTab === "packages" ? "package" : "destination"}
              {(activeTab === "packages"
                ? offersData.length
                : Data.length) !== 1
                ? "s"
                : ""}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offers;