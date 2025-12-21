"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-20">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-800 font-medium hover:text-blue-600">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> December 22, 2025
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            By accessing or using the VForce Tourism & Travels website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using this website, submitting enquiries, or contacting us via WhatsApp or phone, you agree to these Terms & Conditions. If you do not agree, please refrain from using our website or services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Services Offered
            </h2>
            <p className="text-gray-600 mb-4">
              VForce Tourism & Travels provides:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Tour packages</li>
              <li>Vehicle rentals (Car, Tempo Traveller, Driver services)</li>
              <li>Travel-related enquiry and booking assistance</li>
            </ul>
            <p className="text-gray-600 mt-4">
              All services are subject to availability and confirmation.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Booking & Confirmation
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Submitting a form or WhatsApp enquiry does not guarantee a booking</li>
              <li>Bookings are confirmed only after availability check and confirmation by our team</li>
              <li>Prices, itineraries, and vehicle availability may change based on demand and season</li>
              <li>Final confirmation will be shared via WhatsApp or phone</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Payments & Pricing
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Payments, if applicable, are handled offline or as instructed during confirmation</li>
              <li>The website does not process online payments directly</li>
              <li>Prices shown are indicative and may change due to fuel costs, availability, or service provider policies</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Cancellation & Refund Policy
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Cancellation and refund policies vary depending on the tour package or service</li>
              <li>Any refunds (if applicable) are subject to service provider rules</li>
              <li>VForce Tourism & Travels does not guarantee refunds in all cases</li>
              <li>Customers are advised to clarify cancellation terms at the time of booking</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              VForce Tourism & Travels acts as a service facilitator and shall not be responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Delays caused by traffic, weather, strikes, or natural events</li>
              <li>Loss, damage, or inconvenience caused by third-party service providers</li>
              <li>Changes or cancellations beyond our control</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Customers travel at their own risk.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-600">
              These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Chennai, Tamil Nadu.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Details
            </h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding these Terms & Conditions, please contact:
            </p>
            <div className="text-gray-600 space-y-1">
              <p className="font-semibold text-gray-900">VForce Tourism & Travels</p>
              <p>No 45, Krishnagar, Noombal,Chennai - 600077</p>
              <p className="mt-3">Phone / WhatsApp: +91 73972 71527</p>
              <p>Email: rameshlawrence453@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
