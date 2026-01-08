"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/tour-packages", label: "Tour Packages" },
    { href: "/bookings", label: "Bookings" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass shadow-sm py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/assests/vfm-logo.png"
                alt="VForce Tourism"
                fill
                className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                VForce Tourism
              </h1>
              <span className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Travels of India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 ${isScrolled
                    ? 'text-gray-800 hover:bg-gray-100/80 hover:text-primary'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                  : 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                }`}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 rounded transition-all duration-300 bg-current ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 rounded transition-all duration-300 bg-current ${isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`w-full h-0.5 rounded transition-all duration-300 bg-current ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="glass rounded-2xl p-4 flex flex-col gap-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-700 font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-md active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
