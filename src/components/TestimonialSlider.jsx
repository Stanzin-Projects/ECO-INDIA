import { useState, useEffect, useCallback } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../data/siteData";
import "../styles/TestimonialSlider.css";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="testimonial-slider">
      <div className="testimonial-card" key={current}>
        <div className="testimonial-quote">
          <span>❝</span>
        </div>
        <div className="testimonial-stars">
          {[...Array(t.rating)].map((_, i) => (
            <FiStar key={i} className="star-filled" />
          ))}
        </div>
        <p className="testimonial-text">{t.text}</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">
            {t.name.charAt(0)}
          </div>
          <div>
            <h4 className="testimonial-name">
              {t.name} {t.flag}
            </h4>
            <span className="testimonial-trek">{t.trek}</span>
          </div>
        </div>
      </div>

      <div className="testimonial-nav">
        <button onClick={prev} aria-label="Previous testimonial">
          <FiChevronLeft />
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next testimonial">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
