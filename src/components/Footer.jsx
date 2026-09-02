import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { siteInfo, destinations } from "../data/siteData";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container footer-content">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <h3>Eco India Journeys</h3>
            </div>
            <p>
              Sustainable journeys for the discerning traveller. We curate
              adventure and cultural experiences across the Himalayas since 2008.
            </p>
            <div className="footer-social">
              <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href={siteInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href={siteInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/trips">All Trips</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/#reviews">Reviews</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <h4>Destinations</h4>
            <ul>
              {destinations.map((dest, i) => (
                <li key={i}>
                  <Link to="/trips">{dest.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <span>Leh, Ladakh, India</span>
              </li>
              <li>
                <FiPhone />
                <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
              </li>
              <li>
                <FiMail />
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Eco India Journeys. All rights
            reserved. | Designed with ❤️ for sustainable tourism.
          </p>
        </div>
      </div>
    </footer>
  );
}
