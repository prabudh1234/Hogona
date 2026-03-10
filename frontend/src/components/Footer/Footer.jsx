import React from "react";
import "./footer.css";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="secContent container">

        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <img
                  src={logo}
                  alt="HOGONA"
                  style={{ height: "32px", marginRight: "8px" }}
                />
              </a>
            </div>

            <p className="footerParagraph">
              Do you have any issues? Travel with Hogona and explore the world.
            </p>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">

            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex"><FiChevronRight className="icon"/>Services</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Insurance</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Agency</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Tourism</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Payment</li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex"><FiChevronRight className="icon"/>Bookings</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Rentcars</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>HostelWorld</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Trivago</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>TripAdvisor</li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex"><FiChevronRight className="icon"/>Kathmandu</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Lalitpur</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Bhaktapur</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Trek</li>
              <li className="footerList flex"><FiChevronRight className="icon"/>Hiking</li>
            </div>

          </div>

          <div className="footerDiv">
            <small>HOGONA TRAVEL</small>
            <small>COPYRIGHTS RESERVED - 2026</small>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;