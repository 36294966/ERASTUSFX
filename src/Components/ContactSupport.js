import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      {/* Contact card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 mx-auto transition-all duration-500 transform hover:scale-105 hover:shadow-3xl border-4 border-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-300 drop-shadow-lg">
          Contact Information
        </h2>
        
        {/* Contact Details List */}
        <div className="space-y-6">
          
          {/* Phone Number */}
          <div className="flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-300 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl">
            <div className="bg-blue-600 p-3 rounded-lg">
              <FaPhone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold">Phone Number</p>
              <p className="text-sm sm:text-lg text-blue-100">+254 715657800</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-300 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl">
            <div className="bg-blue-600 p-3 rounded-lg">
              <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold">Email Address</p>
              <p className="text-sm sm:text-lg text-blue-100">erastusngamau90@gmail.com</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-300 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl">
            <div className="bg-blue-600 p-3 rounded-lg">
              <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold">Location</p>
              <p className="text-sm sm:text-lg text-blue-100">Nairobi, Kenya</p>
            </div>
          </div>
          
          {/* WhatsApp - clickable */}
          <a
            href="https://wa.me/254714287705"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-green-500/80 rounded-xl hover:bg-green-400 transition-all duration-300 cursor-pointer border-2 border-green-400 hover:border-green-300 shadow-lg hover:shadow-xl"
          >
            <div className="bg-green-600 p-3 rounded-lg">
              <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold">WhatsApp</p>
              <p className="text-sm sm:text-lg text-green-100">+254 715657800</p>
            </div>
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 p-4 bg-blue-500/50 rounded-xl border-2 border-blue-400">
          <p className="text-center text-yellow-300 font-semibold text-lg">
            📞 We're available 24/7 for your inquiries!
          </p>
          <p className="text-center text-blue-100 mt-2">
            Call or WhatsApp us for immediate assistance
          </p>
        </div>
      </div>

      {/* WhatsApp fixed button - Same as Home and Booking pages */}
      <a
        href="https://wa.me/254714287705"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 md:bottom-10 md:right-6 bg-green-500 text-white p-4 md:p-6 rounded-full shadow-2xl hover:bg-green-400 transition-all transform hover:scale-110 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-4xl" />
      </a>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Contact;

