"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";

// Hero slideshow images - Local images
const heroImages = [
  "/assests/tajmahal.jpg",
  "/assests/munnar.jpg",
  "/assests/rameshwaram.jpg",
  "/assests/goa.jpg",
  "/assests/kannyakumari.jpg",
  "/assests/ooty.jpg",
];

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetNum = parseInt(target.replace(/[^0-9]/g, ""));
    const increment = targetNum / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    pickupLocation: "",
    pickupDate: "",
    destination: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
  const [captchaError, setCaptchaError] = useState("");

  // Generate captcha on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: "" });
    setCaptchaError("");
  };

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\s/g, ""))) {
      errors.contactNumber = "Please enter a valid 10-digit number";
    }
    if (!formData.pickupLocation) errors.pickupLocation = "Pickup location is required";
    if (!formData.pickupDate) errors.pickupDate = "Pickup date is required";
    if (!formData.destination) errors.destination = "Destination is required";

    // Validate captcha
    const correctAnswer = captcha.num1 + captcha.num2;
    if (!captcha.answer) {
      setCaptchaError("Please solve the captcha");
      return errors;
    } else if (parseInt(captcha.answer) !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please try again.");
      generateCaptcha();
      return errors;
    }
    setCaptchaError("");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Format the message for WhatsApp
    const message = `*New Travel Enquiry*%0A%0A*Name:* ${formData.name}%0A*Contact Number:* +91 ${formData.contactNumber}%0A*Pickup Location:* ${formData.pickupLocation}%0A*Pickup Date:* ${formData.pickupDate}%0A*Destination:* ${formData.destination}`;

    // WhatsApp number
    const whatsappNumber = "917397271527";

    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setIsSubmitting(false);

    // Reset form and generate new captcha
    setFormData({
      name: "",
      contactNumber: "",
      pickupLocation: "",
      pickupDate: "",
      destination: "",
    });
    generateCaptcha();
  };

  const destinations = [
    {
      img: "/assests/periyakovil.jpg",
      title: "Periya Kovil, Thanjavur",
      duration: "4-5 Days Trip",
      rating: 4.8,
      reviews: 234,
    },
    {
      img: "/assests/tajmahal.jpg",
      title: "Taj Mahal, Agra",
      duration: "4-5 Days Trip",
      rating: 4.9,
      reviews: 567,
    },
    {
      img: "/assests/dhanushkodi.jpg",
      title: "Dhanushkodi",
      duration: "4-5 Days Trip",
      rating: 4.7,
      reviews: 189,
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Best Price Guarantee",
      description: "We offer competitive prices with no hidden fees",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Safe & Secure",
      description: "Your safety is our top priority on every trip",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Handpicked Hotels",
      description: "Carefully selected accommodations for comfort",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Slideshow */}
      {/* Hero Section with Slideshow */}
      <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
        {/* Slideshow Images */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Modern Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "bg-white/30 w-2 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10 pt-16">
          <div className="animate-fade-in-up max-w-5xl mx-auto">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Discover the Soul of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500">
                Incredible India
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              VForce Tourism creates bespoke journeys, offering luxury vehicle rentals and curated tour packages for the discerning traveler.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-5xl glass rounded-3xl p-4 md:p-6 shadow-2xl animate-fade-in-up delay-200 mx-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Where is your next adventure?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-800 placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-800 w-full sm:w-auto"
                />
                <Link
                  href="/tour-packages"
                  className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-900/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find Tours
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5 px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Trending:</span>
              {["Goa", "Munnar", "Ooty", "Kashmir"].map((place) => (
                <button
                  key={place}
                  onClick={() => setSearchQuery(place)}
                  className="px-3 py-1 bg-white/50 border border-white/60 text-gray-600 rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all"
                >
                  {place}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose VForce Tourism?</h2>
            <p className="text-muted-foreground">We go the extra mile to ensure your journey is comfortable, safe, and memorable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div id="about-us" className="scroll-mt-32 order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-down">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                About VForce Tourism
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up">
                Crafting Unforgettable
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">
                  Travel Experiences
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed animate-fade-in-up animation-delay-200">
                VForce Tourism & Travels stands as a beacon of excellence in the Indian tourism industry.
                We are more than just a travel agency; we are your partners in exploration. From luxury
                tempo travellers to curated family packages in Ooty, Munnar, and Goa, we ensure every mile
                you travel is filled with comfort and joy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
                <Link
                  href="/tour-packages"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Packages
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-10 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">5k+</h4>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium">Happy Travelers</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">50+</h4>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium">Destinations</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">24/7</h4>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-medium">Support</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 animate-scale-in">
              {/* Logo Container with Modern Glass Morphism Design */}
              <div className="relative group">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[120%] h-[120%] rounded-full border-2 border-dashed border-indigo-200/50 animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[140%] h-[140%] rounded-full border border-purple-200/30 animate-reverse-spin"></div>
                </div>
                
                {/* Floating Orbs */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse delay-700"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-xl opacity-40 animate-bounce"></div>
                
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl p-10 lg:p-14 shadow-[0_8px_40px_rgba(99,102,241,0.15)] border border-white/80 group-hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)] transition-all duration-700">
                  {/* Inner Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-indigo-400/40 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-400/40 rounded-br-3xl"></div>
                  
                  {/* Logo */}
                  <div className="relative z-10 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out">
                    <Image
                      src="/assests/vfm-logo.png"
                      alt="VForce Tourism Logo"
                      width={600}
                      height={500}
                      className="object-contain w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 rounded-3xl opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-indigo-100 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              Explore India
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Handpicked destinations offering the perfect blend of culture, nature, and relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg max-w-[fit-content]">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-500 font-medium">{item.reviews} reviews</span>
                    <Link
                      href="/bookings"
                      className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Book Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-700 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              View All Packages
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pr-10 lg:pt-10">
              <span className="inline-block px-3 py-1 bg-blue-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
                Ready to Start Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Adventure?</span>
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Fill out the form below and our travel experts will get back to you within 24 hours with a personalized itinerary tailored to your preferences.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Call Anytime</p>
                    <p className="text-xl font-bold text-gray-900">+91 7397271527</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white text-green-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">WhatsApp Support</p>
                    <p className="text-xl font-bold text-gray-900">+91 7397271527</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className={`w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="10-digit Mobile"
                      maxLength={10}
                      className={`w-full border ${formErrors.contactNumber ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    />
                    {formErrors.contactNumber && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.contactNumber}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      placeholder="City/Hotel"
                      className={`w-full border ${formErrors.pickupLocation ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    />
                    {formErrors.pickupLocation && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.pickupLocation}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full border ${formErrors.pickupDate ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800`}
                    />
                    {formErrors.pickupDate && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.pickupDate}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Where do you want to visit?"
                    className={`w-full border ${formErrors.destination ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  />
                  {formErrors.destination && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.destination}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Check <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl border border-gray-200">
                      <span className="text-lg font-bold text-gray-600">{captcha.num1}</span>
                      <span className="text-lg font-bold text-primary">+</span>
                      <span className="text-lg font-bold text-gray-600">{captcha.num2}</span>
                      <span className="text-lg font-bold text-gray-400">=</span>
                    </div>
                    <input
                      type="number"
                      value={captcha.answer}
                      onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                      placeholder="?"
                      className={`w-20 border ${captchaError ? 'border-red-500' : 'border-gray-200'} bg-gray-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-center text-lg font-bold`}
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
                      title="Refresh captcha"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                  {captchaError && <p className="text-red-500 text-xs mt-1 font-medium">{captchaError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                >
                  <svg
                    className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isSubmitting ? (
                      <>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                      </>
                    ) : (
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    )}
                  </svg>
                  {isSubmitting ? "Sending..." : "Send Inquiry via WhatsApp"}
                </button>
                <p className="text-center text-gray-500 text-xs">
                  We respect your privacy. All fields marked with <span className="text-red-500">*</span> are mandatory.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917397271527?text=Hi%2C%20I%27m%20interested%20in%20your%20travel%20packages.%20Can%20you%20help%20me%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50"></div>
          
          {/* Main button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg
              className="w-9 h-9 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
              Chat with us!
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        </div>
      </a>
    </main>
  );
}
