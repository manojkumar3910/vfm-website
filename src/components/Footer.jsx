"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      {/* Newsletter Section */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join Our Travel Community
              </h3>
              <p className="text-slate-400">
                Get exclusive deals, refined tour packages, and secret travel tips delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto gap-3"
            >
              <div className="relative flex-1 md:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/assests/vfm-logo.png"
                  alt="VForce Tourism"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">VForce Tourism</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Travels of India</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Your premium partner for unforgettable journeys. We specialize in crafting personalized tour packages, providing luxury vehicle rentals, and ensuring seamless travel experiences across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Tour Packages", href: "/tour-packages" },
                { label: "Bookings", href: "/bookings" },
                { label: "About Us", href: "/#about" }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Services (Optional/Placeholder) -> Using Contact for now or Services */}


          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400 text-sm leading-relaxed">
                  No 45, Krishnagar, Noombal,<br />Chennai - 600077
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-400 text-sm font-medium">+91 7397271527</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-400 text-sm">rameshlawrence453@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} VForce Tourism & Travels. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-slate-500 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
