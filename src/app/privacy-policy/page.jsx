"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Banner with Pattern */}
      <section className="relative pt-32 pb-40 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl mix-blend-multiply animate-float"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-green-400 blur-3xl mix-blend-multiply animate-float delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-100 text-sm font-medium mb-4 animate-fade-in-down backdrop-blur-sm">
            Legal & Privacy
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-100">
            We are committed to protecting your personal information and your right to privacy.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="relative px-4 pb-20 -mt-24 z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12 animate-scale-in">

          {/* Breadcrumb & Last Updated */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-600 font-medium">Privacy Policy</span>
            </div>
            <div className="text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full inline-block">
              Last updated: <span className="text-gray-700 font-semibold">December 22, 2025</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-lg mb-8">
              At <strong className="text-gray-900">VForce Tourism & Travels</strong> ("we", "our", "us"), we value the trust you place in us. This Privacy Policy details how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <div className="grid gap-12">
              {/* Section 1 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">1</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Information We Collect</h2>
                    <p className="mb-4">We may collect the following information when you use our website or contact us:</p>
                    <ul className="space-y-3 list-none pl-0">
                      {[
                        "Name",
                        "Phone number",
                        "Email address",
                        "Travel details (destination, dates, pickup location)",
                        "Information shared via WhatsApp or enquiry forms",
                        "Basic technical data (IP address, browser type) for analytics"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-sm">
                      <strong>Note:</strong> We do not collect sensitive personal data such as credit/debit card details or banking information through this website.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">2</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">How We Use Your Information</h2>
                    <p className="mb-4">The information collected is used for the following purposes:</p>
                    <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                      {[
                        "Responding to travel enquiries",
                        "Processing booking requests",
                        "Providing tour packages & rentals",
                        "Customer communication via WhatsApp",
                        "Improving website services",
                        "Enhancing user experience"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">3</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">WhatsApp & Third-Party Services</h2>
                    <p className="mb-4">Our website integrates WhatsApp for seamless booking enquiries.</p>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li>Redirects to WhatsApp's platform happen when you click our contact links.</li>
                        <li>Communication there is governed by <strong>WhatsApp's Privacy Policy</strong>.</li>
                        <li>We are not responsible for the privacy practices of external platforms.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">4</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Cookies & Analytics</h2>
                    <p className="mb-4">We may use basic cookies to understand website traffic and improve user experience. You can choose to disable cookies through your browser settings if you prefer.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 & 6 Combined visually */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Data Security
                  </h3>
                  <p className="text-sm text-gray-600">We take reasonable steps to protect your personal information from unauthorized access. However, no internet transmission is 100% secure.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    User Rights
                  </h3>
                  <p className="text-sm text-gray-600">You have the right to request access, correction, or deletion of your data. Contact us for any privacy-related concerns.</p>
                </div>
              </div>

              {/* Changes Section */}
              <div className="border-t pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Changes to This Policy</h2>
                <p className="text-gray-600">We may update this Privacy Policy from time to time. Revisions will be posted here.</p>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-4">Questions? Contact Us</h2>
                <p className="opacity-90 mb-6">If you have any concerns regarding this Privacy Policy, please reach out to us.</p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm md:text-base">
                  <div>
                    <span className="block opacity-70 text-xs uppercase tracking-wider mb-1">Address</span>
                    <p className="font-medium">No 45, Krishnagar, Noombal,<br />Chennai - 600077</p>
                  </div>
                  <div>
                    <span className="block opacity-70 text-xs uppercase tracking-wider mb-1">Get in Touch</span>
                    <p className="font-medium hover:text-blue-200 transition-colors">
                      <a href="tel:+917397271527">+91 73972 71527</a>
                    </p>
                    <p className="font-medium hover:text-blue-200 transition-colors">
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
