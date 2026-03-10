import React, { useEffect, useState } from "react";
import "./Hotels.css";
import {
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineWifi,
  HiOutlineCake,
} from "react-icons/hi";
import {
  FaParking,
  FaSwimmingPool,
  FaConciergeBell,
  FaDumbbell,
  FaUtensils,
  FaSpa,
  FaWifi,
  FaSnowflake,
} from "react-icons/fa";
import { MdRestaurant, MdLocalLaundryService, MdRoomService } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

// Hotels Data
const hotelsData = [
  {
    id: 1,
    name: "The Grand Palace Hotel",
    location: "Bangalore",
    city: "Bangalore",
    rating: 4.5,
    reviews: 234,
    price: 3500,
    image: "https://images.unsplash.com/photo-1566073171259-6a40f3cc3c7a?w=800",
    type: "Luxury",
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Gym", "Spa"],
    description: "Experience luxury at its finest with world-class amenities and exceptional service."
  },
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
    amenities: ["WiFi", "Pool", "Beach Access", "Restaurant", "Spa", "Room Service"],
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
    amenities: ["WiFi", "Concierge", "Restaurant", "Bar", "Gym", "Business Center"],
    description: "Premium business hotel in the heart of Mumbai's financial district."
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
    amenities: ["WiFi", "Parking", "Restaurant", "Fireplace", "Mountain View"],
    description: "Cozy mountain retreat with breathtaking Himalayan views."
  },
  {
    id: 5,
    name: "Lakeview Heritage Hotel",
    location: "Udaipur",
    city: "Udaipur",
    rating: 4.6,
    reviews: 298,
    price: 4200,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    type: "Heritage",
    amenities: ["WiFi", "Lake View", "Restaurant", "Cultural Events", "Spa"],
    description: "Royal heritage hotel overlooking the beautiful Lake Pichola."
  },
  {
    id: 6,
    name: "City Central Hotel",
    location: "Delhi",
    city: "Delhi",
    rating: 4.2,
    reviews: 512,
    price: 3200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    type: "Business Hotel",
    amenities: ["WiFi", "Parking", "Restaurant", "Conference Room", "Gym"],
    description: "Modern hotel in central Delhi, perfect for business travelers."
  },
  {
    id: 7,
    name: "Backwater Villa Resort",
    location: "Kerala",
    city: "Alappuzha",
    rating: 4.7,
    reviews: 223,
    price: 4800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    type: "Resort",
    amenities: ["WiFi", "Pool", "Houseboat", "Restaurant", "Spa", "Ayurveda"],
    description: "Tranquil resort nestled in Kerala's famous backwaters."
  },
  {
    id: 8,
    name: "Desert Oasis Hotel",
    location: "Jaisalmer",
    city: "Jaisalmer",
    rating: 4.4,
    reviews: 189,
    price: 3800,
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
    type: "Heritage",
    amenities: ["WiFi", "Desert Safari", "Restaurant", "Cultural Shows", "Rooftop"],
    description: "Experience the golden sands with authentic Rajasthani hospitality."
  },
  {
    id: 9,
    name: "Himalayan Retreat",
    location: "Shimla",
    city: "Shimla",
    rating: 4.5,
    reviews: 276,
    price: 3600,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    type: "Hill Station",
    amenities: ["WiFi", "Parking", "Restaurant", "Bonfire", "Valley View"],
    description: "Colonial-era charm meets modern comfort in the hills."
  },
  {
    id: 10,
    name: "Beach Paradise Resort",
    location: "Goa",
    city: "Goa",
    rating: 4.6,
    reviews: 401,
    price: 4500,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    type: "Beach Resort",
    amenities: ["WiFi", "Pool", "Beach Access", "Water Sports", "Restaurant", "Bar"],
    description: "Ultimate beach getaway with water sports and nightlife."
  },
  {
    id: 11,
    name: "Royal Palace Hotel",
    location: "Jaipur",
    city: "Jaipur",
    rating: 4.8,
    reviews: 345,
    price: 5200,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    type: "Heritage",
    amenities: ["WiFi", "Pool", "Restaurant", "Palace Tours", "Spa", "Cultural Events"],
    description: "Live like royalty in this restored Rajput palace."
  },
  {
    id: 12,
    name: "Coffee Estate Resort",
    location: "Coorg",
    city: "Coorg",
    rating: 4.4,
    reviews: 198,
    price: 3400,
    image: "https://images.unsplash.com/photo-1566073271207-4a0b98b85d5a?w=800",
    type: "Nature Resort",
    amenities: ["WiFi", "Coffee Tours", "Restaurant", "Nature Walks", "Bonfire"],
    description: "Immerse yourself in lush coffee plantations and nature."
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
    Aos.init({ duration: 1200 });
  }, []);

  // Filter hotels
  useEffect(() => {
    let results = hotelsData;

    // Search filter
    if (searchTerm) {
      results = results.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // City filter
    if (selectedCity !== "all") {
      results = results.filter((hotel) => hotel.city === selectedCity);
    }

    // Type filter
    if (selectedType !== "all") {
      results = results.filter((hotel) => hotel.type === selectedType);
    }

    // Price range filter
    if (priceRange !== "all") {
      if (priceRange === "budget") {
        results = results.filter((hotel) => hotel.price < 3000);
      } else if (priceRange === "mid") {
        results = results.filter((hotel) => hotel.price >= 3000 && hotel.price < 5000);
      } else if (priceRange === "luxury") {
        results = results.filter((hotel) => hotel.price >= 5000);
      }
    }

    // Sort
    if (sortBy === "price-low") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      results = [...results].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results = [...results].sort((a, b) => b.rating - a.rating);
    }

    setFilteredHotels(results);
  }, [searchTerm, selectedCity, selectedType, priceRange, sortBy]);

  // Get unique cities and types
  const cities = ["all", ...new Set(hotelsData.map((hotel) => hotel.city))];
  const types = ["all", ...new Set(hotelsData.map((hotel) => hotel.type))];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<HiOutlineStar key={i} className="star filled" />);
    }
    if (hasHalfStar) {
      stars.push(<HiOutlineStar key="half" className="star half" />);
    }
    return stars;
  };

  return (
    <section className="hotels-section">
      <div className="hotels-container">
        {/* Hero Section */}
        <div className="hotels-hero" data-aos="fade-down">
          <h1>Find Your Perfect Stay</h1>
          <p>Discover the best hotels for your next adventure</p>
        </div>

        {/* Search and Filters */}
        <div className="hotels-controls" data-aos="fade-up">
          {/* Search Bar */}
          <div className="search-bar-large">
            <HiOutlineSearch className="search-icon-large" />
            <input
              type="text"
              placeholder="Search by hotel name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-large"
            />
          </div>

          {/* Filters Row */}
          <div className="filters-row">
            <div className="filter-item">
              <label>City</label>
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "all" ? "All Cities" : city}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label>Type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label>Price Range</label>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="budget">Budget (&lt; ₹3000)</option>
                <option value="mid">Mid-Range (₹3000-5000)</option>
                <option value="luxury">Luxury (₹5000+)</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count" data-aos="fade-up">
          <p>Showing {filteredHotels.length} of {hotelsData.length} hotels</p>
        </div>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="hotels-grid">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card" data-aos="fade-up">
                <div className="hotel-image-container">
                  <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                  <div className="hotel-badge">{hotel.type}</div>
                </div>

                <div className="hotel-content">
                  <h3 className="hotel-name">{hotel.name}</h3>

                  <div className="hotel-location">
                    <HiOutlineLocationMarker />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="hotel-rating">
                    <div className="stars">{renderStars(hotel.rating)}</div>
                    <span className="rating-text">
                      {hotel.rating} ({hotel.reviews} reviews)
                    </span>
                  </div>

                  <p className="hotel-description">{hotel.description}</p>

                  <div className="hotel-amenities">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="amenity-tag">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="amenity-tag more">+{hotel.amenities.length - 4}</span>
                    )}
                  </div>

                  <div className="hotel-footer">
                    <div className="hotel-price">
                      <span className="price-label">Starting from</span>
                      <span className="price-amount">₹{hotel.price.toLocaleString()}</span>
                      <span className="price-unit">/night</span>
                    </div>
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results" data-aos="fade-up">
            <HiOutlineSearch className="no-results-icon" />
            <h3>No hotels found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hotels;