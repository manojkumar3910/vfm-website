"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-20">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
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
            <span className="text-gray-500">Privacy Policy</span>
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
            VForce Tourism & Travels ("we", "our", "us") values your privacy and is committed to protecting the personal information you share with us through our website. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or interact with our website.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect the following information when you use our website or contact us:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Travel details such as destination, travel date, pickup location</li>
              <li>Information shared via WhatsApp messages or enquiry forms</li>
              <li>Basic technical data like IP address and browser type (for analytics purposes)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not collect sensitive personal data such as credit/debit card details or banking information through this website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              The information collected is used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>To respond to travel enquiries and booking requests</li>
              <li>To provide tour packages, vehicle rentals, and travel-related services</li>
              <li>To communicate with you via phone or WhatsApp</li>
              <li>To improve our website, services, and customer experience</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. WhatsApp & Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4">
              Our website uses WhatsApp for booking enquiries and customer communication.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>When you click on a WhatsApp link or submit a form, you are redirected to WhatsApp's platform</li>
              <li>Communication through WhatsApp is governed by WhatsApp's own Privacy Policy</li>
              <li>VForce Tourism & Travels is not responsible for the privacy practices of third-party platforms</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Cookies & Analytics
            </h2>
            <p className="text-gray-600 mb-4">
              We may use basic cookies or analytics tools to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Understand website traffic</li>
              <li>Improve performance and user experience</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can choose to disable cookies through your browser settings if you prefer.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-600">
              We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. However, please note that no method of transmission over the internet is completely secure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. User Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Contact us if you have any privacy-related concerns</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Requests can be made using the contact details provided below.
            </p>
          </div>

          {/* Changes Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </div>

          {/* Section 7 - Contact */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns regarding this Privacy Policy, you may contact us:
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
