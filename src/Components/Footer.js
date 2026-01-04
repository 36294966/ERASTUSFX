import React from "react";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGoogle } from "react-icons/fa";
import Logo from "../Assests/erastuslogo.png";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white flex flex-col justify-between min-h-[200px]">
      {/* Upper section with contact info */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo - LEFT SIDE */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0 md:mr-8">
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition duration-500 animate-pulse"></div>

            {/* Logo container with border gradient */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-1 rounded-full">
              <img
                src={Logo}
                alt="ErastusFX Logo"
                className="w-40 h-40 object-cover cursor-pointer transition-all duration-500 
                         group-hover:scale-105 group-hover:rotate-2 group-hover:opacity-90 
                         rounded-full border-4 border-gray-800 shadow-2xl"
              />
            </div>

            {/* Optional badge/decoration */}
            <div
              className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 
                          rounded-full flex items-center justify-center shadow-lg animate-bounce"
            >
              <span className="text-xs font-bold text-gray-800">FX</span>
            </div>
          </div>
        </div>

        {/* Contact Info - RIGHT SIDE */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhone className="w-6 h-6 text-blue-400" />
            <div className="flex flex-col text-left">
              <span className="font-semibold">Phone:</span>
              <span>0715657800</span>
            </div>
          </div>

          {/* Gmail with icon in blue */}
          <div className="flex items-center space-x-4">
            <FaGoogle className="w-6 h-6 text-blue-400" />
            <div className="flex flex-col text-left">
              <span className="font-semibold">Gmail:</span>
              <span>erastusngamau90@gmail.com</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
            <div className="flex flex-col text-left">
              <span className="font-semibold">Location:</span>
              <span>Nairobi</span>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254715657800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-green-400 transition"
          >
            <FaWhatsapp className="w-6 h-6 text-green-500" />
            <div className="flex flex-col text-left">
              <span className="font-semibold">WhatsApp:</span>
              <span>0715657800</span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom line with blinking, multi-colored text */}
      <div className="w-full bg-gray-900 text-center py-4 flex flex-col md:flex-row md:justify-center md:space-x-4 text-sm md:text-base">
        <div className="blinking-line">
          &copy;2025
          <br />
          ERASTUSFX
          <br />
          Powered by Dr Erastus Coding Co-operation
        </div>
      </div>

      {/* Custom styles for blinking in different colors */}
      <style jsx>{`
        @keyframes colorCycle {
          0% {
            color: #ff0000;
          }
          20% {
            color: #ff8800;
          }
          40% {
            color: #ffff00;
          }
          60% {
            color: #00ff00;
          }
          80% {
            color: #0088ff;
          }
          100% {
            color: #8800ff;
          }
        }

        .blinking-line {
          font-weight: bold;
          animation: colorCycle 5s infinite;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
