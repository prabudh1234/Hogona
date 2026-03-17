import React, { useEffect, useState } from "react";
import "./Hotels.css";

import {
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineStar
} from "react-icons/hi";

import {
  FaParking,
  FaSwimmingPool,
  FaDumbbell,
  FaUtensils,
  FaSpa,
  FaWifi
} from "react-icons/fa";

import { MdRoomService } from "react-icons/md";

import Aos from "aos";
import "aos/dist/aos.css";

// Hotels Data
const hotelsData = [
  {
    id: 2,
    name: "Taj Gateway Resort",
    location: "Goa",
    city: "Goa",
    rating: 4.8,
    reviews: 456,
    price: 5500,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    type: "Resort",
    amenities: ["WiFi", "Pool", "Restaurant", "Spa", "Room Service"],
    description: "Beachfront paradise with stunning ocean views and premium facilities."
  },
  {
    id: 3,
    name: "Oberoi Heights",
    location: "Mumbai",
    city: "Mumbai",
    rating: 4.7,
    reviews: 389,
    price: 6500,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    type: "Luxury",
    amenities: ["WiFi", "Restaurant", "Gym"],
    description: "Premium business hotel in Mumbai."
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    location: "Manali",
    city: "Manali",
    rating: 4.3,
    reviews: 167,
    price: 2800,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    type: "Mountain Resort",
    amenities: ["WiFi", "Parking", "Restaurant"],
    description: "Cozy mountain retreat with Himalayan views."
  },
  {
    id: 1,
    name: "The Grand Palace Hotel",
    location: "Bangalore",
    city: "Bangalore",
    rating: 4.5,
    reviews: 234,
    price: 3500,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    type: "Luxury",
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym", "Spa"],
    description: "Luxury hotel with world-class amenities."
  }
];

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Filter Logic
  useEffect(() => {
    let results = hotelsData;

    if (searchTerm) {
      results = results.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCity !== "all") {
      results = results.filter((hotel) => hotel.city === selectedCity);
    }

    if (selectedType !== "all") {
      results = results.filter((hotel) => hotel.type === selectedType);
    }

    if (priceRange !== "all") {
      if (priceRange === "budget") {
        results = results.filter((hotel) => hotel.price < 3000);
      } else if (priceRange === "mid") {
        results = results.filter((hotel) => hotel.price >= 3000 && hotel.price < 5000);
      } else if (priceRange === "luxury") {
        results = results.filter((hotel) => hotel.price >= 5000);
      }
    }

    if (sortBy === "price-low") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      results = [...results].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results = [...results].sort((a, b) => b.rating - a.rating);
    }

    setFilteredHotels(results);
  }, [searchTerm, selectedCity, selectedType, priceRange, sortBy]);

  const cities = ["all", ...new Set(hotelsData.map((h) => h.city))];
  const types = ["all", ...new Set(hotelsData.map((h) => h.type))];

  const renderStars = (rating) => {
    return [...Array(Math.floor(rating))].map((_, i) => (
      <HiOutlineStar key={i} className="star filled" />
    ));
  };

  // ✅ Amenity Icons
  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "WiFi":
        return <FaWifi />;
      case "Pool":
        return <FaSwimmingPool />;
      case "Parking":
        return <FaParking />;
      case "Restaurant":
        return <FaUtensils />;
      case "Spa":
        return <FaSpa />;
      case "Gym":
        return <FaDumbbell />;
      case "Room Service":
        return <MdRoomService />;
      default:
        return null;
    }
  };

  return (
    <section className="hotels-section">
      <div className="hotels-container">

        <div className="hotels-hero">
          <h1>Find Your Perfect Stay</h1>
        </div>

        <div className="search-bar-large">
          <HiOutlineSearch />
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters-row">
          <select onChange={(e) => setSelectedCity(e.target.value)}>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>

          <select onChange={(e) => setSelectedType(e.target.value)}>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>

          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option value="all">All</option>
            <option value="budget">Budget</option>
            <option value="mid">Mid</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div className="hotels-grid">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">

              <img src={hotel.image} alt={hotel.name} />

              <h3>{hotel.name}</h3>

              <p><HiOutlineLocationMarker /> {hotel.location}</p>

              <div className="stars">{renderStars(hotel.rating)}</div>

              <p>{hotel.description}</p>

              <div className="hotel-amenities">
                {hotel.amenities.map((a, i) => (
                  <span key={i} className="amenity-tag">
                    {getAmenityIcon(a)} {a}
                  </span>
                ))}
              </div>

              <h4>₹{hotel.price}</h4>

              <button className="btn-book">Book Now</button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hotels;