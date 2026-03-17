import React, { useEffect, useState } from "react";
import "./home.css";
import video from "../../Assets/Main1.mp4";
import { Data } from "../Main/Main";
import { useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";

const Home = () => {

  const navigate = useNavigate();

  const [maxPrice, setMaxPrice] = useState(10000);
  const [currentOffer, setCurrentOffer] = useState(0);

  // Travel Packages
  const offers = [
    {
      id: 1,
      agency: "Pallavi Holidays",
      title: "Goa 3N/4D",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      agency: "Gururaja Travels",
      title: "Coorg 2N/3D",
      price: "₹3,999",
      image:
        "https://www.travellersofindia.com/wp-content/uploads/2022/03/Coorg_travellersofindia-scaled.jpg",
    },
    {
      id: 3,
      agency: "Sunshine Tours",
      title: "Manali 5N/6D",
      price: "₹8,499",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 4,
      agency: "Adventure India",
      title: "Ooty Weekend",
      price: "₹2,999",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2022/12/Summers_unsplash.jpg",
    },
  ];

  // Slider auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  // Navigate to destination details
  const handleDetailsClick = (id) => {
    navigate(`/destination/${id}`);
  };

  // Show destinations
  const mostVisited = Data; // or Data.slice(0,6)

  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop></video>

        <div className="homeContent container">

          {/* TEXT */}
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your holiday</h1>
          </div>

          {/* AUTO SLIDER */}
          <div
            className="offersSlider"
            style={{
              backgroundImage: `url(${offers[currentOffer].image})`,
            }}
          ></div>

          {/* SEARCH CARD */}
          <div className="cardDiv grid">

            <div className="destinationInput">
              <label>Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
              </div>
            </div>

            <div className="dateInput">
              <label>Select your date:</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label>Max price</label>
                <span className="total">₹ {maxPrice}</span>
              </div>

              <div className="input flex">
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="searchOptions flex">
              <span>MORE FILTERS</span>
            </div>

          </div>

          {/* OFFER AD */}
          <div className="offersAdBox">

            <span className="adTag">LIMITED OFFER</span>

            <div className="adContent">
              <h2>{offers[currentOffer].title}</h2>
              <p>{offers[currentOffer].agency}</p>

              <div className="priceRow">
                <span className="price">{offers[currentOffer].price}</span>
                <button className="adBtn">Book Now</button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* AVAILABLE PACKAGES */}
      <section className="offersSection container">

        <h2>Available Travel Packages</h2>

        <div className="offersGrid">
          {offers.map((offer) => (
            <div key={offer.id} className="offerCard">
              <img src={offer.image} alt={offer.title} />
              <h3>{offer.agency}</h3>
              <p>{offer.title}</p>
              <p className="price">{offer.price}</p>
              <button>View Package</button>
            </div>
          ))}
        </div>

      </section>

      {/* MOST VISITED DESTINATIONS */}
      <section className="DESTINATIONSection container">

        <h2>🔥 Most Visited Destinations</h2>

        <div className="destinations-grid">

          {mostVisited.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description }) => (

              <div key={id} className="singleDestination">

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

      </section>

    </>
  );
};

export default Home;