import React, { useEffect, useState, useCallback } from "react";
import "./Packages.css";
import { Data } from "../Main/Main";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Packages = () => {
  const navigate = useNavigate();

  // STATES
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [durationRange, setDurationRange] = useState([1, 14]);
  const [budgetRange, setBudgetRange] = useState([1000, 10000]);
  const [selectedBudgetRanges, setSelectedBudgetRanges] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState(Data);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  // Update active filters
  const updateActiveFilters = useCallback(() => {
    const filters = [];

    if (searchFrom) filters.push({ label: `From: ${searchFrom}`, key: "from" });
    if (searchTo) filters.push({ label: `To: ${searchTo}`, key: "to" });

    if (durationRange[0] !== 1 || durationRange[1] !== 14) {
      filters.push({
        label: `${durationRange[0]}-${durationRange[1]} Nights`,
        key: "duration",
      });
    }

    selectedBudgetRanges.forEach((range) => {
      filters.push({ label: range, key: `budget-${range}` });
    });

    setActiveFilters(filters);
  }, [searchFrom, searchTo, durationRange, selectedBudgetRanges]);

  // FILTER LOGIC
  useEffect(() => {
    let results = Data;

    if (searchFrom) {
      results = results.filter((pkg) =>
        pkg.location.toLowerCase().includes(searchFrom.toLowerCase())
      );
    }

    if (searchTo) {
      results = results.filter(
        (pkg) =>
          pkg.destTitle.toLowerCase().includes(searchTo.toLowerCase()) ||
          pkg.location.toLowerCase().includes(searchTo.toLowerCase())
      );
    }

    results = results.filter((pkg) => {
      const days = parseInt(pkg.duration) || 1;
      return days >= durationRange[0] && days <= durationRange[1];
    });

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

    results = results.filter((pkg) => {
      const price = parseInt(pkg.fees);
      return price >= budgetRange[0] && price <= budgetRange[1];
    });

    setFilteredPackages(results);
    updateActiveFilters();
  }, [searchFrom, searchTo, durationRange, budgetRange, selectedBudgetRanges, updateActiveFilters]);

  // HANDLERS
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
    setActiveFilters([]);
  };

  const handleDetailsClick = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="packages-section">
      <div className="packages-container">

        {/* HEADER */}
        <div className="packages-header">
          <h2>ALL PACKAGES ({filteredPackages.length})</h2>
        </div>

        {/* ACTIVE FILTERS */}
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
            <button onClick={clearAllFilters}>Clear All</button>
          )}
        </div>

        {/* PACKAGES */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <img src={pkg.imgSrc} alt={pkg.destTitle} />

              <h3>{pkg.destTitle}</h3>

              <div>
                <HiOutlineLocationMarker />
                {pkg.location}
              </div>

              <p>{pkg.description.substring(0, 100)}...</p>

              <div>
                <strong>₹{pkg.fees}</strong>
              </div>

              <button onClick={() => handleDetailsClick(pkg.id)}>
                DETAILS
              </button>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="no-packages">
            <HiOutlineSearch />
            <h3>No packages found</h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default Packages;