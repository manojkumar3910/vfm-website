"use client";
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const packages = [
  {
    img: '/assets/thanjai.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assets/hero.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assets/dhanushkodi.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assets/hero.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assets/tajmahal.jpg',
    title: 'periya kovil,thanjai',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: '/assets/thanjai.jpg',
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
        <h1 className="font-bold text-4xl mt-12 mb-8">Tour packages</h1>
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

      <section className="w-full flex flex-col items-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          BOOK YOUR DREAM VACAY TODAY!
        </h2>
        <form className="w-full max-w-md flex flex-col gap-3">
          <input type="text" placeholder="Contact name" className="border rounded px-3 py-2" />
          <input type="text" placeholder="Street" className="border rounded px-3 py-2" />
          <div className="flex gap-2">
            <input type="text" placeholder="City" className="border rounded px-3 py-2 w-full" />
            <input type="text" placeholder="Postcode" className="border rounded px-3 py-2 w-full" />
          </div>
          <input type="text" placeholder="Contact Phone" className="border rounded px-3 py-2" />
          <input type="email" placeholder="E-mail" className="border rounded px-3 py-2" />
          <button
            className="bg-blue-600 text-white rounded px-3 py-2 mt-2 font-semibold"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </section>
      <Footer />
      </section>
    </main>
  );
}
