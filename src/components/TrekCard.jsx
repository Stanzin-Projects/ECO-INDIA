import { Link } from "react-router-dom";
import { FiClock, FiUsers, FiMapPin } from "react-icons/fi";
import "../styles/TrekCard.css";

export default function TrekCard({ trek, showDiscount = true }) {
  const hasDiscount = trek.discount && trek.originalPrice !== trek.discountedPrice;

  return (
    <div className={`trek-card ${trek.featured ? "featured" : ""}`}>
      <div className="trek-card-image">
        <img src={trek.image} alt={trek.title} loading="lazy" />
        <div className="trek-card-overlay">
          {trek.featured && <span className="badge featured-badge">Featured</span>}
          {showDiscount && hasDiscount && (
            <span className="badge discount-badge">{trek.discount}</span>
          )}
        </div>
      </div>
      <div className="trek-card-content">
        <h3 className="trek-card-title">
          <Link to={`/trips/${trek.slug}`}>{trek.title}</Link>
        </h3>
        <p className="trek-card-desc">{trek.description}</p>
        <div className="trek-card-meta">
          <span>
            <FiMapPin /> {trek.destination}
          </span>
          {trek.difficulty && (
            <span className={`difficulty ${trek.difficulty.toLowerCase()}`}>
              {trek.difficulty}
            </span>
          )}
        </div>
        <div className="trek-card-info">
          <span>
            <FiClock /> {trek.duration}
          </span>
          {trek.people && (
            <span>
              <FiUsers /> {trek.people}
            </span>
          )}
        </div>
        <div className="trek-card-footer">
          <div className="trek-card-price">
            {hasDiscount ? (
              <>
                <span className="original-price">
                  ₹{trek.originalPrice.toLocaleString()}
                </span>
                <span className="discounted-price">
                  ₹{trek.discountedPrice.toLocaleString()}
                </span>
              </>
            ) : trek.originalPrice ? (
              <span className="discounted-price">
                ₹{trek.originalPrice.toLocaleString()}
              </span>
            ) : (
              <span className="price-on-request">View Details for Price</span>
            )}
          </div>
          <Link to={`/trips/${trek.slug}`} className="trek-card-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
