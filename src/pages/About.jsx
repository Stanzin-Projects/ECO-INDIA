import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiAward,
  FiGlobe,
  FiHeart,
  FiUsers,
} from "react-icons/fi";
import useInView from "../hooks/useInView";
import "../styles/About.css";

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

const services = [
  "Customize tour packages",
  "Group Tour Packages",
  "Car Rental",
  "Bike Rental",
  "Wildlife Photography Tours",
  "Adventure activities",
  "Motorbike tour",
  "Mountain bike tour",
  "Mountaineering",
  "Trekking & Hiking",
];

const values = [
  {
    icon: <FiHeart />,
    title: "Responsible Tourism",
    desc: "We are committed to responsible & eco-tourism through all our policies.",
  },
  {
    icon: <FiUsers />,
    title: "Community Support",
    desc: "All our holidays benefit the local communities and protect the environment.",
  },
  {
    icon: <FiGlobe />,
    title: "Cultural Respect",
    desc: "We respect local traditions, religion, and heritage in all our journeys.",
  },
  {
    icon: <FiAward />,
    title: "Since 2008",
    desc: "Over 17 years of experience organizing adventures across the Himalayas.",
  },
];

const registrations = [
  "Jammu & Kashmir Tourism",
  "Indian Mountaineering Foundation",
  "Adventure Tour Operators Association of India",
  "Ladakh Autonomous Hill Development Council",
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
            alt="Ladakh landscape"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <h1 className="animate-fade-up">About Us</h1>
          <p className="animate-fade-up delay-1">
            Know more about Eco India Journeys
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-main section-padding">
        <div className="container">
          <div className="about-main-grid">
            <AnimatedSection className="about-main-image">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
                alt="Our team in Ladakh"
              />
              <div className="experience-badge">
                <span className="exp-number">17+</span>
                <span className="exp-text">Years Of Experience</span>
              </div>
            </AnimatedSection>
            <AnimatedSection className="about-main-content" delay={200}>
              <h2>
                Established in 2008, Eco India Journeys curates adventure and
                cultural experiences across the Himalayas.
              </h2>
              <p>
                From trekking through majestic mountains to exploring ancient
                traditions, our tours cater to travelers seeking an immersive and
                responsible exploration of this awe-inspiring region.
              </p>
              <p>
                Eco India Journeys is committed to responsible & eco-tourism
                through all its policies. We feel strongly that all our holidays
                should benefit the local communities, protect the environment by
                minimizing pollution, and respect local traditions, religion, and
                heritage.
              </p>
              <p>
                So, in our tours, we raise awareness of these topics and also
                promote interactions with local people – we don't do different
                things, but do the same things differently.
              </p>
              <p>
                At Eco India Journeys, we make sure that your vacation dreams are
                specialized according to your plan and budget, and you miss
                nothing whilst in the Himalayas.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section section-padding bg-light">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-subtitle">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </div>
          </AnimatedSection>
          <div className="values-grid">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="services-grid">
            <AnimatedSection className="services-content">
              <span className="section-subtitle">Our Services</span>
              <h2 className="section-title">What We Offer</h2>
              <p>
                We ensure your vacation dreams are specialized according to your
                plan and budget.
              </p>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <FiCheck className="check-icon" />
                    {service}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection className="services-image" delay={200}>
              <img
                src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80"
                alt="Ladakh adventure"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="registrations-section section-padding bg-light">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-subtitle">Certifications</span>
              <h2 className="section-title">
                WE ARE PROUD TO BE REGISTERED UNDER AND MEMBER OF
              </h2>
            </div>
          </AnimatedSection>
          <div className="registrations-grid">
            {registrations.map((reg, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="registration-card">
                  <FiAward className="reg-icon" />
                  <span>{reg}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-padding">
        <div className="container">
          <AnimatedSection>
            <div className="about-cta-content">
              <h2>Ready for your Himalayan adventure?</h2>
              <p>Contact us today and let's plan your perfect trip.</p>
              <Link to="/trips" className="btn btn-primary btn-lg">
                Explore Our Trips <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
