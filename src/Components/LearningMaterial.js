import React from "react";
import { useNavigate } from "react-router-dom";
import Orderblock from "../Assests/orderblock.png";
import supportblock from "../Assests/supportblock.png";
import BullishMarket from "../Assests/bullishmarket.png";
import OrbsStrategy from "../Assests/orbsStrategy.png";
import Method714 from "../Assests/714method.png";

const LearningMaterial = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate("/book-session");
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4 md:p-6 relative overflow-hidden">
      {/* ========== ANIMATED BACKGROUND ELEMENTS ========== */}

      {/* Currency Pair Animated Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* EUR/USD Floating */}
        <div className="absolute top-10 left-4 md:left-8 animate-float-slow">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/30 shadow-lg">
            <span className="text-blue-300 font-bold text-xs md:text-sm">
              EUR/USD
            </span>
            <span className="ml-2 text-green-400 text-xs">↑1.0875</span>
          </div>
        </div>

        {/* GBP/USD Floating */}
        <div className="absolute top-1/4 right-6 md:right-12 animate-float-medium">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/30 shadow-lg">
            <span className="text-purple-300 font-bold text-xs md:text-sm">
              GBP/USD
            </span>
            <span className="ml-2 text-green-400 text-xs">↑1.2720</span>
          </div>
        </div>

        {/* USD/JPY Floating - FIXED TO SHOW GOING UP */}
        <div className="absolute bottom-1/3 left-10 md:left-20 animate-float-slow-delay">
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-green-500/30 shadow-lg">
            <span className="text-green-300 font-bold text-xs md:text-sm">
              USD/JPY
            </span>
            <span className="ml-2 text-green-400 text-xs">↑148.25</span>
          </div>
        </div>

        {/* Gold (XAU/USD) Floating */}
        <div className="absolute bottom-20 right-8 md:right-16 animate-float-medium-delay">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-yellow-500/30 shadow-lg">
            <span className="text-yellow-300 font-bold text-xs md:text-sm">
              XAU/USD
            </span>
            <span className="ml-2 text-green-400 text-xs">↑2,015.50</span>
          </div>
        </div>

        {/* BTC/USD Floating */}
        <div className="absolute top-1/2 left-1/4 animate-float-slow">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-orange-500/30 shadow-lg">
            <span className="text-orange-300 font-bold text-xs md:text-sm">
              BTC/USD
            </span>
            <span className="ml-2 text-green-400 text-xs">↑42,580</span>
          </div>
        </div>

        {/* Candlestick Animations */}
        <div className="absolute top-16 right-1/4 opacity-20">
          <div className="flex flex-col items-center space-y-0.5">
            <div className="w-1 h-3 bg-green-500 rounded"></div>
            <div className="w-2 h-1 bg-green-500"></div>
            <div className="w-1 h-4 bg-green-500 rounded"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/3 opacity-20">
          <div className="flex flex-col items-center space-y-0.5">
            <div className="w-1 h-4 bg-red-500 rounded"></div>
            <div className="w-2 h-1 bg-red-500"></div>
            <div className="w-1 h-2 bg-red-500 rounded"></div>
          </div>
        </div>

        <div className="absolute top-40 left-16 opacity-20">
          <div className="flex flex-col items-center space-y-0.5">
            <div className="w-1 h-5 bg-green-500 rounded"></div>
            <div className="w-2 h-1 bg-green-500"></div>
            <div className="w-1 h-3 bg-green-500 rounded"></div>
          </div>
        </div>

        {/* Money Bag Animation */}
        <div className="absolute top-1/3 right-1/3 animate-bounce-slow opacity-30">
          <div className="text-2xl md:text-3xl">💰</div>
        </div>

        {/* Rising Market Diagram (Left Side) */}
        <div className="absolute left-4 bottom-1/4 w-16 md:w-24 opacity-20">
          <svg viewBox="0 0 100 60" className="w-full h-auto">
            {/* Grid lines */}
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
            <line
              x1="0"
              y1="30"
              x2="100"
              y2="30"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />

            {/* Rising trend line */}
            <path
              d="M0,50 L20,40 L40,30 L60,20 L80,15 L100,10"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{ animation: "drawLine 2s ease-out forwards" }}
            />

            {/* Candles */}
            <rect x="15" y="35" width="8" height="15" fill="#10B981" rx="1" />
            <rect x="35" y="25" width="8" height="15" fill="#10B981" rx="1" />
            <rect x="55" y="15" width="8" height="15" fill="#10B981" rx="1" />
            <rect x="75" y="10" width="8" height="15" fill="#10B981" rx="1" />
          </svg>
        </div>

        {/* Falling Market Diagram (Right Side) */}
        <div className="absolute right-4 top-1/3 w-16 md:w-24 opacity-20">
          <svg viewBox="0 0 100 60" className="w-full h-auto">
            {/* Grid lines */}
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
            <line
              x1="0"
              y1="30"
              x2="100"
              y2="30"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="#374151"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />

            {/* Falling trend line */}
            <path
              d="M0,10 L20,20 L40,30 L60,40 L80,45 L100,50"
              stroke="#EF4444"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line-delay"
              strokeDasharray="200"
              strokeDashoffset="200"
              style={{ animation: "drawLine 2s ease-out 0.5s forwards" }}
            />

            {/* Candles */}
            <rect x="15" y="10" width="8" height="15" fill="#EF4444" rx="1" />
            <rect x="35" y="20" width="8" height="15" fill="#EF4444" rx="1" />
            <rect x="55" y="30" width="8" height="15" fill="#EF4444" rx="1" />
            <rect x="75" y="40" width="8" height="15" fill="#EF4444" rx="1" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Professional Trading Concepts Masterclass
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl">
            Master Institutional Order Flow, Market Structure & Advanced Timing
            Strategies
          </p>
        </header>

        {/* ========== ORDER BLOCKS SECTION ========== */}
        <section className="mb-12 md:mb-16 relative">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                OB
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
              Institutional Order Blocks
            </h2>
          </div>

          {/* Order Block Image Section */}
          <div className="bg-slate-800 rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-2xl border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={Orderblock}
                    alt="Institutional Order Flow Visualization"
                    className="w-full h-56 md:h-64 lg:h-72 xl:h-80 object-contain transform hover:scale-105 transition-transform duration-300 bg-slate-900/50 p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-2 text-center">
                  Institutional Order Flow & Accumulation Zones
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-blue-400">
                  Professional Order Block Analysis
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                    <span className="text-yellow-400 font-semibold">
                      Institutional Order Blocks
                    </span>{" "}
                    are critical price zones where smart money accumulates or
                    distributes positions. These are not just support/resistance
                    levels - they represent actual institutional order flow that
                    moves markets.
                  </p>

                  <div className="bg-slate-900 p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold mb-2 text-sm md:text-base lg:text-lg">
                      What You'll Master:
                    </h4>
                    <ul className="list-disc pl-4 md:pl-5 lg:pl-6 space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                      <li>
                        Identify institutional accumulation/distribution zones
                      </li>
                      <li>Track smart money order flow in real-time</li>
                      <li>Predict market reversals before they happen</li>
                      <li>
                        Trade with institutional confirmation, not against it
                      </li>
                      <li>Understand fair value gaps and market imbalances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Block Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Bullish Order Block */}
            <div className="bg-slate-800 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-400">
                  Accumulation Zones
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Where institutions are buying before major rallies.
                Characterized by strong buying pressure followed by
                consolidation, indicating accumulation before the next move up.
              </p>
              <div className="bg-slate-900 p-3 md:p-4 rounded-lg">
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base lg:text-lg">
                  Professional Entry Signals:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Enter long positions when price returns to accumulation zones
                  with institutional buying confirmation and reduced selling
                  pressure.
                </p>
              </div>
            </div>

            {/* Bearish Order Block */}
            <div className="bg-slate-800 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-red-500/20 hover:border-red-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full mr-2 md:mr-3"></div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-400">
                  Distribution Zones
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Where institutions are selling before major declines. Marked by
                strong selling pressure followed by consolidation, indicating
                distribution before the next move down.
              </p>
              <div className="bg-slate-900 p-3 md:p-4 rounded-lg">
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base lg:text-lg">
                  Professional Entry Signals:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Enter short positions when price returns to distribution zones
                  with institutional selling confirmation and reduced buying
                  pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Order Block Notes */}
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-blue-700/30">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-blue-400 mr-2 md:mr-3 text-lg md:text-xl">
                💡
              </span>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-300">
                Professional Insight: Why Most Traders Fail at Order Blocks
              </h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-yellow-400">
                    90% of retail traders
                  </span>{" "}
                  miss institutional order flow because they look at price
                  alone, not volume and market structure
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Institutions leave clear footprints -{" "}
                  <span className="font-semibold text-yellow-400">
                    learn to read them
                  </span>{" "}
                  and trade alongside smart money, not against it
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Proper Order Block analysis requires understanding of{" "}
                  <span className="font-semibold text-yellow-400">
                    higher timeframe context, volume profile, and market
                    structure shifts
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SUPPORT & RESISTANCE SECTION ========== */}
        <section className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-600 to-pink-400 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                S/R
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400">
              Advanced Support & Resistance
            </h2>
          </div>

          {/* Support & Resistance Image Section */}
          <div className="bg-slate-800 rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-2xl border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={supportblock}
                    alt="Advanced Support & Resistance Analysis"
                    className="w-full h-56 md:h-64 lg:h-72 xl:h-80 object-contain transform hover:scale-105 transition-transform duration-300 bg-slate-900/50 p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-2 text-center">
                  Multi-Timeframe S/R Confluence & Market Psychology
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-purple-400">
                  Professional S/R Trading
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                    <span className="text-green-400 font-semibold">
                      Advanced Support & Resistance
                    </span>{" "}
                    goes beyond basic horizontal lines. It's about understanding
                    market psychology, institutional memory, and confluence
                    zones where multiple timeframes align.
                  </p>

                  <div className="bg-slate-900 p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold mb-2 text-sm md:text-base lg:text-lg">
                      What You'll Master:
                    </h4>
                    <ul className="list-disc pl-4 md:pl-5 lg:pl-6 space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                      <li>Multi-timeframe S/R confluence analysis</li>
                      <li>Dynamic vs Static S/R identification</li>
                      <li>Market psychology at key levels</li>
                      <li>Order flow at S/R zones</li>
                      <li>Breakout vs Fakeout differentiation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Resistance Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Support */}
            <div className="bg-slate-800 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-400">
                  Advanced Support Analysis
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Professional support trading involves identifying zones where
                buying interest consistently overwhelms selling pressure,
                creating reliable bounce areas for high-probability entries.
              </p>
              <div className="bg-slate-900 p-3 md:p-4 rounded-lg">
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base lg:text-lg">
                  Professional Techniques:
                </h4>
                <ul className="list-disc pl-4 md:pl-5 text-gray-300 text-xs md:text-sm lg:text-base space-y-0.5 md:space-y-1">
                  <li>Volume Profile Point of Control (POC)</li>
                  <li>Market Structure Support</li>
                  <li>Fibonacci Confluence Zones</li>
                  <li>VWAP & Moving Average Clusters</li>
                </ul>
              </div>
            </div>

            {/* Resistance */}
            <div className="bg-slate-800 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-red-500/20 hover:border-red-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full mr-2 md:mr-3"></div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-400">
                  Advanced Resistance Analysis
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Professional resistance trading identifies zones where selling
                pressure consistently overwhelms buying interest, creating
                reliable rejection areas for high-probability short entries.
              </p>
              <div className="bg-slate-900 p-3 md:p-4 rounded-lg">
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base lg:text-lg">
                  Professional Techniques:
                </h4>
                <ul className="list-disc pl-4 md:pl-5 text-gray-300 text-xs md:text-sm lg:text-base space-y-0.5 md:space-y-1">
                  <li>Previous High Volume Nodes (HVN)</li>
                  <li>Break of Structure Resistance</li>
                  <li>Supply Zone Identification</li>
                  <li>Overhead Resistance Clusters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support & Resistance Trading Strategy */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-pink-400">
              Professional S/R Trading Framework
            </h3>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                    Multi-Timeframe Confluence Mapping
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Identify where Daily, 4H, and 1H support/resistance align.
                    Confluence zones provide the highest probability trade
                    setups with institutional backing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                    Order Flow Analysis at Key Levels
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Analyze institutional order flow at S/R zones. Look for
                    absorption, iceberg orders, and institutional participation
                    to confirm level strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                    Risk-Adjusted Position Sizing
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Professional traders adjust position size based on S/R
                    confluence strength. Higher confluence = larger position
                    size with tighter risk management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Resistance Notes */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-800/20 rounded-xl p-4 md:p-6 border border-purple-700/30 mb-6 md:mb-8">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-purple-400 mr-2 md:mr-3 text-lg md:text-xl">
                💡
              </span>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-300">
                Professional Insight: The Confluence Edge
              </h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <span className="text-purple-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-yellow-400">
                    Single S/R levels fail 60% of the time
                  </span>
                  . Professional traders wait for{" "}
                  <span className="font-semibold text-yellow-400">
                    3+ confluence factors
                  </span>{" "}
                  before entering trades
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Learn to identify{" "}
                  <span className="font-semibold text-yellow-400">
                    structural vs psychological S/R
                  </span>{" "}
                  - this determines whether a level will hold or break
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Master the art of{" "}
                  <span className="font-semibold text-yellow-400">
                    S/R role reversal
                  </span>{" "}
                  to predict market direction changes before they happen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BULLISH MARKET SECTION ========== */}
        <section className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-yellow-600 to-orange-400 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                ↗
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
              Professional Trend Analysis
            </h2>
          </div>

          {/* Bullish Market Image Section */}
          <div className="bg-gradient-to-br from-yellow-900/20 via-yellow-800/10 to-orange-900/20 rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-2xl border border-yellow-700/30">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="relative h-56 md:h-64 lg:h-72 xl:h-80 bg-slate-900/50">
                    <img
                      src={BullishMarket}
                      alt="Professional Trend Analysis & Market Structure"
                      className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500 p-3 md:p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                      <span className="bg-green-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm lg:text-base font-semibold">
                        ↗ Institutional Trend Analysis
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-2 md:mt-3 text-center">
                  Market Structure & Institutional Trend Following
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-yellow-400">
                  Professional Trend Trading
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                    <span className="text-green-400 font-semibold">
                      Professional Trend Analysis
                    </span>{" "}
                    isn't about following lines on a chart. It's about
                    understanding market structure, institutional participation,
                    and trend strength to ride major moves from start to finish.
                  </p>

                  <div className="bg-yellow-900/30 p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold mb-2 text-sm md:text-base lg:text-lg">
                      What You'll Master:
                    </h4>
                    <ul className="list-disc pl-4 md:pl-5 lg:pl-6 space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                      <li>Market Structure & Break of Structure (BOS)</li>
                      <li>Trend Strength & Momentum Analysis</li>
                      <li>Institutional Participation in Trends</li>
                      <li>Trend Exhaustion & Reversal Signals</li>
                      <li>Multi-Timeframe Trend Alignment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bullish Market Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Component 1 */}
            <div className="bg-gradient-to-b from-yellow-900/20 to-yellow-800/10 rounded-xl p-4 md:p-6 shadow-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-green-400 text-lg md:text-xl lg:text-2xl">
                    📊
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-green-400">
                  Market Structure
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                Learn to identify higher highs, higher lows, market structure
                shifts, and institutional accumulation zones that define
                professional trend trading.
              </p>
            </div>

            {/* Component 2 */}
            <div className="bg-gradient-to-b from-yellow-900/20 to-yellow-800/10 rounded-xl p-4 md:p-6 shadow-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-green-400 text-lg md:text-xl lg:text-2xl">
                    ⚡
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-green-400">
                  Trend Momentum
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                Master momentum analysis to identify trend strength,
                continuation patterns, and optimal entry points within
                established trends for maximum profitability.
              </p>
            </div>

            {/* Component 3 */}
            <div className="bg-gradient-to-b from-yellow-900/20 to-yellow-800/10 rounded-xl p-4 md:p-6 shadow-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-green-400 text-lg md:text-xl lg:text-2xl">
                    🛡️
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-green-400">
                  Risk Management
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                Learn professional risk management techniques specific to trend
                trading, including dynamic stop losses, position sizing, and
                trend-based risk parameters.
              </p>
            </div>
          </div>

          {/* Bullish Market Trading Strategy */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-800/20 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl border border-yellow-700/30">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-orange-400">
              Professional Trend Trading Framework
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2">
                      Market Structure Analysis
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                      Identify trend direction using higher timeframe market
                      structure and institutional order flow analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2">
                      Trend Confirmation
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                      Confirm trend strength using volume analysis, momentum
                      indicators, and institutional participation signals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2">
                      Professional Entry Strategy
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                      Enter trends at optimal retracement levels using
                      institutional order blocks and support/resistance
                      confluence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2">
                      Risk-Managed Exit Strategy
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                      Exit positions using trailing stops, trend exhaustion
                      signals, and market structure break warnings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bullish Market Notes */}
          <div className="bg-gradient-to-r from-green-900/20 via-yellow-900/20 to-orange-900/20 rounded-xl p-4 md:p-6 border border-green-700/30 mb-6 md:mb-8">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-green-400 mr-2 md:mr-3 text-lg md:text-xl">
                💡
              </span>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-green-300">
                Professional Insight: The Trend is Your Friend
              </h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <span className="text-green-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-yellow-400">
                    80% of profits come from 20% of trends
                  </span>
                  . Professional traders learn to identify and ride{" "}
                  <span className="font-semibold text-yellow-400">
                    high-quality trends
                  </span>{" "}
                  while avoiding choppy markets
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Master the difference between{" "}
                  <span className="font-semibold text-yellow-400">
                    retail-driven trends vs institutionally-driven trends
                  </span>{" "}
                  - this determines trend longevity and profitability
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Learn professional trend{" "}
                  <span className="font-semibold text-yellow-400">
                    filtering techniques
                  </span>{" "}
                  to avoid false breakouts and trade only the highest
                  probability setups
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ORBS STRATEGY SECTION ========== */}
        <section className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                OR
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400">
              ORBS Opening Range Strategy
            </h2>
          </div>

          {/* ORBS Strategy Image Section */}
          <div className="bg-gradient-to-br from-emerald-900/20 via-teal-800/10 to-cyan-900/20 rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-2xl border border-emerald-700/30">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="relative h-56 md:h-64 lg:h-72 xl:h-80 bg-slate-900/50">
                    <img
                      src={OrbsStrategy}
                      alt="Professional ORBS Opening Range Breakout Strategy"
                      className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500 p-3 md:p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="bg-emerald-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm lg:text-base font-semibold">
                        Institutional Opening Range
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-2 md:mt-3 text-center">
                  Institutional Opening Range Analysis & Morning Momentum
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-emerald-400">
                  Professional ORBS Trading
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                    <span className="text-emerald-400 font-semibold">
                      Professional ORBS Strategy
                    </span>{" "}
                    captures institutional opening range breakouts that set the
                    tone for the entire trading day. This is not retail trading
                    - this is following institutional order flow from market
                    open.
                  </p>

                  <div className="bg-emerald-900/30 p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-emerald-500">
                    <h4 className="font-bold mb-2 text-sm md:text-base lg:text-lg">
                      What You'll Master:
                    </h4>
                    <ul className="list-disc pl-4 md:pl-5 lg:pl-6 space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                      <li>Institutional Opening Range Identification</li>
                      <li>5:05 AM Candle Analysis for Day Direction</li>
                      <li>Opening Range Breakout Confirmation</li>
                      <li>Morning Session Momentum Trading</li>
                      <li>
                        False Breakout vs Genuine Breakout Differentiation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ORBS Strategy Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Bullish ORBS Setup */}
            <div className="bg-gradient-to-b from-emerald-900/20 to-teal-800/10 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-emerald-400 text-lg md:text-xl lg:text-2xl">
                    ↗
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-emerald-400">
                  Bullish ORBS Setup
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                When institutions break above the opening range high,
                particularly after the
                <span className="font-bold text-yellow-400">
                  {" "}
                  5:05 AM candle
                </span>
                , they're signaling institutional accumulation and setting up
                for a day-long bullish move.
              </p>
              <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg">
                <h4 className="font-bold mb-1 text-green-400 text-sm md:text-base lg:text-lg">
                  Professional Entry Signal:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Enter long when price breaks above opening range high with
                  institutional volume confirmation and sustained buying
                  pressure.
                </p>
              </div>
            </div>

            {/* Bearish ORBS Setup */}
            <div className="bg-gradient-to-b from-rose-900/20 to-pink-800/10 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-rose-500/20 hover:border-rose-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-rose-400 text-lg md:text-xl lg:text-2xl">
                    ↘
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-rose-400">
                  Bearish ORBS Setup
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                When institutions break below the opening range low, especially
                after the
                <span className="font-bold text-yellow-400">
                  {" "}
                  5:05 AM candle
                </span>
                , they're signaling institutional distribution and setting up
                for a day-long bearish move.
              </p>
              <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg">
                <h4 className="font-bold mb-1 text-red-400 text-sm md:text-base lg:text-lg">
                  Professional Entry Signal:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Enter short when price breaks below opening range low with
                  institutional volume confirmation and sustained selling
                  pressure.
                </p>
              </div>
            </div>
          </div>

          {/* ORBS Trading Strategy */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-800/20 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl border border-emerald-700/30">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-teal-400">
              Professional ORBS Trading Framework
            </h3>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="flex items-start">
                <div className="bg-emerald-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-emerald-300">
                    Institutional Opening Range (5:00 AM - 6:00 AM)
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Professional traders identify the institutional opening
                    range - not the retail range. This requires understanding
                    institutional order flow from market open.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-emerald-300">
                    5:05 AM Institutional Candle Analysis
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    The 5:05 AM candle reveals institutional intent for the day.
                    Professional analysis of this candle determines whether to
                    expect bullish continuation or bearish reversal.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-emerald-300">
                    Institutional Breakout Confirmation
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Professional traders wait for institutional confirmation
                    before entering breakouts. This involves analyzing volume
                    profile, order flow, and institutional participation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ORBS Strategy Notes */}
          <div className="bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20 rounded-xl p-4 md:p-6 border border-emerald-700/30">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-emerald-400 mr-2 md:mr-3 text-lg md:text-xl">
                💡
              </span>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-emerald-300">
                Professional Insight: The Morning Edge
              </h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <span className="text-emerald-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-yellow-400">
                    70% of trading day direction
                  </span>{" "}
                  is determined in the first hour. Professional ORBS trading
                  captures this institutional momentum for maximum profitability
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Learn to differentiate between{" "}
                  <span className="font-semibold text-yellow-400">
                    retail-driven vs institution-driven opening ranges
                  </span>{" "}
                  - this determines breakout success rate
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Master{" "}
                  <span className="font-semibold text-yellow-400">
                    false breakout identification
                  </span>{" "}
                  to avoid entering losing trades in choppy morning sessions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 714 METHOD SECTION ========== */}
        <section className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-red-600 to-pink-400 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                714
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400">
              714 Strategy Method - Time-Based Reversal Strategy
            </h2>
          </div>

          {/* 714 Method Image Section */}
          <div className="bg-gradient-to-br from-red-900/20 via-pink-800/10 to-rose-900/20 rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-2xl border border-red-700/30">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="relative h-56 md:h-64 lg:h-72 xl:h-80 bg-slate-900/50">
                    <img
                      src={Method714}
                      alt="Professional 714 Method Time-Based Reversal Strategy"
                      className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500 p-3 md:p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span className="bg-red-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm lg:text-base font-semibold">
                        ⏰ Institutional Time-Based Reversals
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-2 md:mt-3 text-center">
                  Precision Timing & Institutional Session Analysis
                </p>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-red-400">
                  Professional 714 Strategy Method Trading
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                    <span className="text-red-400 font-semibold">
                      Professional 714 Method
                    </span>{" "}
                    is a precision time-based strategy that captures
                    institutional session reversals with surgical accuracy. This
                    isn't guesswork - it's understanding institutional session
                    timing and flow.
                  </p>

                  <div className="bg-red-900/30 p-3 md:p-4 lg:p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold mb-2 text-sm md:text-base lg:text-lg">
                      What You'll Master:
                    </h4>
                    <ul className="list-disc pl-4 md:pl-5 lg:pl-6 space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm lg:text-base">
                      <li>Institutional Session Timing (14:00H - 15:00H)</li>
                      <li>Session-Based Market Reversal Patterns</li>
                      <li>Institutional Buying/Selling Mode Identification</li>
                      <li>Time-Based Position Flipping Strategy</li>
                      <li>Consistent Daily Reversal Trading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 714 Method Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Rule 1 */}
            <div className="bg-gradient-to-b from-red-900/20 to-pink-800/10 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-red-500/20 hover:border-red-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-green-400 text-lg md:text-xl lg:text-2xl">
                    📈➡️📉
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-green-400">
                  Rule 1: Buying to Selling Flip
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                If institutions are in{" "}
                <span className="font-bold text-green-400">BUYING MODE</span>
                between{" "}
                <span className="font-bold text-yellow-400">
                  14:00H - 15:00H
                </span>{" "}
                (2:00 PM - 3:00 PM), then from{" "}
                <span className="font-bold text-yellow-400">15:00H</span>{" "}
                onwards, they flip to{" "}
                <span className="font-bold text-red-400">SELLING MODE</span>.
                <span className="font-bold text-yellow-400">
                  {" "}
                  This happens EVERY DAY.
                </span>
              </p>
              <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg">
                <h4 className="font-bold mb-1 text-red-400 text-sm md:text-base lg:text-lg">
                  Professional Action:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Prepare short positions from 15:00H onwards when institutional
                  buying occurred during 14:00H-15:00H
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-gradient-to-b from-green-900/20 to-emerald-800/10 rounded-xl p-4 md:p-6 lg:p-7 shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-[1.02]">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                  <span className="text-red-400 text-lg md:text-xl lg:text-2xl">
                    📉➡️📈
                  </span>
                </div>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-red-400">
                  Rule 2: Selling to Buying Flip
                </h3>
              </div>
              <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm lg:text-base">
                If institutions are in{" "}
                <span className="font-bold text-red-400">SELLING MODE</span>
                between{" "}
                <span className="font-bold text-yellow-400">
                  14:00H - 15:00H
                </span>{" "}
                (2:00 PM - 3:00 PM), then from{" "}
                <span className="font-bold text-yellow-400">15:00H</span>{" "}
                onwards, they flip to{" "}
                <span className="font-bold text-green-400">BUYING MODE</span>.
                <span className="font-bold text-yellow-400">
                  {" "}
                  This happens EVERY DAY.
                </span>
              </p>
              <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg">
                <h4 className="font-bold mb-1 text-green-400 text-sm md:text-base lg:text-lg">
                  Professional Action:
                </h4>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                  Prepare long positions from 15:00H onwards when institutional
                  selling occurred during 14:00H-15:00H
                </p>
              </div>
            </div>
          </div>

          {/* 714 Method Trading Strategy */}
          <div className="bg-gradient-to-r from-red-900/30 to-pink-800/20 rounded-xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl border border-red-700/30">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-pink-400">
              Professional 714 Strategy Method Trading Framework
            </h3>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-red-300">
                    Institutional Session Monitoring (14:00H - 15:00H)
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Professional traders analyze institutional order flow
                    between 2:00 PM - 3:00 PM to determine if institutions are
                    accumulating (buying) or distributing (selling).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-red-300">
                    Institutional Mode Identification
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    Professional analysis determines institutional intent: Are
                    they building long positions (buying mode) or preparing to
                    distribute (selling mode) during this critical hour?
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-sm md:text-base lg:text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg lg:text-xl mb-1 md:mb-2 text-red-300">
                    Precision Time-Based Position Flipping
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                    At exactly 15:00H (3:00 PM), professional traders flip
                    positions based on institutional mode identified during
                    14:00H-15:00H. This time-based reversal happens consistently
                    daily.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 714 Method Notes */}
          <div className="bg-gradient-to-r from-red-900/20 via-pink-900/20 to-rose-900/20 rounded-xl p-4 md:p-6 border border-red-700/30">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-red-400 mr-2 md:mr-3 text-lg md:text-xl">
                💡
              </span>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-red-300">
                Professional Insight: The Institutional Clock
              </h4>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <span className="text-red-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-yellow-400">
                    Institutions operate on a precise daily schedule
                  </span>
                  . The 714 Method taps into this institutional timing for
                  consistent, predictable reversals
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-green-400">
                    If market was buying during 14:00H-15:00H
                  </span>
                  , then from{" "}
                  <span className="font-semibold text-yellow-400">15:00H</span>{" "}
                  onwards it will be{" "}
                  <span className="font-semibold text-red-400">selling</span>.
                  <span className="font-bold text-yellow-400">
                    {" "}
                    This pattern repeats DAILY.
                  </span>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-red-400">
                    If market was selling during 14:00H-15:00H
                  </span>
                  , then from{" "}
                  <span className="font-semibold text-yellow-400">15:00H</span>{" "}
                  onwards it will be{" "}
                  <span className="font-semibold text-green-400">buying</span>.
                  <span className="font-bold text-yellow-400">
                    {" "}
                    This pattern repeats DAILY.
                  </span>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 mr-1 md:mr-2 text-lg">•</span>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Master the art of{" "}
                  <span className="font-semibold text-yellow-400">
                    institutional session analysis
                  </span>{" "}
                  to predict market direction with 85%+ accuracy using
                  time-based signals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== COMPARISON SECTION ========== */}
        <section className="mt-8 md:mt-12 mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 rounded-xl p-4 md:p-8 border border-slate-700 shadow-xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-yellow-400">
              Professional Strategy Comparison
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 text-xs md:text-sm lg:text-base">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left p-2 md:p-4">
                      Professional Aspect
                    </th>
                    <th className="text-left p-2 md:p-4 text-blue-400">
                      Order Blocks
                    </th>
                    <th className="text-left p-2 md:p-4 text-purple-400">
                      S/R Trading
                    </th>
                    <th className="text-left p-2 md:p-4 text-yellow-400">
                      Trend Analysis
                    </th>
                    <th className="text-left p-2 md:p-4 text-emerald-400">
                      ORBS Strategy Method
                    </th>
                    <th className="text-left p-2 md:p-4 text-red-400">
                      714 Strategy Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="p-2 md:p-4 font-semibold">
                      Institutional Focus
                    </td>
                    <td className="p-2 md:p-4">Order Flow Analysis</td>
                    <td className="p-2 md:p-4">Market Psychology</td>
                    <td className="p-2 md:p-4">Structure Analysis</td>
                    <td className="p-2 md:p-4">Opening Flow</td>
                    <td className="p-2 md:p-4">Session Timing</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-2 md:p-4 font-semibold">Time Precision</td>
                    <td className="p-2 md:p-4">Any Time</td>
                    <td className="p-2 md:p-4">Any Time</td>
                    <td className="p-2 md:p-4">Any Time</td>
                    <td className="p-2 md:p-4">5:00-6:00 AM</td>
                    <td className="p-2 md:p-4">2:00-3:00 PM Daily</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-2 md:p-4 font-semibold">Success Rate</td>
                    <td className="p-2 md:p-4">85%+ with Confluence</td>
                    <td className="p-2 md:p-4">80%+ with Confluence</td>
                    <td className="p-2 md:p-4">75%+ in Strong Trends</td>
                    <td className="p-2 md:p-4">90%+ with Confirmation</td>
                    <td className="p-2 md:p-4">85%+ Daily Consistency</td>
                  </tr>
                  <tr>
                    <td className="p-2 md:p-4 font-semibold">
                      Professional Edge
                    </td>
                    <td className="p-2 md:p-4">Institutional Order Flow</td>
                    <td className="p-2 md:p-4">Market Psychology</td>
                    <td className="p-2 md:p-4">Structure Analysis</td>
                    <td className="p-2 md:p-4">Morning Momentum</td>
                    <td className="p-2 md:p-4">Time-Based Reversals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 md:mt-8 p-3 md:p-5 bg-gradient-to-r from-slate-900/60 to-slate-800/60 rounded-lg border border-slate-700">
              <p className="text-gray-300 text-center text-sm md:text-base lg:text-lg">
                <span className="text-yellow-400 font-semibold">
                  Professional Trading System:
                </span>{" "}
                Combine ORBS morning direction with 714 Method afternoon
                reversals at institutional Order Blocks & Advanced S/R levels
                for maximum profitability
              </p>
            </div>
          </div>
        </section>

        {/* ========== ULTIMATE CALL TO ACTION ========== */}
        <section className="mt-8 md:mt-12 mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 p-6 md:p-8 lg:p-12 shadow-2xl border border-purple-700/30">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-blue-500/10 rounded-full -translate-x-12 -translate-y-12 md:-translate-x-16 md:-translate-y-16 lg:-translate-x-20 lg:-translate-y-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-red-500/10 rounded-full translate-x-14 translate-y-14 md:translate-x-18 md:translate-y-18 lg:translate-x-24 lg:translate-y-24 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mb-4 md:mb-6 shadow-lg animate-bounce">
                <span className="text-xl md:text-2xl lg:text-3xl">🚀</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-yellow-300 via-white to-pink-300 bg-clip-text text-transparent">
                From Information Overload to Professional Execution
              </h2>

              {/* Subheading */}
              <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 max-w-4xl mx-auto">
                You've just seen 5% of what professional traders know. The
                remaining 95% - the execution, the risk management, the
                psychology, the institutional flow analysis - is what separates
                profitable traders from the rest.
              </p>

              {/* Problem Statement */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-slate-700">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-red-400 mb-3 md:mb-4">
                  ❌ Why Most Traders Never Succeed:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="flex flex-col items-center p-3 md:p-4 bg-red-900/20 rounded-lg">
                    <span className="text-2xl md:text-3xl mb-2">📚</span>
                    <p className="text-gray-300 text-sm md:text-base text-center">
                      Information without application ={" "}
                      <span className="text-red-400 font-bold">
                        ZERO results
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-3 md:p-4 bg-red-900/20 rounded-lg">
                    <span className="text-2xl md:text-3xl mb-2">🤔</span>
                    <p className="text-gray-300 text-sm md:text-base text-center">
                      Strategy without psychology ={" "}
                      <span className="text-red-400 font-bold">
                        EMOTIONAL trading
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-3 md:p-4 bg-red-900/20 rounded-lg">
                    <span className="text-2xl md:text-3xl mb-2">💸</span>
                    <p className="text-gray-300 text-sm md:text-base text-center">
                      Analysis without execution ={" "}
                      <span className="text-red-400 font-bold">
                        MISSED opportunities
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Statement */}
              <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-emerald-700/30">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-emerald-400 mb-3 md:mb-4">
                  ✅ The Professional Solution:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="text-left">
                    <h4 className="font-bold text-emerald-300 mb-2 text-base md:text-lg">
                      What You GET:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Live Market Analysis Sessions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Professional Entry/Exit Execution
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Institutional Order Flow Reading
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-emerald-300 mb-2 text-base md:text-lg">
                      What You AVOID:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Years of Trial & Error
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Costly Mistakes & Losses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        <span className="text-gray-300 text-sm md:text-base">
                          Information Overload Paralysis
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    90%+
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm">
                    Strategy Success Rate
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    5
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm">
                    Professional Strategies
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    24/7
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm">
                    Market Support
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    1-on-1
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm">
                    Personal Coaching
                  </div>
                </div>
              </div>

              {/* Action Buttons - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <button
                  onClick={handleBookSession}
                  className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2 md:mr-3 text-lg md:text-xl lg:text-2xl">
                      🚀
                    </span>
                    <span className="text-sm md:text-base lg:text-lg">
                      START PROFESSIONAL JOURNEY NOW
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent opacity-50 group-hover:animate-pulse"></div>
                </button>

                <a
                  href="tel:0715657800"
                  className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 text-purple-300 font-bold rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-slate-800/70 text-center"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2 md:mr-3 text-lg md:text-xl lg:text-2xl">
                      📞
                    </span>
                    <span className="text-sm md:text-base lg:text-lg">
                      IMMEDIATE SUPPORT: 0715657800
                    </span>
                  </span>
                </a>
              </div>

              {/* Bottom Testimonials */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-700">
                <p className="text-gray-400 text-xs md:text-sm lg:text-base italic">
                  "After 3 years of losing money, one session transformed my
                  trading. Now I'm consistently profitable."
                  <span className="block text-yellow-400 mt-1">
                    - John M., Former Retail Trader
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-800 text-center">
          <div className="mb-4 md:mb-6">
            <div className="inline-block bg-gradient-to-r from-blue-500 via-emerald-500 to-yellow-500 w-16 md:w-24 lg:w-32 h-1 rounded-full mb-1 md:mb-2"></div>
          </div>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base">
            Professional Trading Education • Institutional Strategies •
            Risk-Managed Execution
          </p>
          <p className="text-gray-600 text-xs md:text-sm mt-2">
            Stop guessing. Start trading like the institutions do.
          </p>
        </footer>
      </div>

      {/* Add the animation styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes float-slow-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(2deg);
          }
        }

        @keyframes float-medium-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(-4deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-slow-delay {
          animation: float-slow-delay 7s ease-in-out infinite 1s;
        }

        .animate-float-medium-delay {
          animation: float-medium-delay 5s ease-in-out infinite 0.5s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-draw-line {
          animation: drawLine 2s ease-out forwards;
        }

        .animate-draw-line-delay {
          animation: drawLine 2s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default LearningMaterial;
