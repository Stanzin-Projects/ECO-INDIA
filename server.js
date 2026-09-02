const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "dist")));

// ===== API Routes =====

// In-memory data store (replace with a real database in production)
let contacts = [];
let wishlist = [];

// Get all trips (with optional filters)
app.get("/api/trips", (req, res) => {
  const { destination, difficulty, minPrice, maxPrice, sort } = req.query;
  const { allTrips } = require("./src/data/siteData");

  let trips = [...allTrips];

  if (destination) {
    trips = trips.filter(
      (t) => t.destination.toLowerCase() === destination.toLowerCase()
    );
  }
  if (difficulty) {
    trips = trips.filter(
      (t) => t.difficulty?.toLowerCase() === difficulty.toLowerCase()
    );
  }
  if (minPrice) {
    trips = trips.filter(
      (t) => (t.discountedPrice || t.originalPrice || 0) >= Number(minPrice)
    );
  }
  if (maxPrice) {
    trips = trips.filter(
      (t) => (t.discountedPrice || t.originalPrice || 0) <= Number(maxPrice)
    );
  }

  // Sorting
  switch (sort) {
    case "price_asc":
      trips.sort(
        (a, b) =>
          (a.discountedPrice || a.originalPrice || 0) -
          (b.discountedPrice || b.originalPrice || 0)
      );
      break;
    case "price_desc":
      trips.sort(
        (a, b) =>
          (b.discountedPrice || b.originalPrice || 0) -
          (a.discountedPrice || a.originalPrice || 0)
      );
      break;
    case "duration_asc":
      trips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      break;
    case "duration_desc":
      trips.sort((a, b) => parseInt(b.duration) - parseInt(a.duration));
      break;
  }

  res.json({ success: true, count: trips.length, data: trips });
});

// Get single trip by slug
app.get("/api/trips/:slug", (req, res) => {
  const { allTrips } = require("./src/data/siteData");
  const trip = allTrips.find((t) => t.slug === req.params.slug);

  if (!trip) {
    return res.status(404).json({ success: false, message: "Trip not found" });
  }

  res.json({ success: true, data: trip });
});

// Get all blog posts
app.get("/api/blog", (req, res) => {
  const { blogPosts } = require("./src/data/siteData");
  res.json({ success: true, count: blogPosts.length, data: blogPosts });
});

// Get single blog post
app.get("/api/blog/:slug", (req, res) => {
  const { blogPosts } = require("./src/data/siteData");
  const post = blogPosts.find((p) => p.slug === req.params.slug);

  if (!post) {
    return res
      .status(404)
      .json({ success: false, message: "Blog post not found" });
  }

  res.json({ success: true, data: post });
});

// Contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message, tripInterest } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Name, email, and message are required" });
  }

  const contact = {
    id: contacts.length + 1,
    name,
    email,
    phone: phone || null,
    message,
    tripInterest: tripInterest || null,
    createdAt: new Date().toISOString(),
  };

  contacts.push(contact);

  res.json({
    success: true,
    message: "Thank you! We will get back to you soon.",
    data: contact,
  });
});

// Get testimonials / reviews
app.get("/api/reviews", (req, res) => {
  const { testimonials } = require("./src/data/siteData");
  res.json({ success: true, count: testimonials.length, data: testimonials });
});

// Wishlist endpoints
app.get("/api/wishlist", (req, res) => {
  res.json({ success: true, count: wishlist.length, data: wishlist });
});

app.post("/api/wishlist", (req, res) => {
  const { tripId } = req.body;
  if (!tripId) {
    return res
      .status(400)
      .json({ success: false, message: "Trip ID is required" });
  }

  if (!wishlist.includes(tripId)) {
    wishlist.push(tripId);
  }

  res.json({ success: true, message: "Added to wishlist", data: wishlist });
});

app.delete("/api/wishlist/:tripId", (req, res) => {
  const tripId = Number(req.params.tripId);
  wishlist = wishlist.filter((id) => id !== tripId);
  res.json({ success: true, message: "Removed from wishlist", data: wishlist });
});

// Newsletter subscription
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }
  res.json({
    success: true,
    message: "Thank you for subscribing to our newsletter!",
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Catch-all: serve React app for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});
