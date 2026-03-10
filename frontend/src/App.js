import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Offers from "./components/Offers/Offers";
import DestinationDetails from "./components/Main/DestinationDetails";
import Contact from "./components/Main/Contact";
import Booking from "./components/Main/Booking";
import SignUp from "./components/authenticator/SignUp";
import About from "./components/Main/About";
import Hotels from "./components/Hotels/Hotels"; 
import Packages from "./components/Packages/Packages";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Main />
              </>
            }
          />

          {/* Offers / Packages */}
          <Route path="/packages" element={<Packages />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Details */}
          <Route path="/destination/:id" element={<DestinationDetails />} />

          {/* Other Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/offers" element={<Offers />} />
    


          {/* Auth */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignUp />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: "0", color: "#0077b6" }}>
        404
      </h1>
      <h2 style={{ fontSize: "24px", margin: "16px 0" }}>
        Page Not Found
      </h2>

      <a
        href="/"
        style={{
          padding: "12px 24px",
          background: "#0077b6",
          color: "white",
          textDecoration: "none",
          borderRadius: "30px",
          fontWeight: "600",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default App;