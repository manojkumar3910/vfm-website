"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/assests/airport.jpg"
          alt="Airport view"
          fill
          className="object-cover"
        />
        <button className="absolute bottom-6 right-6 bg-[#E86A33] text-white px-6 py-3 font-semibold rounded shadow-md hover:bg-[#c95828]">
          ENQUIRY NOW
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div id="about-us" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ABOUT US</h2>
            <p className="text-gray-600 mb-6">
              And produce say the ten moments parties. Simple innate summer fat
              appear basket his desire joy. Outward clothes promise at gravity
              do excited. Sufficient particular impossible by reasonable oh
              expression is. Yet preference connection unpleasant yet
              melancholy but end appearance.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700">
                Learn More
              </button>
              <button className="border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-100">
                ▶ Watch Video
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Completed Projects", value: "1000+" },
              { label: "On Going Projects", value: "250+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Offices through out GLOB", value: "25" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 text-center shadow rounded-lg"
              >
                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 px-6 md:px-20 text-center bg-gray-50">
        <h3 className="text-sm uppercase tracking-wide text-gray-500">
          Top Selling
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Top Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/assests/periyakovil.jpg",
              title: "Periya Kovil, Thanjavur",
              price: "$5.42k",
              duration: "10 Days Trip",
            },
            {
              img: "/assests/tajmahal.jpg",
              title: "Taj Mahal, Delhi",
              price: "$4.2k",
              duration: "12 Days Trip",
            },
            {
              img: "/assests/dhanushkodi.jpg",
              title: "Dhanushkodi",
              price: "$15k",
              duration: "28 Days Trip",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-1">{item.price}</p>
                <p className="text-sm text-gray-500">✈ {item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-8">
          BOOK YOUR DREAM VACAY TODAY!
        </h2>
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
