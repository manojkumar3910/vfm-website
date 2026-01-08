"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [counters, setCounters] = useState({ years: 0, customers: 0, trips: 0, cities: 0 });

  useEffect(() => {
    const targets = { years: 5, customers: 5000, trips: 10000, cities: 50 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        years: Math.round((targets.years / steps) * step),
        customers: Math.round((targets.customers / steps) * step),
        trips: Math.round((targets.trips / steps) * step),
        cities: Math.round((targets.cities / steps) * step),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section matching User Image */}
      <section className="relative pt-32 pb-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#5b21b6]">

        {/* Subtle Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up drop-shadow-lg">
            Your Journey,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ec4899] drop-shadow-none">
              Our Passion
            </span>
          </h1>

          <p className="text-lg md:text-xl text-purple-100/90 max-w-3xl mx-auto mb-16 font-light leading-relaxed animate-fade-in-up animation-delay-200">
            From a small acting-driver service in Chennai to a trusted travel partner across India — we're driven by one goal: making your travels safe, easy, and memorable.
          </p>

          {/* Stats Cards - Purple Glass Effect */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-300">
            {[
              { value: "5+", label: "Years of Service" },
              { value: "5,000+", label: "Happy Customers" },
              { value: "10,000+", label: "Successful Trips" },
              { value: "50+", label: "Cities Covered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#5b21b6]/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 min-w-[160px] md:min-w-[200px] shadow-xl hover:bg-[#5b21b6]/40 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-purple-200 text-xs md:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* Our Story - Timeline Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              OUR STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              The Journey So Far
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>

              {/* Timeline Items */}
              {[
                {
                  year: "2020",
                  title: "The Beginning",
                  desc: "Started as a small acting-driver service in Chennai with just one vehicle and a dream to make travel safer.",
                  icon: "🚗",
                  color: "blue"
                },
                {
                  year: "2021",
                  title: "Growing Trust",
                  desc: "Expanded to hotel booking and tour planning. Customers began trusting us for complete travel support.",
                  icon: "🏨",
                  color: "purple"
                },
                {
                  year: "2022",
                  title: "South India Coverage",
                  desc: "Became experts in Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana routes.",
                  icon: "🗺️",
                  color: "indigo"
                },
                {
                  year: "2023-24",
                  title: "Expanding Horizons",
                  desc: "Started extending services towards North India. Building a network of trusted drivers nationwide.",
                  icon: "🌟",
                  color: "pink"
                },
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                      <span className="text-5xl mb-4 block">{item.icon}</span>
                      <span className={`inline-block px-3 py-1 bg-${item.color}-100 text-${item.color}-600 rounded-full text-sm font-semibold mb-3`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Creative Card */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-[3rem] p-1">
              <div className="bg-white rounded-[2.8rem] p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">R</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      FOUNDER & PROPRIETOR
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mr. Ramesh</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Built this service with dedication, honesty, and a passion for helping people experience India without stress.
                      His vision is simple — to make every journey safe, comfortable, and memorable.
                    </p>
                    <blockquote className="relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-blue-200 font-serif">"</span>
                      <p className="text-xl italic text-gray-700 pl-6">
                        Your trust is our greatest reward. Every happy customer inspires us to do better.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Provide safe, reliable, and friendly driving services for everyone
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Make every customer feel relaxed and in good hands
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Deliver quality service with transparency and human connection
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Become India's most trusted acting-driver company
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Expand services across every major city in India
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Build a network of trained, responsible drivers nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Animated Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: "🚗",
                title: "Acting Driver",
                desc: "Professional drivers for city travel, outstation trips, business meetings, and family functions",
                gradient: "from-blue-500 to-cyan-500",
                bg: "from-blue-50 to-cyan-50"
              },
              {
                icon: "🏨",
                title: "Hotel Booking",
                desc: "Comfortable and budget-friendly hotels across India with special South Indian expertise",
                gradient: "from-purple-500 to-pink-500",
                bg: "from-purple-50 to-pink-50"
              },
              {
                icon: "🗺️",
                title: "Tour Planning",
                desc: "Customised packages for temples, hill stations, beaches, and heritage sites",
                gradient: "from-orange-500 to-red-500",
                bg: "from-orange-50 to-red-50"
              },
              {
                icon: "🛡️",
                title: "Safe Travel",
                desc: "Your safety and comfort are always our highest priority on every journey",
                gradient: "from-green-500 to-emerald-500",
                bg: "from-green-50 to-emerald-50"
              },
            ].map((service, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${service.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Gradient Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              What makes us different from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "✅", text: "100% trustworthy and experienced drivers" },
              { icon: "🗺️", text: "Safe driving with local route knowledge" },
              { icon: "💬", text: "Friendly, customer-first approach" },
              { icon: "💰", text: "Affordable pricing with no hidden charges" },
              { icon: "⚡", text: "Quick response and easy booking" },
              { icon: "❤️", text: "Started from real needs, grown with genuine service" },
            ].map((item, index) => (
              <div key={index} className="group flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Contact us today for safe, reliable, and comfortable travel services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917397271527"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+917397271527"
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200 hover:border-blue-300"
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
