"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BookingsPage() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Title */}
      <section className="bg-white min-h-screen flex flex-col items-center">
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Bookings
        </h1>
      </section>

      {/* Vehicle Images */}
      <section className="flex flex-col md:flex-row justify-center gap-10 px-6 md:px-20">
        <div className="w-full md:w-1/3">
          <Image
            src="/assests/traveller.jpg"
            alt="Traveller Van"
            width={500}
            height={350}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src="/assests/inova.jpeg"
            alt="Toyota Innova"
            width={500}
            height={350}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6 md:px-20 text-center">
        <form className="max-w-3xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Contact Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="border border-gray-300 p-3 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Contact Phone"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
