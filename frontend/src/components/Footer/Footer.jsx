import React, { useEffect } from "react";
import "./footer.css";

import { FiSend, FiChevronRight } from "react-icons/fi";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

import logo from "../../Assets/logo.png";

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">

      <div className="secContent container">

        {/* CONTACT SECTION */}

        <div className="contactDiv flex">

          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">

            <input
              type="email"
              placeholder="Enter Email Address"
              data-aos="fade-up"
            />

            <button className="btn flex" data-aos="fade-up">
              SEND <FiSend className="icon" />
            </button>

          </div>

        </div>

        {/* FOOTER CARD */}

        <div className="footerCard flex">

          {/* FOOTER INTRO */}

          <div className="footerIntro flex">

            <div className="logoDiv">

              <a href="/" className="logo flex">

                <img
                  src={logo}
    
                  style={{ height: "32px", marginRight: "8px" }}
                />

        

              </a>

            </div>

            <p className="footerParagraph">
              Do you have any issues? Contact us anytime and we will help you
              plan the best travel experience.
            </p>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>

          </div>

          {/* FOOTER LINKS */}

          <div className="footerLinks grid">

            {/* AGENCY */}

            <div className="linkGroup">

              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>

            </div>

            {/* PARTNERS */}

            <div className="linkGroup">

              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> TripAdvisor
              </li>

            </div>

            {/* LAST MINUTE */}

            <div className="linkGroup">

              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Kathmandu
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Lalitpur
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Bhaktapur
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trek
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Hiking
              </li>

            </div>

          </div>

          {/* COPYRIGHT */}

          <div className="footerDiv">
            <small>HOGONA TRAVEL</small>
            <small>COPYRIGHT © 2025</small>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Footer;