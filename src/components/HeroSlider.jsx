import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { heroSlides } from "../data/siteData";
import "../styles/HeroSlider.css";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero-slider">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <div className="hero-slide-bg">
            <img src={slide.image} alt={slide.title} />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content container">
            <div className={`hero-text ${index === current ? "animate" : ""}`}>
              <span className="hero-subtitle">{slide.subtitle}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">
                Explore the majestic landscapes of Ladakh with our expert-guided
                treks and tours.
              </p>
              <div className="hero-buttons">
                <Link to="/trips" className="btn btn-primary">
                  Explore Treks
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-nav hero-prev" onClick={prev} aria-label="Previous">
        <FiChevronLeft />
      </button>
      <button className="hero-nav hero-next" onClick={next} aria-label="Next">
        <FiChevronRight />
      </button>

      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
