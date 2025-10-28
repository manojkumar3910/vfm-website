"use client";
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const packages = [
  {
    img: '/assests/bangalore.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/pondy.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/kerala.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/kodaikanal.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/mysore.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/tirupathi.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/periyakovil.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/tajmahal.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assests/dhanushkodi.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  }
];

export default function TourPackages() {
  return (
    <main>
      <Header />
      <section className="bg-white min-h-screen flex flex-col items-center">
        <h1 className="font-bold text-4xl text-black mt-12 mb-8">Tour packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {packages.map((p, i) => (
            <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden w-72"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={288}
              height={200}
              className="object-cover h-48 w-full"
            />
            <div className="px-4 pt-3 pb-4">
              <div className="font-medium text-gray-800">{p.title}</div>
              <div className="text-gray-700 font-semibold text-lg">{p.price}</div>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span className="material-icons text-xs mr-1">location_on</span>
                {p.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

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
      <Footer />
      </section>
    </main>
  );
}
