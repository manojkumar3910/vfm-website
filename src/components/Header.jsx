"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src="/assests/vfm-logo.png" alt="logo" className="h-10 w-10" />
        <h1 className="font-bold text-lg text-gray-800">
          VForce Tourism & Travels of India
        </h1>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/tour-packages">Tour Package</Link>
        <Link href="/bookings">Bookings</Link>
        <Link href="/#about-us" scroll={false}>About Us</Link>
      </nav>

      <button className="text-white bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
        Contact
      </button>
    </header>
  );
}
