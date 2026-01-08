"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useMemo } from "react";

const packages = [
  {
    img: "/assests/kannyakumari.jpg",
    title: "Kanyakumari Sunrise",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.8,
    reviews: 512,
    category: "spiritual",
  },
  {
    img: "/assests/Madurai_Meenakshi.jpg",
    title: "Madurai Meenakshi Temple",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.9,
    reviews: 623,
    category: "spiritual",
  },
  {
    img: "/assests/periyakovil.jpg",
    title: "Thanjavur Big Temple",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.8,
    reviews: 345,
    category: "spiritual",
  },
  {
    img: "/assests/srirangam.jpg",
    title: "Srirangam Temple Tour",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.7,
    reviews: 278,
    category: "spiritual",
  },
  {
    img: "/assests/palani.jpeg",
    title: "Palani Murugan Temple",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.8,
    reviews: 445,
    category: "spiritual",
  },
  {
    img: "/assests/chithambaran.jpg",
    title: "Chidambaram Natarajar Temple",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.6,
    reviews: 198,
    category: "spiritual",
  },
  {
    img: "/assests/cutrallam.jpg",
    title: "Kutralam Waterfalls & Temple",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.7,
    reviews: 367,
    category: "nature",
  },
  {
    img: "/assests/vellakanni.jpg",
    title: "Velankanni Church",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.8,
    reviews: 534,
    category: "spiritual",
  },
  {
    img: "/assests/kodaikanal.jpg",
    title: "Kodaikanal Hills",
    location: "Tamil Nadu",
    duration: "4 Days Trip",
    rating: 4.8,
    reviews: 678,
    category: "hills",
  },
  {
    img: "/assests/Yercaud_lake.jpg",
    title: "Yercaud",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 234,
    category: "hills",
  },
  {
    img: "/assests/ooty.jpg",
    title: "Ooty",
    location: "Tamil Nadu",
    duration: "4 Days Trip",
    rating: 4.9,
    reviews: 789,
    category: "hills",
  },
  {
    img: "/assests/valparai.jpg",
    title: "Valparai",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.7,
    reviews: 345,
    category: "hills",
  },
  {
    img: "/assests/megamalai.jpg",
    title: "Meghamalai Wildlife",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 189,
    category: "nature",
  },
  {
    img: "/assests/kerala.jpg",
    title: "Kerala Backwaters",
    location: "Kerala",
    duration: "5 Days Trip",
    rating: 4.9,
    reviews: 892,
    category: "nature",
  },
  {
    img: "/assests/munnar.jpg",
    title: "Munnar Tea Plantations",
    location: "Kerala",
    duration: "4 Days Trip",
    rating: 4.9,
    reviews: 756,
    category: "hills",
  },
  {
    img: "/assests/wayanad.jpg",
    title: "Wayanad Adventure",
    location: "Kerala",
    duration: "4 Days Trip",
    rating: 4.8,
    reviews: 534,
    category: "nature",
  },
  {
    img: "/assests/Sabarimala kerala.jpg",
    title: "Sabarimala Pilgrimage",
    location: "Kerala",
    duration: "3 Days Trip",
    rating: 4.9,
    reviews: 923,
    category: "spiritual",
  },
  {
    img: "/assests/varkala.jpg",
    title: "Varkala Beach & Temple",
    location: "Kerala",
    duration: "3 Days Trip",
    rating: 4.7,
    reviews: 423,
    category: "beach",
  },
  {
    img: "/assests/wagamon.jpg",
    title: "Vagamon Hills",
    location: "Kerala",
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 267,
    category: "hills",
  },
  {
    img: "/assests/tirupathi.jpg",
    title: "Tirupati Balaji Darshan",
    location: "Andhra Pradesh",
    duration: "2 Days Trip",
    rating: 4.9,
    reviews: 1234,
    category: "spiritual",
  },
  {
    img: "/assests/mysore.jpg",
    title: "Mysore Palace Tour",
    location: "Karnataka",
    duration: "3 Days Trip",
    rating: 4.8,
    reviews: 567,
    category: "spiritual",
  },
  {
    img: "/assests/pondicheery.jpeg",
    title: "Pondicherry French Colony",
    location: "Puducherry",
    duration: "3 Days Trip",
    rating: 4.8,
    reviews: 478,
    category: "beach",
  },
  {
    img: "/assests/dhanushkodi.jpg",
    title: "Dhanushkodi Ghost Town",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.7,
    reviews: 345,
    category: "beach",
  },
  {
    img: "/assests/goa.jpg",
    title: "Goa Beach Paradise",
    location: "Goa",
    duration: "5 Days Trip",
    rating: 4.9,
    reviews: 1023,
    category: "beach",
  },
  {
    img: "/assests/rameshwaram.jpg",
    title: "Rameshwaram Pilgrimage",
    location: "Tamil Nadu",
    duration: "3 Days Trip",
    rating: 4.9,
    reviews: 456,
    category: "spiritual",
  },
  {
    img: "/assests/thiruvanamalai.jpg",
    title: "Thiruvannamalai & Girivalam",
    location: "Tamil Nadu",
    duration: "2 Days Trip",
    rating: 4.8,
    reviews: 389,
    category: "spiritual",
  },
  {
    img: "/assests/bangalore.jpg",
    title: "Bangalore City Tour",
    location: "Karnataka",
    duration: "3 Days Trip",
    rating: 4.6,
    reviews: 412,
    category: "nature",
  },
];

const categories = [
  { id: "all", label: "All Packages", icon: "🌍" },
  { id: "beach", label: "Beaches", icon: "🏖️" },
  { id: "hills", label: "Hill Stations", icon: "⛰️" },
  { id: "spiritual", label: "Spiritual", icon: "🙏" },
  { id: "nature", label: "Nature", icon: "🌿" },
];

export default function TourPackages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Background Image */}
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Find Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Adventure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light animate-fade-in-up animation-delay-200">
            From the misty hills of Munnar to the pristine beaches of Goa. Discover packages designed for every kind of traveler.
          </p>

          <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full group-hover:bg-white/30 transition-all duration-500"></div>
              <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-full p-2 shadow-2xl ring-1 ring-white/20">
                <div className="pl-6 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search destinations (e.g. 'Ooty', 'Temple', 'Kerala')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none text-lg font-medium"
                />
                <button className="hidden md:block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/50 transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories as floating cards overlapping the bottom */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white rounded-2xl p-4 shadow">
          <div className="flex items-center gap-4">
            <span className="text-gray-500">
              {filteredPackages.length} packages found
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.img}
                  alt={p.title}
                  className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">{p.rating}</span>
                </div>

                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {p.location}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.duration}
                  </span>
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
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

        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No packages found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
