import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [glowIndex, setGlowIndex] = useState(0);
  const contactItems = ['phone', 'email', 'location', 'whatsapp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev + 1) % contactItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 overflow-hidden">
      {/* Animated background with fading circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pulsing background circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full animate-pulse-scale"></div>
        
        {/* Floating particles with fade in/out */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400/30 rounded-full animate-float-fade"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Contact card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 mx-auto transition-all duration-500 transform hover:scale-105 hover:shadow-3xl border-4 border-white animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-300 drop-shadow-lg animate-soft-glow">
          Contact Information
        </h2>
        
        {/* Contact Details List */}
        <div className="space-y-6">
          
          {/* Phone Number */}
          <div className={`flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-500 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-x-2 ${
            glowIndex === 0 ? 'animate-glow-pulse' : ''
          }`}>
            <div className="bg-blue-600 p-3 rounded-lg animate-soft-bounce">
              <FaPhone className="w-6 h-6 sm:w-8 sm:h-8 animate-fade-cycle" />
            </div>
            <div className="animate-slide-in-right">
              <p className="text-lg sm:text-xl font-bold">Phone Number</p>
              <p className="text-sm sm:text-lg text-blue-100">+254 715657800</p>
            </div>
          </div>
          
          {/* Email */}
          <div className={`flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-500 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-x-2 ${
            glowIndex === 1 ? 'animate-glow-pulse' : ''
          }`}>
            <div className="bg-blue-600 p-3 rounded-lg animate-soft-bounce animation-delay-200">
              <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 animate-fade-cycle animation-delay-200" />
            </div>
            <div className="animate-slide-in-right animation-delay-100">
              <p className="text-lg sm:text-xl font-bold">Email Address</p>
              <p className="text-sm sm:text-lg text-blue-100">erastusngamau90@gmail.com</p>
            </div>
          </div>
          
          {/* Location */}
          <div className={`flex items-center space-x-4 p-4 bg-blue-500/80 rounded-xl hover:bg-blue-400 transition-all duration-500 cursor-pointer border-2 border-blue-400 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-x-2 ${
            glowIndex === 2 ? 'animate-glow-pulse' : ''
          }`}>
            <div className="bg-blue-600 p-3 rounded-lg animate-soft-bounce animation-delay-400">
              <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 animate-fade-cycle animation-delay-400" />
            </div>
            <div className="animate-slide-in-right animation-delay-200">
              <p className="text-lg sm:text-xl font-bold">Location</p>
              <p className="text-sm sm:text-lg text-blue-100">Nairobi, Kenya</p>
            </div>
          </div>
          
          {/* WhatsApp - clickable */}
          <a
            href="https://wa.me/254714287705"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-4 p-4 bg-green-500/80 rounded-xl hover:bg-green-400 transition-all duration-500 cursor-pointer border-2 border-green-400 hover:border-green-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-x-2 relative overflow-hidden group ${
              glowIndex === 3 ? 'animate-glow-pulse-green' : ''
            }`}
          >
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="bg-green-600 p-3 rounded-lg animate-soft-bounce animation-delay-600">
              <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 animate-fade-cycle animation-delay-600" />
            </div>
            <div className="animate-slide-in-right animation-delay-300">
              <p className="text-lg sm:text-xl font-bold">WhatsApp</p>
              <p className="text-sm sm:text-lg text-green-100">+254 715657800</p>
            </div>
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 p-4 bg-blue-500/50 rounded-xl border-2 border-blue-400 animate-fade-in-scale">
          <p className="text-center text-yellow-300 font-semibold text-lg animate-fade-words">
            📞 We're available 24/7 for your inquiries!
          </p>
          <p className="text-center text-blue-100 mt-2 animate-fade-words animation-delay-500">
            Call or WhatsApp us for immediate assistance
          </p>
        </div>
      </div>

      {/* WhatsApp fixed button - Same as Home and Booking pages */}
      <a
        href="https://wa.me/254714287705"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 md:bottom-10 md:right-6 bg-green-500 text-white p-4 md:p-6 rounded-full shadow-2xl hover:bg-green-400 transition-all transform hover:scale-110 z-50 animate-fade-pulse"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-4xl animate-spin-slow" />
      </a>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeCycle {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(96, 165, 250, 0.5);
            border-color: rgba(255, 255, 255, 1);
          }
        }

        @keyframes glowPulseGreen {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(74, 222, 128, 0.5);
            border-color: rgba(255, 255, 255, 1);
          }
        }

        @keyfloatFade {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) rotate(0deg);
          }
          25% {
            opacity: 0.8;
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            opacity: 0.5;
            transform: translateY(10px) rotate(-5deg);
          }
          75% {
            opacity: 0.8;
            transform: translateY(-10px) rotate(3deg);
          }
        }

        @keyframes pingSlow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes softBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes fadeWords {
          0%, 100% {
            opacity: 0.9;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-cycle {
          animation: fadeCycle 3s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glowPulse 2s ease-in-out infinite;
        }

        .animate-glow-pulse-green {
          animation: glowPulseGreen 2s ease-in-out infinite;
        }

        .animate-float-fade {
          animation: floatFade 8s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: pingSlow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulseScale 5s ease-in-out infinite;
        }

        .animate-pulse-scale {
          animation: pulseScale 6s ease-in-out infinite;
        }

        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          opacity: 0;
          animation: fadeInScale 1s ease-out 0.5s forwards;
        }

        .animate-soft-bounce {
          animation: softBounce 2s ease-in-out infinite;
        }

        .animate-fade-words {
          animation: fadeWords 3s ease-in-out infinite;
        }

        .animate-fade-pulse {
          animation: fadeWords 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }

        .animate-soft-glow {
          animation: fadeWords 4s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default Contact;

