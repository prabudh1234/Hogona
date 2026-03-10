import React, { useEffect, useState } from "react";
import "./home.css";
import video from "../../Assets/Main1.mp4";


const Home = () => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [currentOffer, setCurrentOffer] = useState(0);

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
      image: "https://www.travellersofindia.com/wp-content/uploads/2022/03/Coorg_travellersofindia-scaled.jpg",
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
      image: "https://static-blog.treebo.com/wp-content/uploads/2022/12/Summers_unsplash.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop />

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
          >
            {/* <div className="offerContent">
              <h3>{offers[currentOffer].agency}</h3>
              <p>{offers[currentOffer].title}</p>
              <span className="price">{offers[currentOffer].price}</span>
            </div> */}
            
          </div>

          {/* SEARCH CARD */}
          <div className="cardDiv grid">
            <div className="destinationInput">
              <div id="label">              <label>Search your destination:</label>
</div>
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
              </div>
            </div>

            <div className="dateInput">
              <div id="label">
              <label>Select your date:</label>
              </div>
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

          <div
        className="offersAdBox"
      >
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

      {/* OFFERS GRID */}
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

      {/* AD BOX */}
      
    </>
  );
};

export default Home;