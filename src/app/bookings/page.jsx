"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const vehicles = [
  {
    id: "traveller",
    name: "Tempo Traveller",
    image: "/assests/traveller.jpg",
    capacity: "12-17 Seater",
    features: ["AC", "Push-back Seats", "Music System", "Luggage Space"],
    description: "Perfect for group trips and family outings",
  },
  {
    id: "innova",
    name: "Car",
    image: "/assests/inova.jpeg",
    capacity: "6-7 Seater",
    features: ["AC", "Premium Interior", "Captain Seats", "Spacious"],
    description: "Comfortable SUV for small groups",
  },
  {
    id: "acting-driver",
    name: "Acting Driver",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    capacity: "Your Vehicle",
    features: ["Experienced Driver", "Know Local Routes", "Flexible Timing", "Safe Driving"],
    description: "Professional driver for your own vehicle",
  },
  {
    id: "combo",
    name: "Tempo Traveller + Car",
    image: "/assests/traveller.jpg",
    capacity: "18-24 Seater (Combined)",
    features: ["Both Vehicles", "Large Groups", "Flexible Seating", "Best Value"],
    description: "Combo package with both Tempo Traveller and Car for large groups",
  },
];

export default function BookingsPage() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    returnDate: "",
    passengers: "2",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate captcha
    const correctAnswer = captcha.num1 + captcha.num2;
    if (!captcha.answer) {
      setCaptchaError("Please solve the captcha");
      return;
    } else if (parseInt(captcha.answer) !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please try again.");
      generateCaptcha();
      return;
    }
    setCaptchaError("");

    setIsSubmitting(true);

    // Get selected vehicle name
    const vehicleName = selectedVehicle
      ? vehicles.find((v) => v.id === selectedVehicle)?.name
      : "Not selected";

    // Format the message for WhatsApp
    const message = `*New Vehicle Booking Request*%0A%0A*Personal Details:*%0A• Name: ${formData.name}%0A• Phone: ${formData.phone}%0A• Email: ${formData.email}%0A%0A*Trip Details:*%0A• Vehicle: ${vehicleName}%0A• Pickup Location: ${formData.pickupLocation}%0A• Drop Location: ${formData.dropLocation}%0A• Pickup Date: ${formData.pickupDate}%0A• Return Date: ${formData.returnDate}%0A• Passengers: ${formData.passengers}%0A%0A*Special Requests:*%0A${formData.specialRequests || "None"}`;

    // WhatsApp number
    const whatsappNumber = "917397271527";

    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setIsSubmitting(false);
    setShowSuccess(true);
    generateCaptcha();

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      pickupLocation: "",
      dropLocation: "",
      pickupDate: "",
      returnDate: "",
      passengers: "2",
      specialRequests: "",
    });
    setSelectedVehicle(null);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-teal-900/85 to-emerald-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">


          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-200">With Comfort</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light animate-fade-in-up animation-delay-200">
            From luxury Tempo Travellers for family trips to premium sedans for business.
            Experience the joy of hassle-free travel.
          </p>


        </div>

        {/* Decorative fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Vehicle Selection */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Step 1
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Select Your Vehicle
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Choose the perfect vehicle that suits your travel needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => setSelectedVehicle(vehicle.id)}
              className={`relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${selectedVehicle === vehicle.id
                ? "ring-4 ring-green-500 shadow-2xl shadow-green-500/20 scale-[1.02]"
                : "shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {selectedVehicle === vehicle.id && (
                <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                  <p className="text-green-300">{vehicle.capacity}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{vehicle.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div
                    className={`px-4 py-2 rounded-full font-medium ${selectedVehicle === vehicle.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {selectedVehicle === vehicle.id ? "Selected" : "Select"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Step 2
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Enter Your Details
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Fill in your trip details and we'll get back to you within 30
              minutes
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-4 animate-fade-in">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-800">
                  Booking Request Submitted!
                </h3>
                <p className="text-green-600 text-sm">
                  Our team will contact you shortly with a confirmation.
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-3xl p-8 md:p-10"
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Trip Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter pickup address"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Drop Location *
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
                    <input
                      type="text"
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter destination"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date *
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                    min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Passengers
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {[...Array(17)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selected Vehicle
                  </label>
                  <div className="w-full border border-gray-200 p-4 rounded-xl bg-gray-100">
                    {selectedVehicle
                      ? vehicles.find((v) => v.id === selectedVehicle)?.name
                      : "Please select a vehicle above"}
                  </div>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Additional Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requirements or requests..."
                  className="w-full border border-gray-200 p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Captcha */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                Verify You're Human
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-100 px-6 py-4 rounded-xl">
                  <span className="text-xl font-bold text-gray-700">{captcha.num1}</span>
                  <span className="text-xl font-bold text-blue-600">+</span>
                  <span className="text-xl font-bold text-gray-700">{captcha.num2}</span>
                  <span className="text-xl font-bold text-gray-500">=</span>
                </div>
                <input
                  type="number"
                  value={captcha.answer}
                  onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                  placeholder="?"
                  className={`w-28 border ${captchaError ? 'border-red-500' : 'border-gray-200'} p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center text-lg font-semibold`}
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  title="Refresh captcha"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              {captchaError && <p className="text-red-500 text-sm mt-2">{captchaError}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !selectedVehicle}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${isSubmitting || !selectedVehicle
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit Booking Request"
              )}
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              By submitting, you agree to our terms and conditions
            </p>
          </form>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Book With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "🚗",
                title: "Well-Maintained Fleet",
                desc: "All vehicles are regularly serviced and sanitized",
              },
              {
                icon: "👨‍✈️",
                title: "Professional Drivers",
                desc: "Experienced, verified, and courteous drivers",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "No hidden charges, pay what you see",
              },
              {
                icon: "🔒",
                title: "Safe & Secure",
                desc: "GPS tracked vehicles with 24/7 support",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
