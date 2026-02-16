import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGoogle,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";
import Logo from "../Assests/erastuslogo.png";

function Footer() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [buttonPulse, setButtonPulse] = useState(true);

  // Toggle pulse animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setButtonPulse((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showWhatsAppModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showWhatsAppModal]);

  // ✅ FIXED: Direct WhatsApp connection to 0715657800
  const handleWhatsAppClick = () => {
    // Format the phone number properly for WhatsApp
    const phoneNumber = "254715657800"; // WhatsApp requires 254 format without leading 0
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+254715657800";
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:erastusngamau90@gmail.com?subject=Forex%20Trading%20Inquiry&body=Hello%20ErastusFX,%20I%20would%20like%20to%20inquire%20about%20your%20forex%20trading%20services.";
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleWhatsAppClick} // ✅ Direct WhatsApp connection
          className="relative group"
          aria-label="Chat on WhatsApp"
        >
          {/* Elegant glow effect */}
          <div
            className={`absolute -inset-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
              buttonPulse ? "animate-pulse-slow" : ""
            }`}
          ></div>

          {/* Main button with refined gradient */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group-active:scale-95 overflow-hidden">
            {/* Inner shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>

            {/* WhatsApp icon - Perfect size */}
            <div className="relative z-10">
              <FaWhatsapp className="w-10 h-10 text-white drop-shadow-md" />
            </div>

            {/* Subtle message indicator */}
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-float border border-white">
              <FaCommentDots className="w-4 h-4 text-gray-800" />
            </div>

            {/* Elegant ring animation */}
            <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-ping-slow"></div>
          </div>

          {/* Refined Tooltip */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-sm text-white px-4 py-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg border border-gray-700 min-w-[180px]">
            <span className="text-sm font-semibold text-green-300 flex items-center">
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Chat Now
            </span>
            <p className="text-xs text-gray-300 mt-1">
              Click to open WhatsApp directly
            </p>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-700"></div>
          </div>
        </button>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-700 animate-slideUp">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-40"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Let's Chat 💬
                  </h3>
                  <p className="text-emerald-300 text-sm">
                    Direct WhatsApp Connection
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="text-gray-400 hover:text-white transition-colors hover:bg-gray-700/50 p-2 rounded-full"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 mb-8">
              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  Click below to start a direct conversation on WhatsApp
                </p>

                {/* WhatsApp Number Card */}
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-6 mb-6 border border-gray-700">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaWhatsapp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Direct WhatsApp Number
                      </p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        0715657800
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs">
                      ✅ Opens WhatsApp directly
                    </p>
                  </div>
                </div>

                {/* Alternative Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={handleCallClick}
                    className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg p-4 hover:from-blue-900/30 hover:to-blue-800/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 border border-blue-800/20 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FaPhone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-300 text-sm font-semibold">
                          Call
                        </p>
                        <p className="text-white">0715657800</p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={handleEmailClick}
                    className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-lg p-4 hover:from-red-900/30 hover:to-red-800/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 border border-red-800/20 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FaGoogle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-red-300 text-sm font-semibold">
                          Email
                        </p>
                        <p className="text-white text-xs break-words max-w-[120px]">
                          erastusngamau90@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-lg group"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:animate-bounce" />
                <span>Open WhatsApp</span>
              </button>

              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Upper section with contact info */}
        <div className="max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Logo */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Logo container */}
                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-[2px] rounded-full">
                  <div className="bg-gray-900 rounded-full p-2">
                    <img
                      src={Logo}
                      alt="ErastusFX Logo"
                      className="w-32 h-32 sm:w-36 sm:h-36 object-cover cursor-pointer transition-all duration-500 
                               group-hover:scale-105 group-hover:rotate-2 
                               rounded-full border-2 border-gray-800 shadow-lg"
                    />
                  </div>
                </div>

                {/* Subtle trading badges */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float-slow border-2 border-gray-800">
                  <span className="text-xs font-bold text-gray-800">FX</span>
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-float-reverse border-2 border-gray-800">
                  <span className="text-xs font-bold text-gray-800">💰</span>
                </div>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="w-full lg:w-2/3">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                <p className="text-gray-300">
                  Reach out for trading guidance, mentorship, or inquiries
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Phone Card */}
                <div
                  onClick={handleCallClick}
                  className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl hover:from-gray-800 hover:to-gray-900 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-700/30 group"
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-10 group-hover:opacity-20"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <FaPhone className="w-6 h-6 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-white mb-2">
                      Direct Call
                    </span>
                    <span className="text-blue-300 font-medium">
                      0715657800
                    </span>
                    <span className="text-gray-400 text-xs mt-2">
                      Tap for instant connection
                    </span>
                  </div>
                </div>

                {/* Email Card - FIXED: Email stays within box */}
                <div
                  onClick={handleEmailClick}
                  className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl hover:from-gray-800 hover:to-gray-900 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-700/30 group"
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-10 group-hover:opacity-20"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
                      <FaGoogle className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="font-semibold text-lg text-white mb-2">
                      Email Us
                    </span>
                    <div className="w-full px-2">
                      <p className="text-red-300 text-sm font-medium break-all overflow-hidden text-ellipsis max-h-[3rem] line-clamp-2">
                        erastusngamau90@gmail.com
                      </p>
                    </div>
                    <span className="text-gray-400 text-xs mt-2">
                      Get detailed responses
                    </span>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl hover:from-gray-800 hover:to-gray-900 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-700/30 group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur opacity-10 group-hover:opacity-20"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <FaMapMarkerAlt className="w-6 h-6 text-white group-hover:animate-spin-slow" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-white mb-2">
                      Our Location
                    </span>
                    <span className="text-purple-300 font-medium">
                      Nairobi, Kenya
                    </span>
                    <span className="text-gray-400 text-xs mt-2">
                      Forex Trading Headquarters
                    </span>
                  </div>
                </div>

                {/* WhatsApp Card - Fixed direct connection */}
                <div
                  onClick={handleWhatsAppClick} // ✅ Direct WhatsApp connection
                  className="flex flex-col items-center text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl hover:from-gray-800 hover:to-gray-900 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-700/30 group"
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-10 group-hover:opacity-20"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <FaWhatsapp className="w-6 h-6 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-white mb-2">
                      WhatsApp
                    </span>
                    <span className="text-green-300 font-medium">
                      0715657800
                    </span>
                    <span className="text-gray-400 text-xs mt-2">
                      ✅ Direct WhatsApp connection
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppClick} // ✅ Direct WhatsApp connection
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg group"
                >
                  <FaWhatsapp className="w-5 h-5 group-hover:animate-wiggle" />
                  <span>WhatsApp Direct</span>
                </button>

                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg group"
                >
                  <FaPhone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/30 text-center py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Animated Copyright Text */}
            <div className="rainbow-text text-xl sm:text-2xl font-bold mb-4">
              &copy; 2026 ERASTUSFX
            </div>

            {/* Tagline */}
            <div className="text-gray-400 mb-6">
              <p>Master Forex Trading with Expert Guidance</p>
            </div>

            {/* Additional Info - FIXED: Colorful blinking text for Dr Erastus Co-operation */}
            <div className="text-gray-500 text-sm space-y-2">
              <p>
                📍 Nairobi, Kenya | 📧 erastusngamau90@gmail.com | 📱 +254 715
                657 800
              </p>
              <p className="animate-color-blink font-medium text-lg">
                Powered by Dr Erastus Co-operation
              </p>
            </div>
          </div>
        </div>

        {/* Custom CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            33% {
              transform: translateY(-6px) rotate(3deg);
            }
            66% {
              transform: translateY(4px) rotate(-3deg);
            }
          }

          @keyframes float-reverse {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            33% {
              transform: translateY(4px) rotate(-3deg);
            }
            66% {
              transform: translateY(-6px) rotate(3deg);
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes ping-slow {
            75%,
            100% {
              transform: scale(1.3);
              opacity: 0;
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes rainbow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes wiggle {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(-3deg);
            }
            75% {
              transform: rotate(3deg);
            }
          }

          /* New colorful blinking animation for Dr Erastus Co-operation */
          @keyframes colorBlink {
            0% {
              color: #ff6b6b;
              text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
            }
            14% {
              color: #ffa726;
              text-shadow: 0 0 10px rgba(255, 167, 38, 0.5);
            }
            28% {
              color: #ffee58;
              text-shadow: 0 0 10px rgba(255, 238, 88, 0.5);
            }
            42% {
              color: #66bb6a;
              text-shadow: 0 0 10px rgba(102, 187, 106, 0.5);
            }
            57% {
              color: #42a5f5;
              text-shadow: 0 0 10px rgba(66, 165, 245, 0.5);
            }
            71% {
              color: #7e57c2;
              text-shadow: 0 0 10px rgba(126, 87, 194, 0.5);
            }
            85% {
              color: #ec407a;
              text-shadow: 0 0 10px rgba(236, 64, 122, 0.5);
            }
            100% {
              color: #ff6b6b;
              text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }

          .animate-slideUp {
            animation: slideUp 0.6s ease-out;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }

          .animate-float-reverse {
            animation: float-reverse 7s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }

          .animate-wiggle {
            animation: wiggle 0.5s ease-in-out;
          }

          .animate-color-blink {
            animation: colorBlink 8s ease-in-out infinite;
          }

          .rainbow-text {
            background: linear-gradient(
              90deg,
              #ff6b6b,
              #ffa726,
              #ffee58,
              #66bb6a,
              #42a5f5,
              #7e57c2,
              #ec407a,
              #ff6b6b
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: rainbow 8s ease infinite;
          }

          /* Text overflow handling for email */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .break-all {
            word-break: break-all;
          }

          .text-ellipsis {
            text-overflow: ellipsis;
          }

          /* Smooth transitions */
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .floating-button {
              bottom: 1.5rem;
              right: 1.5rem;
            }

            .contact-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .logo-container {
              margin-bottom: 2rem;
            }
          }

          @media (max-width: 640px) {
            .floating-button {
              bottom: 1rem;
              right: 1rem;
              transform: scale(0.9);
            }

            .footer-text {
              font-size: 0.9rem;
            }

            /* Email text adjustments for mobile */
            .email-text {
              font-size: 0.75rem;
              line-height: 1.2;
            }
            
            .animate-color-blink {
              font-size: 1rem;
            }
          }
        `}</style>
      </footer>
    </>
  );
}

export default Footer;
