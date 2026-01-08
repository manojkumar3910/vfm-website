import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VForce Tourism & Travels - Best Travel Agency | Tour Packages & Vehicle Booking",
  description: "VForce Tourism & Travels is a trusted travel agency offering tour packages, tempo traveller booking, car rental, and cab booking services. Explore Kerala, Goa, Ooty, Munnar tours. Best tourism services near you!",
  keywords: "travel agency, tour packages, vehicle booking, cab booking, tourism services, tempo traveller, car rental, driver service, tempo traveller booking, tour packages, family tour packages, holiday packages, weekend trips, travel agency near me, tour operator near me, Goa tour package, Munnar trip, Ooty tour, Kerala tour packages",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "VForce Tourism & Travels - Best Travel Agency",
    description: "Book tour packages, tempo traveller, car rental & cab services. Trusted travel agency for tours.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
