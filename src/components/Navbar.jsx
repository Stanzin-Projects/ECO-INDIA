import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from "react-icons/fi";
import { navLinks, siteInfo } from "../data/siteData";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contact">
            <a href={`tel:${siteInfo.phone}`}>
              <FiPhone /> {siteInfo.phone}
            </a>
            <a href={`mailto:${siteInfo.email}`}>
              <FiMail /> {siteInfo.email}
            </a>
          </div>
          <div className="top-bar-social">
            <span>Follow us on</span>
            <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={siteInfo.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteInfo.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">🌿</div>
            <div className="logo-text">
              <span className="logo-name">Eco India Journeys</span>
              <span className="logo-tagline">Sustainable Journeys</span>
            </div>
          </Link>

          <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <ul className="navbar-links">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={link.children ? "has-dropdown" : ""}
                  onMouseEnter={() => link.children && setActiveDropdown(index)}
                  onMouseLeave={() => link.children && setActiveDropdown(null)}
                >
                  <Link to={link.path}>
                    {link.label}
                    {link.children && <FiChevronDown className="dropdown-icon" />}
                  </Link>
                  {link.children && activeDropdown === index && (
                    <ul className="dropdown-menu">
                      {link.children.map((child, i) => (
                        <li key={i}>
                          <Link to={child.path}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a href={`tel:${siteInfo.phone}`} className="navbar-cta">
              Book Now
            </a>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
