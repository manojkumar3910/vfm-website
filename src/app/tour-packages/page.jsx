"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useMemo } from "react";

const packages = [
  {
    img: "/assests/bangalore.jpg",
    title: "Bangalore City Tour",
    location: "Karnataka",
    price: 4200,
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 128,
    category: "city",
    featured: true,
  },
  {
    img: "/assests/pondy.jpg",
    title: "Pondicherry Getaway",
    location: "Puducherry",
    price: 3800,
    duration: "4 Days Trip",
    rating: 4.8,
    reviews: 256,
    category: "beach",
    featured: true,
  },
  {
    img: "/assests/kerala.jpg",
    title: "Kerala Backwaters",
    location: "Kerala",
    price: 8500,
    duration: "6 Days Trip",
    rating: 4.9,
    reviews: 412,
    category: "nature",
    featured: true,
  },
  {
    img: "/assests/kodaikanal.jpg",
    title: "Kodaikanal Hills",
    location: "Tamil Nadu",
    price: 5200,
    duration: "5 Days Trip",
    rating: 4.7,
    reviews: 189,
    category: "hills",
    featured: false,
  },
  {
    img: "/assests/mysore.jpg",
    title: "Mysore Palace Tour",
    location: "Karnataka",
    price: 4800,
    duration: "4 Days Trip",
    rating: 4.5,
    reviews: 167,
    category: "heritage",
    featured: false,
  },
  {
    img: "/assests/tirupathi.jpg",
    title: "Tirupati Pilgrimage",
    location: "Andhra Pradesh",
    price: 3200,
    duration: "2 Days Trip",
    rating: 4.8,
    reviews: 534,
    category: "spiritual",
    featured: true,
  },
  {
    img: "/assests/periyakovil.jpg",
    title: "Thanjavur Temple Tour",
    location: "Tamil Nadu",
    price: 3500,
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 145,
    category: "heritage",
    featured: false,
  },
  {
    img: "/assests/tajmahal.jpg",
    title: "Golden Triangle",
    location: "Delhi-Agra-Jaipur",
    price: 12000,
    duration: "7 Days Trip",
    rating: 4.9,
    reviews: 678,
    category: "heritage",
    featured: true,
  },
  {
    img: "/assests/dhanushkodi.jpg",
    title: "Dhanushkodi Explorer",
    location: "Tamil Nadu",
    price: 4500,
    duration: "4 Days Trip",
    rating: 4.7,
    reviews: 203,
    category: "beach",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Packages", icon: "🌍" },
  { id: "beach", label: "Beaches", icon: "🏖️" },
  { id: "hills", label: "Hill Stations", icon: "⛰️" },
  { id: "heritage", label: "Heritage", icon: "🏛️" },
  { id: "spiritual", label: "Spiritual", icon: "🙏" },
  { id: "nature", label: "Nature", icon: "🌿" },
  { id: "city", label: "City Tours", icon: "🏙️" },
];

export default function TourPackages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    // Filter by search
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            🎒 Explore Amazing Packages
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tour Packages
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Discover handpicked travel experiences across India. From serene
            beaches to majestic mountains.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search destinations, packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white shadow-xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters & Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white rounded-2xl p-4 shadow">
          <div className="flex items-center gap-4">
            <span className="text-gray-500">
              {filteredPackages.length} packages found
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={300}
                  className="object-cover h-56 w-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {p.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                    ⭐ Featured
                  </span>
                )}

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">{p.rating}</span>
                </div>

                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {p.location}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {p.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {p.reviews} reviews
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {p.rating} ({p.reviews})
                    </span>
                  </div>
                  <Link
                    href="/bookings"
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No packages found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a custom itinerary just for you!
          </p>
          <Link
            href="/bookings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Custom Trip Request
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
