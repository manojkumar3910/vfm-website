"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-40 bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-600 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-teal-300 blur-3xl mix-blend-screen animate-float"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-cyan-400 blur-3xl mix-blend-screen animate-float delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 border border-teal-400/30 text-teal-50 text-sm font-medium mb-4 animate-fade-in-down backdrop-blur-sm">
            Legal Agreement
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Terms & Conditions
          </h1>
          <p className="text-teal-50 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-100">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative px-4 pb-20 -mt-24 z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12 animate-scale-in">

          {/* Breadcrumb & Last Updated */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-teal-600 font-medium">Terms & Conditions</span>
            </div>
            <div className="text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full inline-block">
              Last updated: <span className="text-gray-700 font-semibold">December 22, 2025</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-lg mb-8 border-l-4 border-teal-500 pl-4 italic bg-teal-50/50 py-2 rounded-r-lg">
              By accessing or using the <strong className="text-gray-900">VForce Tourism & Travels</strong> website, you agree to comply with and be bound by the following Terms & Conditions.
            </p>

            <div className="grid gap-12">
              {/* Section 1 */}
              <div className="group">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-700 text-sm">1</span>
                  Acceptance of Terms
                </h2>
                <div className="pl-11">
                  <p className="text-gray-600">
                    By using this website, submitting enquiries, or contacting us via WhatsApp or phone, you agree to these Terms & Conditions. If you do not agree, please refrain from using our website or services.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-700 text-sm">2</span>
                  Services Offered
                </h2>
                <div className="pl-11">
                  <p className="mb-4">VForce Tourism & Travels provides:</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    {["Tour Packages", "Vehicle Rentals", "Booking Assistance"].map((item, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-teal-300 transition-colors">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">All services are subject to availability and confirmation.</p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-700 text-sm">3</span>
                  Booking & Confirmation
                </h2>
                <div className="pl-11">
                  <ul className="space-y-3 list-none pl-0">
                    {[
                      "Submitting a form or WhatsApp enquiry does not guarantee a booking.",
                      "Bookings are confirmed only after availability check by our team.",
                      "Prices and itineraries may change based on demand and season.",
                      "Final confirmation will be shared via WhatsApp or phone."
                    ].map((item, idx) => (
                      <li key={idx} className="flex cross-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-teal-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="group">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-700 text-sm">4</span>
                  Payments & Pricing
                </h2>
                <div className="pl-11 bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li>Payments are handled offline or as instructed during confirmation.</li>
                    <li>This website does not process online payments directly.</li>
                    <li>Prices shown are indicative and subject to change.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 & 6 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-red-500 text-xl">⚠️</span> Cancellation & Refund
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>Policies vary by package/service.</li>
                    <li>Refunds subject to provider rules.</li>
                    <li>VForce Tourism does not guarantee refunds in all cases.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-500 text-xl">🛡️</span> Limitation of Liability
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">We act as a facilitator and are not responsible for:</p>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>Traffic or weather delays.</li>
                    <li>Third-party service issues.</li>
                    <li>Unforseen cancellations.</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="group">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-teal-100 text-teal-700 text-sm">7</span>
                  Governing Law
                </h2>
                <div className="pl-11">
                  <p className="text-gray-600">
                    These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Chennai, Tamil Nadu.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-8 rounded-2xl shadow-lg mt-8 transform hover:-translate-y-1 transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                <p className="opacity-90 mb-6">For any questions regarding these Terms & Conditions, please contact us.</p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm md:text-base">
                  <div>
                    <span className="block opacity-70 text-xs uppercase tracking-wider mb-1">Office</span>
                    <p className="font-medium">No 45, Krishnagar, Noombal,<br />Chennai - 600077</p>
                  </div>
                  <div>
                    <span className="block opacity-70 text-xs uppercase tracking-wider mb-1">Get in Touch</span>
                    <p className="font-medium hover:text-teal-200 transition-colors">
                      <a href="tel:+917397271527">+91 73972 71527</a>
                    </p>
                    <p className="font-medium hover:text-teal-200 transition-colors">
                      <a href="mailto:rameshlawrence453@gmail.com">rameshlawrence453@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
