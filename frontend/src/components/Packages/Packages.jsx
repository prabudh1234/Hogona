import React, { useEffect, useState } from "react";
import "./Packages.css";
import { Data } from "../Main/Main"; // Import destinations data
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
  HiOutlineSearch,
  HiOutlineCalendar,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaFilter, FaPlane, FaHotel, FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  const navigate = useNavigate();
  
  // Filter States
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [durationRange, setDurationRange] = useState([1, 14]);
  const [flightFilter, setFlightFilter] = useState("all");
  const [budgetRange, setBudgetRange] = useState([1000, 10000]);
  const [selectedBudgetRanges, setSelectedBudgetRanges] = useState([]);
  const [hotelCategory, setHotelCategory] = useState([]);
  const [sortBy, setSortBy] = useState("popular");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  
  const [filteredPackages, setFilteredPackages] = useState(Data);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  // Filter packages
  useEffect(() => {
    let results = Data;

    // Search filter - From location
    if (searchFrom) {
      results = results.filter((pkg) =>
        pkg.location.toLowerCase().includes(searchFrom.toLowerCase())
      );
    }

    // Search filter - To location
    if (searchTo) {
      results = results.filter((pkg) =>
        pkg.destTitle.toLowerCase().includes(searchTo.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchTo.toLowerCase())
      );
    }

    // Duration filter (convert "X Day" to number)
    results = results.filter((pkg) => {
      const days = parseInt(pkg.duration) || 1;
      return days >= durationRange[0] && days <= durationRange[1];
    });

    // Budget filter - Selected ranges
    if (selectedBudgetRanges.length > 0) {
      results = results.filter((pkg) => {
        const price = parseInt(pkg.fees);
        return selectedBudgetRanges.some((range) => {
          if (range === "< ₹3,000") return price < 3000;
          if (range === "₹3,000 - ₹5,000") return price >= 3000 && price < 5000;
          if (range === "₹5,000 - ₹7,000") return price >= 5000 && price < 7000;
          if (range === "> ₹7,000") return price >= 7000;
          return false;
        });
      });
    }

    // Budget filter - Slider range
    results = results.filter((pkg) => {
      const price = parseInt(pkg.fees);
      return price >= budgetRange[0] && price <= budgetRange[1];
    });

    // Sort
    if (sortBy === "price-low") {
      results = [...results].sort((a, b) => parseInt(a.fees) - parseInt(b.fees));
    } else if (sortBy === "price-high") {
      results = [...results].sort((a, b) => parseInt(b.fees) - parseInt(a.fees));
    } else if (sortBy === "duration") {
      results = [...results].sort((a, b) => {
        const daysA = parseInt(a.duration) || 0;
        const daysB = parseInt(b.duration) || 0;
        return daysB - daysA;
      });
    }

    setFilteredPackages(results);
    updateActiveFilters();
  }, [searchFrom, searchTo, durationRange, flightFilter, budgetRange, selectedBudgetRanges, hotelCategory, sortBy]);

  const updateActiveFilters = () => {
    const filters = [];
    if (searchFrom) filters.push({ label: `From: ${searchFrom}`, key: "from" });
    if (searchTo) filters.push({ label: `To: ${searchTo}`, key: "to" });
    if (durationRange[0] !== 1 || durationRange[1] !== 14) {
      filters.push({ label: `${durationRange[0]}-${durationRange[1]} Nights`, key: "duration" });
    }
    selectedBudgetRanges.forEach((range) => {
      filters.push({ label: range, key: `budget-${range}` });
    });
    setActiveFilters(filters);
  };

  const clearFilter = (filterKey) => {
    if (filterKey === "from") setSearchFrom("");
    else if (filterKey === "to") setSearchTo("");
    else if (filterKey === "duration") setDurationRange([1, 14]);
    else if (filterKey.startsWith("budget-")) {
      const range = filterKey.replace("budget-", "");
      setSelectedBudgetRanges(selectedBudgetRanges.filter((r) => r !== range));
    }
  };

  const clearAllFilters = () => {
    setSearchFrom("");
    setSearchTo("");
    setDurationRange([1, 14]);
    setBudgetRange([1000, 10000]);
    setSelectedBudgetRanges([]);
    setHotelCategory([]);
    setFlightFilter("all");
    setActiveFilters([]);
  };

  const handleBudgetRangeCheckbox = (range) => {
    if (selectedBudgetRanges.includes(range)) {
      setSelectedBudgetRanges(selectedBudgetRanges.filter((r) => r !== range));
    } else {
      setSelectedBudgetRanges([...selectedBudgetRanges, range]);
    }
  };

  const handleDetailsClick = (id) => {
    navigate(`/destination/${id}`);
  };

  const budgetRanges = [
    { label: "< ₹3,000", count: Data.filter(p => parseInt(p.fees) < 3000).length },
    { label: "₹3,000 - ₹5,000", count: Data.filter(p => parseInt(p.fees) >= 3000 && parseInt(p.fees) < 5000).length },
    { label: "₹5,000 - ₹7,000", count: Data.filter(p => parseInt(p.fees) >= 5000 && parseInt(p.fees) < 7000).length },
    { label: "> ₹7,000", count: Data.filter(p => parseInt(p.fees) >= 7000).length },
  ];

  const hotelCategories = [
    { label: "< 3★", value: "below3", count: 0 },
    { label: "3★", value: "3star", count: 5 },
    { label: "4★", value: "4star", count: 6 },
    { label: "5★", value: "5star", count: 6 },
  ];

  return (
    <section className="packages-section">
      <div className="packages-container">
        {/* Search Bar */}
        <div className="packages-search-bar" data-aos="fade-down">
          <div className="search-field">
            <label>STARTING FROM</label>
            <input
              type="text"
              placeholder="New Delhi"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label>GOING TO</label>
            <input
              type="text"
              placeholder="Bali"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label>STARTING DATE</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label>ROOMS & GUESTS</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>4 Adults</option>
            </select>
          </div>
          <button className="search-btn">SEARCH</button>
          <button className="explore-btn">
            <span>⊞</span> Explore
          </button>
        </div>

        <div className="packages-content">
          {/* Sidebar Filters */}
          <div className={`packages-sidebar ${showFilters ? 'show' : 'hide'}`}>
            <div className="sidebar-header">
              <h3>
                <FaFilter /> FILTERS
              </h3>
              <button className="toggle-filters" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? '−' : '+'}
              </button>
            </div>

            {/* Duration Filter */}
            <div className="filter-group">
              <div className="filter-title">
                <span>Duration (in Nights)</span>
                <button className="collapse-btn">^</button>
              </div>
              <div className="range-slider">
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={durationRange[0]}
                  onChange={(e) => setDurationRange([parseInt(e.target.value), durationRange[1]])}
                />
                <div className="range-labels">
                  <span>{durationRange[0]}N</span>
                  <span>{durationRange[1]}N</span>
                </div>
              </div>
            </div>

            {/* Flights Filter */}
            <div className="filter-group">
              <div className="filter-title">
                <span>Flights</span>
                <button className="collapse-btn">^</button>
              </div>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="flight"
                    checked={flightFilter === "with"}
                    onChange={() => setFlightFilter("with")}
                  />
                  <span>With Flight ({Data.length})</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="flight"
                    checked={flightFilter === "without"}
                    onChange={() => setFlightFilter("without")}
                  />
                  <span>Without Flight ({Data.length})</span>
                </label>
              </div>
            </div>

            {/* Budget Filter */}
            <div className="filter-group">
              <div className="filter-title">
                <span>Budget (per person)</span>
                <button className="collapse-btn">^</button>
              </div>
              <div className="range-slider">
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={budgetRange[0]}
                  onChange={(e) => setBudgetRange([parseInt(e.target.value), budgetRange[1]])}
                />
                <div className="range-labels">
                  <span>₹{budgetRange[0].toLocaleString()}</span>
                  <span>₹{budgetRange[1].toLocaleString()}</span>
                </div>
              </div>
              <div className="budget-checkboxes">
                {budgetRanges.map((range) => (
                  <label key={range.label} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedBudgetRanges.includes(range.label)}
                      onChange={() => handleBudgetRangeCheckbox(range.label)}
                    />
                    <span>{range.label} ({range.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hotel Category Filter */}
            <div className="filter-group">
              <div className="filter-title">
                <span>Hotel Category</span>
                <button className="collapse-btn">^</button>
              </div>
              <div className="hotel-categories">
                {hotelCategories.map((category) => (
                  <label key={category.value} className="hotel-category">
                    <div className="category-label">{category.label}</div>
                    <div className="category-count">({category.count})</div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="packages-main">
            {/* Active Filters & Sort */}
            <div className="packages-header">
              <div className="active-filters-section">
                <h2>ALL PACKAGES ({filteredPackages.length})</h2>
                <div className="active-filters">
                  {activeFilters.map((filter) => (
                    <span key={filter.key} className="filter-tag">
                      {filter.label}
                      <button onClick={() => clearFilter(filter.key)}>
                        <MdClose />
                      </button>
                    </span>
                  ))}
                  {activeFilters.length > 0 && (
                    <button className="clear-all-btn" onClick={clearAllFilters}>
                      Clear All
                    </button>
                  )}
                </div>
              </div>

              <div className="sort-section">
                <label>Sorted By:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>

            {/* Packages Grid */}
            {filteredPackages.length > 0 ? (
              <div className="packages-grid">
                {filteredPackages.map((pkg) => (
                  <div key={pkg.id} className="package-card" data-aos="fade-up">
                    <div className="package-image">
                      <img src={pkg.imgSrc} alt={pkg.destTitle} />
                      <div className="package-badge">{pkg.duration}</div>
                    </div>
                    <div className="package-content">
                      <h3>{pkg.destTitle}</h3>
                      <div className="package-location">
                        <HiOutlineLocationMarker />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="package-grade">{pkg.grade}</div>
                      <p className="package-desc">{pkg.description.substring(0, 100)}...</p>
                      <div className="package-footer">
                        <div className="package-price">
                          <span className="price-label">Starting from</span>
                          <span className="price-amount">₹{pkg.fees}</span>
                          <span className="price-unit">/person</span>
                        </div>
                        <button
                          className="package-details-btn"
                          onClick={() => handleDetailsClick(pkg.id)}
                        >
                          DETAILS
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-packages">
                <HiOutlineSearch className="no-results-icon" />
                <h3>No packages found</h3>
                <p>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
