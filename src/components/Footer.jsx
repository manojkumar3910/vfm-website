export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t text-sm text-gray-600">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-bold text-blue-700 mb-3">VForce Tourism & Travels of India</h3>
          <p>Book your trip in minutes, get full control for much longer.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">More</h4>
          <ul className="space-y-2">
            <li>Airlines</li>
            <li>Airline Fees</li>
            <li>Low Fare Tips</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-10">
        © All rights reserved @vforce.co
      </p>
    </footer>
  );
}
