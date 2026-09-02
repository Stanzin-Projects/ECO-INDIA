import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiPhone,
} from "react-icons/fi";
import HeroSlider from "../components/HeroSlider";
import TrekCard from "../components/TrekCard";
import TestimonialSlider from "../components/TestimonialSlider";
import useInView from "../hooks/useInView";
import {
  aboutSection,
  featuredTreks,
  destinations,
  tourPackages,
  siteInfo,
} from "../data/siteData";
import "../styles/Home.css";

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`animate-section ${isInView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="section-header">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection className="about-image-col">
              <div className="about-image-wrapper">
                <img src={aboutSection.image} alt="Eco India Journeys team" />
                <div className="about-experience-badge">
                  <span className="exp-number">17+</span>
                  <span className="exp-text">Years of Experience</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="about-content-col" delay={200}>
              <span className="section-subtitle">{aboutSection.title}</span>
              <h2 className="about-heading">{aboutSection.heading}</h2>
              <p className="about-desc">{aboutSection.description}</p>
              <p className="about-highlight">{aboutSection.highlight}</p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-icon">🏆</span>
                  <span className="stat-text">{aboutSection.stats.label}</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <FiArrowRight />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Treks Section */}
      <section className="treks-section section-padding bg-light">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              subtitle="FEATURED TREKS"
              title="Explore Ladakh Popular Treks."
              description="Get started with handpicked top rated treks."
            />
          </AnimatedSection>
          <div className="treks-grid">
            {featuredTreks.slice(0, 4).map((trek, index) => (
              <AnimatedSection key={trek.id} delay={index * 100}>
                <TrekCard trek={trek} />
              </AnimatedSection>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/trips" className="btn btn-outline">
              View All Trips <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us / Reviews Section */}
      <section className="reviews-section section-padding" id="reviews">
        <div className="container">
          <div className="reviews-grid">
            <AnimatedSection className="reviews-info">
              <span className="section-subtitle">Why Us</span>
              <h2 className="section-title">What our clients say</h2>
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="badge-icon">⭐</span>
                  <span>5/5 Rating</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-icon">🏔️</span>
                  <span>500+ Treks</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-icon">🌍</span>
                  <span>30+ Countries</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="reviews-slider" delay={200}>
              <TestimonialSlider />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section section-padding bg-light">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              subtitle="DESTINATIONS"
              title="Popular Destinations"
              description="Discover new places with us today."
            />
          </AnimatedSection>
          <div className="destinations-grid">
            {destinations.map((dest, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <Link to="/trips" className="destination-card">
                  <div className="destination-image">
                    <img src={dest.image} alt={dest.name} loading="lazy" />
                    <div className="destination-overlay" />
                  </div>
                  <div className="destination-info">
                    <h3>{dest.name}</h3>
                    <span>
                      <FiMapPin /> {dest.tours} Tours
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="packages-section section-padding">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              subtitle="Tour Packages"
              title="Best Offers"
              description="Check out the best deals available for tour packages and book today to not miss out on them. Happy journey!"
            />
          </AnimatedSection>
          <div className="packages-grid">
            {tourPackages.slice(0, 4).map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 100}>
                <TrekCard trek={pkg} showDiscount={false} />
              </AnimatedSection>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/trips" className="btn btn-outline">
              View All Trips <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
            alt="Mountain landscape"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container cta-content">
          <AnimatedSection>
            <h2>
              Don't wait for your next adventure.<br />Contact Us!
            </h2>
            <div className="cta-buttons">
              <a href={`tel:${siteInfo.phone}`} className="btn btn-primary btn-lg">
                <FiPhone /> {siteInfo.phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="btn btn-outline btn-lg"
              >
                {siteInfo.email}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
