// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          Contact K2 Natural Trust
        </h1>

        <a
          href="https://wa.me/923424451804"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-900 text-white font-semibold py-4 rounded-xl mb-4 hover:bg-yellow-700 transition-colors text-lg sm:text-xl"
        >
          WhatsApp: 03424451804
        </a>

        <a
          href="https://wa.me/923554519875"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-900 text-white font-semibold py-4 rounded-xl mb-4 hover:bg-yellow-700 transition-colors text-lg sm:text-xl"
        >
          WhatsApp: 03554519875
        </a>

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/profile.php?id=61584141869133"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-900 text-white font-semibold py-4 rounded-xl mb-4 hover:bg-yellow-700 transition-colors text-lg sm:text-xl"
        >
          Facebook: K2 Natural Trust Salajeet
        </a>

        {/* Email Button */}
        <a
          href="mailto:zahidhussain1220@yahoo.com?subject=Inquiry%20from%20QR%20Code"
          className="block bg-blue-900 text-white font-semibold py-4 rounded-xl mb-4 hover:bg-yellow-700 transition-colors text-lg sm:text-xl"
        >
          Send Email
        </a>
      </div>
    </div>
  );
}
