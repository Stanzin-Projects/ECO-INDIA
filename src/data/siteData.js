// Site-wide data for Eco India Journeys clone

export const siteInfo = {
  name: "Eco India Journeys",
  tagline: "Trekking & Travel Agency based in Leh-Ladakh",
  subtitle: "Adventure Tours in Leh-Ladakh, Zanskar and across Himalayas.",
  description:
    "Eco India Journeys is a local Trekking & Travel Agency in Leh-Ladakh.",
  phone: "+91 8800777421",
  email: "ecoindiajourneys@gmail.com",
  since: 2008,
  social: {
    facebook: "https://facebook.com/ecoindiajourneys",
    instagram: "https://instagram.com/ecoindiajourneys",
    youtube: "https://youtube.com/ecoindiajourneys",
    twitter: "https://twitter.com/ecoindiajourneys",
  },
};

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Trip Types",
    path: "/trips",
    children: [
      { label: "Trekking", path: "/trips?type=trekking" },
      { label: "Tour Packages", path: "/trips?type=tour-package" },
      { label: "Motorbike Tours", path: "/trips?type=motorbike" },
      { label: "Mountaineering", path: "/trips?type=mountaineering" },
      { label: "Wildlife", path: "/trips?type=wildlife" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "About Us", path: "/about" },
  { label: "Reviews", path: "/#reviews" },
  { label: "Contact", path: "/#contact" },
];

export const heroSlides = [
  {
    title: "Ladakh Festival",
    subtitle: "Experience the vibrant culture of Ladakh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
  },
  {
    title: "Markha Valley Trek",
    subtitle: "Journey into the heart of Ladakh's raw beauty",
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80",
  },
  {
    title: "Pangong Lake",
    subtitle: "Where the sky meets the water",
    image:
      "https://images.unsplash.com/photo-1621427624498-8ce95568c346?w=1920&q=80",
  },
];

export const aboutSection = {
  title: "About Us",
  heading: "Eco India Journeys is a Local Trekking & Adventure Travel Agency based in Leh.",
  description:
    "Since 2008, we've been organizing adventures across Himalayas. Our commitment to responsible and sustainable tourism runs deep—aiming to minimize our environmental impact and support local communities.",
  highlight:
    "We're here to lead you through it with care and respect for its people and land.",
  stats: { label: "High Guest Satisfaction Continually Since 2008" },
  image:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
};

export const featuredTreks = [
  {
    id: 1,
    title: "7-Day Phyang to Hunder Trekking Ladakh",
    slug: "phyang-to-hunder-trekking-ladakh",
    description:
      "Phyang to Hunder Trekking Ladakh crosses Lasermo La Pass (5,450 m), the trek offers panoramic views of the Karakoram Range.",
    destination: "Leh Ladakh",
    duration: "7 Days - 6 Nights",
    people: "2 People",
    originalPrice: 49500,
    discountedPrice: 48000,
    discount: "3% Off",
    difficulty: "Medium",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80",
  },
  {
    id: 2,
    title: "3-Day Sham Valley Ladakh Trek",
    slug: "sham-valley-ladakh-trek",
    description:
      "3-Day Sham Valley Ladakh Trek is an easy trek also known as the 'Baby Trek' for its easy trails. Perfect for beginners.",
    destination: "Leh Ladakh",
    duration: "3 Days - 2 Nights",
    people: "2 People",
    originalPrice: 23500,
    discountedPrice: 22500,
    discount: "4% Off",
    difficulty: "Easy",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    id: 3,
    title: "6-Day Markha Valley Trek",
    slug: "markha-valley-trek",
    description:
      "Markha Valley Trek is not just a trek, it's a journey into the heart of Ladakh's raw beauty — a perfect blend of adventure and breathtaking landscape.",
    destination: "Leh Ladakh",
    duration: "6 Days - 5 Nights",
    people: "2 People",
    originalPrice: 48950,
    discountedPrice: 46950,
    discount: "4% Off",
    difficulty: "Medium",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    id: 4,
    title: "9-Day Rumtse To Tsomoriri Trekking",
    slug: "rumtse-to-tsomoriri-trekking",
    description:
      "9-Day Rumtse To Tsomoriri Trek is a high-altitude trek spanning 98km guiding adventurers through the untouched Changthang Valley.",
    destination: "Leh Ladakh",
    duration: "9 Days - 8 Nights",
    people: "2 People",
    originalPrice: 56900,
    discountedPrice: 55000,
    discount: "3% Off",
    difficulty: "Hard",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  },
  {
    id: 5,
    title: "12-Day Lamayuru to Hemis - Trek in Ladakh",
    slug: "lamayuru-to-hemis-trek",
    description:
      "Lamayuru to Hemis Trek in Ladakh is an exciting journey that starts at the famous Lamayuru Monastery and takes you through stunning landscapes.",
    destination: "Leh Ladakh",
    duration: "12 Days - 10 Nights",
    people: "2 People",
    originalPrice: 64400,
    discountedPrice: 64400,
    discount: null,
    difficulty: "Hard",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",
  },
  {
    id: 6,
    title: "8-Day Snow Leopard Trek - Wildlife Ladakh",
    slug: "snow-leopard-trek-wildlife-ladakh",
    description:
      "Snow Leopard expedition in Uley Village and Wildlife Ladakh, a premier destination for wildlife safaris in India. Spot the elusive snow leopard.",
    destination: "Leh Ladakh",
    duration: "9 Days - 8 Nights",
    people: "2 People",
    originalPrice: 75000,
    discountedPrice: 75000,
    discount: null,
    difficulty: "Hard",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Pierre Egger",
    trek: "Sham Valley Trek",
    rating: 5,
    country: "France",
    flag: "🇫🇷",
    text: "Good experience for 3 days trek and good relationship with our guide Jess! Wonderful nature and this trek is good for a first walk in Ladakh region. Take good shoes. Dinners in homestay interesting but lunches too bland. Jess gives good information about culture.",
  },
  {
    id: 2,
    name: "Audrey Lowe",
    trek: "Motorbike Ride",
    rating: 5,
    country: "UK",
    flag: "🇬🇧",
    text: "Thank you! Jesse was so helpful on our trip to Leh. We rented a motorcycle and he was so swift with replying and getting everything organised for us it was a breeze. Had an amazing time taking the bike from Leh - Hunder - Turtuk and back. Highly recommend!",
  },
  {
    id: 3,
    name: "Daire MacFadden",
    trek: "Markha Valley Trek",
    rating: 5,
    country: "Ireland",
    flag: "🇮🇪",
    text: "Did a four day Markha Valley trek in early September with Tamchos as our guide. He was an excellent guide, adapting the route to our needs, and had a great sense of humour too!",
  },
  {
    id: 4,
    name: "Ellen Fällström",
    trek: "Markha Valley Trek",
    rating: 5,
    country: "Sweden",
    flag: "🇸🇪",
    text: "Did the Markha Valley trek with Jessi as our guide. Beautiful experience and good spirits through the whole hike. A memory for life, thank you Eco India Journeys!",
  },
  {
    id: 5,
    name: "공원장",
    trek: "Markha Trek",
    rating: 5,
    country: "South Korea",
    flag: "🇰🇷",
    text: "This trip was really special. I felt a lot of respect for nature. 고산병에 대한 두려움을 극복하고 더 넓은 세상을 향해 앞으로 도전하려 합니다. 소남님 덕분에 안전하고 즐거운 여행되었습니다. 감사합니다",
  },
];

export const destinations = [
  {
    name: "Bhutan",
    tours: 4,
    image:
      "https://images.unsplash.com/photo-1553856622-d1b350e5dbd3?w=400&q=80",
  },
  {
    name: "Chandigarh-Manali-Leh",
    tours: 1,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    name: "Kinnaur & Spiti",
    tours: 1,
    image:
      "https://images.unsplash.com/photo-1580687774196-3d157f0ba3e0?w=400&q=80",
  },
  {
    name: "Leh Ladakh",
    tours: 22,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80",
  },
  {
    name: "Manali Leh Srinagar",
    tours: 1,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
  },
  {
    name: "Rajasthan",
    tours: 2,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80",
  },
];

export const tourPackages = [
  {
    id: 101,
    title: "7-Day Tsomoriri Leh-Ladakh Tour Package",
    slug: "tsomoriri-leh-ladakh-tour",
    description:
      "This 7-day, 6-night Tsomoriri Leh-Ladakh Tour Package offers a chance to see the beautiful scenery of Ladakh. Pangong Lake, Tsomoriri Lake and around Leh.",
    destination: "Leh Ladakh",
    duration: "7 Days",
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1621427624498-8ce95568c346?w=600&q=80",
  },
  {
    id: 102,
    title: "7-Day Best of Leh-Ladakh Tour Package",
    slug: "best-of-leh-ladakh-tour",
    description:
      "This 7-day, 6-night best of Leh-Ladakh tour package lets you explore the top attractions in Ladakh in just one week.",
    destination: "Leh Ladakh",
    duration: "7 Days",
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
  },
  {
    id: 103,
    title: "9-Day Leh Ladakh Trip",
    slug: "leh-ladakh-trip",
    description:
      "9-day Leh Ladakh trip is about high-altitude drives, pristine lakes, and centuries-old monasteries. This journey promises a wonderful experience.",
    destination: "Leh Ladakh",
    duration: "9 Days",
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    id: 104,
    title: "5-Day Leh Ladakh Tour Package",
    slug: "leh-ladakh-tour-package",
    description:
      "Leh Ladakh Tour Package! Luxury Stay, sightseeing in and around Leh, excursion to Khardong la, Alchi, Lamayuru and Picnic Lunch by river Indus.",
    destination: "Leh Ladakh",
    duration: "5 Days",
    originalPrice: 72490,
    discountedPrice: 72490,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",
  },
  {
    id: 105,
    title: "Ladakh Festival 2025 Fixed Departures",
    slug: "ladakh-festival-2025",
    description:
      "Ladakh festival 2025 lasts 4 days and takes place in September in Leh town. It shows the cultural diversity of the region.",
    destination: "Leh Ladakh",
    duration: "8 Days",
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80",
  },
];

export const blogPosts = [
  {
    id: 201,
    title: "Ladakh Monastery Festivals: A Guide for Travellers",
    slug: "ladakh-monastery-festivals-guide",
    excerpt:
      "Experience the soul of Ladakh through its vibrant monastery festivals! These ancient celebrations, deeply rooted in Tibetan Buddhist traditions and local heritage, offer travelers an extraordinary window into the region's spiritual heart.",
    date: "2025-08-15",
    category: "Culture & Heritage",
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80",
  },
  {
    id: 202,
    title: "10-Day Leh Ladakh Itinerary: The Ultimate Guide",
    slug: "10-day-leh-ladakh-itinerary",
    excerpt:
      "In 10-day Leh Ladakh Itinerary, you can visit the beautiful Pangong Lake, ancient monasteries at Hemis and Lamayuru, Nubra Valley along the old Silk Road, and more.",
    date: "2025-07-20",
    category: "Travel Tips",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
  },
  {
    id: 203,
    title: "Best Time to Visit Ladakh: Month-by-Month Guide",
    slug: "best-time-to-visit-ladakh",
    excerpt:
      "Planning a trip to Ladakh? Here's a comprehensive month-by-month guide to help you choose the perfect time for your adventure.",
    date: "2025-06-10",
    category: "Travel Tips",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
];

export const allTrips = [
  ...featuredTreks,
  {
    id: 5,
    title: "12-Day Lamayuru to Hemis – Trek in Ladakh",
    slug: "lamayuru-to-hemis-trek",
    description:
      "Lamayuru to Hemis Trek in Ladakh is an exciting journey that starts at the famous Lamayuru Monastery and takes you through some stunning landscapes.",
    destination: "Leh Ladakh",
    duration: "12 Days",
    people: null,
    originalPrice: 64400,
    discountedPrice: 64400,
    discount: null,
    difficulty: "Hard",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",
  },
  {
    id: 6,
    title: "14-Day Golden Triangle and Rajasthan Heritage Culture",
    slug: "golden-triangle-rajasthan",
    description:
      "Golden Triangle and Rajasthan Heritage Culture. Begin your journey in Delhi, then visit the famous Golden Triangle, which includes Delhi, Agra and Jaipur.",
    destination: "Rajasthan",
    duration: "14 Days",
    people: null,
    originalPrice: 85000,
    discountedPrice: 85000,
    discount: null,
    difficulty: "Easy",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  },
  {
    id: 7,
    title: "23-Day Mt. Nun Peak Expedition",
    slug: "mt-nun-peak-expedition",
    description:
      "If you want to move from trekking to climbing a more technical peak, choose the Mt. Nun Peak Expedition. At 7,135 meters, it is one of the highest.",
    destination: "Leh Ladakh",
    duration: "23 Days",
    people: null,
    originalPrice: 195000,
    discountedPrice: 195000,
    discount: null,
    difficulty: "Extreme",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  },
  {
    id: 8,
    title: "5-Day Leh Ladakh Tour Package",
    slug: "leh-ladakh-tour-package",
    description:
      "Luxury Tour Leh Ladakh Tour Package! Luxury Stay, sightseeing in and around Leh, excursion to Khardong la, Alchi, Lamayuru and Picnic Lunch by river Indus.",
    destination: "Leh Ladakh",
    duration: "5 Days",
    people: null,
    originalPrice: 72490,
    discountedPrice: 72490,
    discount: null,
    difficulty: null,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",
  },
  {
    id: 9,
    title: "7-Day Best of Leh-Ladakh Tour Package",
    slug: "best-of-leh-ladakh-tour",
    description:
      "This 7-day, 6-night best of Leh-Ladakh tour package lets you explore the top attractions in Ladakh in just one week.",
    destination: "Leh Ladakh",
    duration: "7 Days",
    people: null,
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    difficulty: null,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
  },
  {
    id: 10,
    title: "7-Day Ladakh Trip",
    slug: "ladakh-trip",
    description:
      "7-day Ladakh Trip by jeep, takes you to Pangong Lake, Khardungla, Nubra Valley and Tsomoriri lake and Thiksey Monastery.",
    destination: "Leh Ladakh",
    duration: "7 Days",
    people: "2 People",
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    difficulty: null,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    id: 11,
    title: "10-Day Kang Yatse with Markha Valley",
    slug: "kang-yatse-markha-valley",
    description:
      "Kang Yatse is located southeast of Leh in the Markha Valley, on the Nimaling Plateau. It is a popular peak about 6,000 metres.",
    destination: "Leh Ladakh",
    duration: "10 Days",
    people: null,
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    difficulty: "Hard",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    id: 12,
    title: "7-Day Tsomoriri Leh-Ladakh Tour Package",
    slug: "tsomoriri-leh-ladakh-tour",
    description:
      "This 7-day, 6-night Tsomoriri Leh-Ladakh Tour Package offers a chance to see the beautiful scenery of Ladakh. Pangong Lake, Tsomoriri Lake and around Leh.",
    destination: "Leh Ladakh",
    duration: "7 Days",
    people: null,
    originalPrice: null,
    discountedPrice: null,
    discount: null,
    difficulty: null,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1621427624498-8ce95568c346?w=600&q=80",
  },
];
