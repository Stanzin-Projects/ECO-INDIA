import { Link } from "react-router-dom";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import useInView from "../hooks/useInView";
import { blogPosts } from "../data/siteData";
import "../styles/Blog.css";

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

export default function Blog() {
  return (
    <div className="blog-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80"
            alt="Blog background"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="container page-hero-content">
          <h1 className="animate-fade-up">Blog</h1>
          <p className="animate-fade-up delay-1">
            Sustainable journeys for the discerning traveller
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Knowledge Center</span>
            <h2 className="section-title">Villages, Cultural Events & Travel Tips</h2>
            <p className="section-desc">
              Incredibly diverse, our blog covers everything from cultural festivals
              to practical trekking guides.
            </p>
          </div>

          <div className="blog-grid">
            {/* Featured Post */}
            <AnimatedSection className="blog-featured">
              <div className="blog-card blog-card-featured">
                <div className="blog-card-image">
                  <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                  <span className="blog-category">{blogPosts[0].category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>
                      <FiCalendar />{" "}
                      {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2>{blogPosts[0].title}</h2>
                  <p>{blogPosts[0].excerpt}</p>
                  <Link to={`/blog/${blogPosts[0].slug}`} className="read-more">
                    Read More <FiArrowRight />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Other Posts */}
            {blogPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.id} delay={(index + 1) * 100}>
                <div className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span>
                        <FiCalendar />{" "}
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
