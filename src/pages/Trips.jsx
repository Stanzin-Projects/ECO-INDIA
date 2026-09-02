import { useState, useMemo } from "react";
import { FiFilter, FiX, FiChevronDown } from "react-icons/fi";
import TrekCard from "../components/TrekCard";
import useInView from "../hooks/useInView";
import { allTrips, destinations } from "../data/siteData";
import "../styles/Trips.css";

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

const difficulties = ["Easy", "Medium", "Hard", "Extreme"];

const activities = [
  "Trekking",
  "Tour Package",
  "Motorbike Tours",
  "Mountaineering",
  "Wildlife",
  "Culture & Heritage",
  "Ladakh Festival",
  "Homestay Trek",
];

const sortOptions = [
  "Recently Added",
  "Lowest Price First",
  "Highest Price First",
  "Shortest Duration First",
  "Longest Duration First",
];

export default function Trips() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDest, setSelectedDest] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [sortBy, setSortBy] = useState("Recently Added");
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const filteredTrips = useMemo(() => {
    let trips = [...allTrips];

    if (selectedDest) {
      trips = trips.filter((t) => t.destination === selectedDest);
    }
    if (selectedDifficulty) {
      trips = trips.filter((t) => t.difficulty === selectedDifficulty);
    }
    trips = trips.filter((t) => {
      const price = t.discountedPrice || t.originalPrice || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    switch (sortBy) {
      case "Lowest Price First":
        trips.sort(
          (a, b) =>
            (a.discountedPrice || a.originalPrice || 0) -
            (b.discountedPrice || b.originalPrice || 0)
        );
        break;
      case "Highest Price First":
        trips.sort(
          (a, b) =>
            (b.discountedPrice || b.originalPrice || 0) -
            (a.discountedPrice || a.originalPrice || 0)
        );
        break;
      case "Shortest Duration First":
        trips.sort(
          (a, b) =>
            parseInt(a.duration) - parseInt(b.duration)
        );
        break;
      case "Longest Duration First":
        trips.sort(
          (a, b) =>
            parseInt(b.duration) - parseInt(a.duration)
        );
        break;
      default:
        break;
    }

    return trips;
  }, [selectedDest, selectedDifficulty, sortBy, priceRange]);

  const clearFilters = () => {
    setSelectedDest("");
    setSelectedDifficulty("");
    setPriceRange([0, 200000]);
    setSortBy("Recently Added");
  };

  return (
    <div className="trips-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Ladakh mountains"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <h1 className="animate-fade-up">All Trips</h1>
          <p className="animate-fade-up delay-1">
            Explore our handpicked adventures across the Himalayas
          </p>
        </div>
      </section>

      {/* Trips Content */}
      <section className="trips-content section-padding">
        <div className="container">
          {/* Filter Bar */}
          <div className="trips-filter-bar">
            <div className="filter-left">
              <button
                className={`filter-toggle ${showFilters ? "active" : ""}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <FiFilter /> Filters
              </button>
              <span className="results-count">
                {filteredTrips.length} trips found
              </span>
            </div>
            <div className="filter-right">
              <div className="sort-select">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      Sort: {opt}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="select-icon" />
              </div>
              <button
                className="view-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FiFilter /> View Filters
              </button>
            </div>
          </div>

          <div className="trips-layout">
            {/* Sidebar Filters */}
            <aside className={`trips-sidebar ${showFilters ? "open" : ""}`}>
              <div className="sidebar-header">
                <h3>
                  <FiFilter /> Filter By
                </h3>
                <button
                  className="sidebar-close"
                  onClick={() => setShowFilters(false)}
                >
                  <FiX />
                </button>
              </div>

              {/* Destination Filter */}
              <div className="filter-group">
                <h4>Destination</h4>
                <ul>
                  {destinations.map((dest) => (
                    <li key={dest.name}>
                      <label>
                        <input
                          type="radio"
                          name="destination"
                          checked={selectedDest === dest.name}
                          onChange={() =>
                            setSelectedDest(
                              selectedDest === dest.name ? "" : dest.name
                            )
                          }
                        />
                        {dest.name}
                        <span className="filter-count">{dest.tours}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Difficulty Filter */}
              <div className="filter-group">
                <h4>Difficulty</h4>
                <ul>
                  {difficulties.map((diff) => (
                    <li key={diff}>
                      <label>
                        <input
                          type="radio"
                          name="difficulty"
                          checked={selectedDifficulty === diff}
                          onChange={() =>
                            setSelectedDifficulty(
                              selectedDifficulty === diff ? "" : diff
                            )
                          }
                        />
                        {diff}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div className="filter-group">
                <h4>Activities</h4>
                <ul>
                  {activities.map((act) => (
                    <li key={act}>
                      <label>
                        <input type="checkbox" />
                        {act}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            </aside>

            {/* Trips Grid */}
            <div className="trips-grid">
              {filteredTrips.length === 0 ? (
                <div className="no-results">
                  <h3>No trips found</h3>
                  <p>Try adjusting your filters to find more trips.</p>
                  <button className="btn btn-primary" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredTrips.map((trip, index) => (
                  <AnimatedSection key={trip.id} delay={index * 80}>
                    <TrekCard trek={trip} />
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
