import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  PhoneIcon,
  CheckIcon,
  QrcodeIcon,
  ExclamationIcon,
  XIcon,
  ChartBarIcon,
  ChartPieIcon,
  CashIcon,
  TrendingUpIcon,
  ScaleIcon,
  LightBulbIcon,
  TrendingDownIcon,
  FilterIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

function BookSession() {
  // ✅ EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = "La7uiwZgmmsaIVgLq";
  const EMAILJS_SERVICE_ID = "service_u7d5vzf";
  const EMAILJS_TEMPLATE_ID = "template_xj1i4bg";
  const ADMIN_EMAIL = "erastusngamau90@gmail.com";

  // ✅ Payment Details - Send Money Only
  const PAYMENT_PHONE_NUMBER = "0715657800";
  const ACCOUNT_NAME = "Samuel Erastus Ngamau";

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    planType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const sessionPlans = [
    {
      id: "weekly",
      name: "Weekly Sessions",
      duration: "7 Days",
      sessions: "Multiple sessions per week",
      price: "KSh 999",
      originalPrice: "",
      discount: "",
      features: [
        "3 Live Sessions per week",
        "Daily Trading Support",
        "Weekly Progress Report",
        "Email Support",
        "Basic Trading Materials",
      ],
      popular: false,
      icon: CalendarIcon,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
    },
    {
      id: "daily",
      name: "1-Day Intensive",
      duration: "1 Day",
      sessions: "Full-day intensive session",
      price: "KSh 399",
      originalPrice: "",
      discount: "",
      features: [
        "5 Hours Intensive Learning",
        "1-on-1 Expert Guidance",
        "Immediate Doubt Solving",
        "Certificate of Completion",
        "Take-home Materials",
      ],
      popular: true,
      icon: ClockIcon,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
    },
    {
      id: "monthly",
      name: "Monthly Package",
      duration: "30 Days",
      sessions: "Complete monthly program",
      price: "KSh 4,999",
      originalPrice: "",
      discount: "",
      features: [
        "20 Live Sessions",
        "Personalized Learning Path",
        "24/7 WhatsApp Support",
        "Monthly Assessment",
        "Premium Trading Materials",
        "Certificate of Excellence",
      ],
      popular: false,
      icon: CalendarIcon,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-50",
    },
    {
      id: "quarterly",
      name: "Quarterly Program",
      duration: "1-3 Months",
      sessions: "Extended learning program",
      price: "KSh 9,999",
      originalPrice: "",
      discount: "",
      features: [
        "60+ Live Sessions",
        "Personal Mentor",
        "Priority 24/7 Support",
        "Weekly Assessments",
        "Advanced Trading Materials",
        "Career Guidance Session",
        "Certificate with Distinction",
      ],
      popular: false,
      icon: UserGroupIcon,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
    },
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ];

  const tradingCourses = [
    {
      id: "candlescience",
      name: "Candle Science & Patterns",
      icon: ChartPieIcon,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: "orderblock",
      name: "Order Block Navigation",
      icon: ChartBarIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "fairvalue",
      name: "Fair Value Gap (FVG)",
      icon: TrendingUpIcon,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "liquidity",
      name: "Liquidity & Market Dynamics",
      icon: CashIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "breakstructure",
      name: "Break of Structure",
      icon: ScaleIcon,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: "marketstructure",
      name: "Market Structure Analysis",
      icon: ChartBarIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      id: "714method",
      name: "714 Method Strategy",
      icon: AcademicCapIcon,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      id: "orbs",
      name: "ORBS Strategy",
      icon: SparklesIcon,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      id: "supportresistance",
      name: "Support & Resistance",
      icon: ScaleIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: "riskmanagement",
      name: "Risk Management",
      icon: ShieldCheckIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      id: "psychology",
      name: "Trading Psychology",
      icon: LightBulbIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      id: "falsebreakout",
      name: "False Breakout Analysis",
      icon: TrendingDownIcon,
      color: "text-rose-600",
      bgColor: "bg-rose-100",
    },
    {
      id: "priceaction",
      name: "Price Action Mastery",
      icon: TrendingUpIcon,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      id: "indicators",
      name: "Important Indicators",
      icon: FilterIcon,
      color: "text-violet-600",
      bgColor: "bg-violet-100",
    },
  ];

  // ✅ FIXED: Proper input change handler with better logging
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlanSelect = (planId) => {
    if (selectedPlan === planId) {
      setSelectedPlan(null);
      setFormData((prev) => ({
        ...prev,
        planType: "",
      }));
    } else {
      setSelectedPlan(planId);
      setFormData((prev) => ({
        ...prev,
        planType: planId,
      }));
    }
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourses((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  const sendBookingEmail = async () => {
    try {
      const selectedPlanData = getSelectedPlanData();

      // Get current date and time
      const now = new Date();
      const submissionDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const submissionTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Generate topics list with emojis
      const topicsList = selectedCourses
        .map((id) => {
          const course = getSelectedCourse(id);
          return course ? `✅ ${course.name}` : "";
        })
        .filter(Boolean)
        .join("\n");

      const templateParams = {
        to_email: ADMIN_EMAIL,
        to_name: "Samuel Erastus Ngamau",
        from_name: formData.name || "New Booking Inquiry",
        from_email: formData.email || "booking@tradingsession.com",
        reply_to: formData.email || ADMIN_EMAIL,
        subject: `📈 NEW BOOKING: ${formData.name} - ${selectedPlanData?.name} - ${selectedPlanData?.price}`,

        // Client info
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,

        // Booking details
        booking_date: formData.preferredDate,
        booking_time: formData.preferredTime,

        // Plan info
        selected_plan: selectedPlanData?.name || "Not selected",
        plan_duration: selectedPlanData?.duration || "Not specified",
        plan_price: selectedPlanData?.price || "Not specified",

        // Topics
        selected_topics: topicsList || "📭 No topics selected",
        number_of_topics: selectedCourses.length.toString(),

        // Goals
        trading_goals: formData.message || "🎯 No trading goals shared",

        // Payment info
        payment_status: "💰 PAYMENT REQUIRED",
        payment_amount: selectedPlanData?.price || "Contact for pricing",
        payment_method: "M-Pesa Send Money",
        payment_number: PAYMENT_PHONE_NUMBER,

        // Additional info
        action_required:
          "📞 CONTACT CLIENT TO CONFIRM PAYMENT AND SCHEDULE SESSION!",
        submission_timestamp: `${submissionDate} at ${submissionTime}`,
        contact_reminder: `📱 Call ${formData.phone} or WhatsApp ${formData.phone}`,
      };

      console.log("📤 Sending booking email...");

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log(
        "✅ Email sent successfully:",
        response.status,
        response.text
      );
      return {
        success: true,
        message: "Booking confirmation sent successfully!",
      };
    } catch (error) {
      console.error("❌ Email error:", error);
      return {
        success: false,
        message:
          "Failed to send booking confirmation. We'll still contact you!",
      };
    }
  };

  const confirmPayment = () => {
    setPaymentInProgress(true);

    setTimeout(() => {
      setPaymentInProgress(false);
      setShowPaymentModal(false);

      const selectedPlanData = getSelectedPlanData();
      alert(
        `✅ Payment Instructions Received!\n\nPlease send ${selectedPlanData?.price} via M-Pesa Send Money to:\n📱 Phone Number: ${PAYMENT_PHONE_NUMBER}\n👤 Account Name: ${ACCOUNT_NAME}`
      );
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    // Validation
    if (!selectedPlan) {
      setSubmitError("⚠️ Please select a session plan first!");
      setIsSubmitting(false);
      return;
    }

    if (selectedCourses.length === 0) {
      setSubmitError("⚠️ Please select at least one trading topic!");
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "preferredDate",
      "preferredTime",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field]?.trim()
    );

    if (missingFields.length > 0) {
      setSubmitError(`⚠️ Please fill in: ${missingFields.join(", ")}`);
      setIsSubmitting(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("⚠️ Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate phone (basic Kenyan format)
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    const cleanPhone = formData.phone.replace(/\s+/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      setSubmitError(
        "⚠️ Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Send booking email
      const emailResult = await sendBookingEmail();

      if (!emailResult.success) {
        console.warn("Email sending failed, but continuing with booking...");
      }

      const selectedPlanData = getSelectedPlanData();
      const selectedCourseNames = selectedCourses
        .map((id) => getSelectedCourse(id)?.name)
        .filter(Boolean)
        .join(", ");

      // Show success
      setSubmitSuccess(true);

      // Generate transaction ID if not exists
      if (!transactionId) {
        const transId = `TR${Date.now()}${Math.random()
          .toString(36)
          .substr(2, 4)
          .toUpperCase()}`;
        setTransactionId(transId);
      }

      // Show success alert
      const successMessage = `✅ Booking Submitted Successfully!\n\nThank you, ${formData.name}!\n\n💰 Plan: ${selectedPlanData.name} - ${selectedPlanData.price}\n📚 Topics: ${selectedCourseNames}\n📅 Date: ${formData.preferredDate}\n⏰ Time: ${formData.preferredTime}\n\n📧 Confirmation has been sent.\n\n💳 Payment Instructions:\n1️⃣ Go to M-Pesa on your phone\n2️⃣ Select "Send Money"\n3️⃣ Enter Phone Number: ${PAYMENT_PHONE_NUMBER}\n4️⃣ Enter Amount: ${selectedPlanData.price}\n5️⃣ Enter your M-Pesa PIN\n6️⃣ Send the money\n\n👤 Account Name: ${ACCOUNT_NAME}\n📞 Contact for confirmation: ${PAYMENT_PHONE_NUMBER}`;

      alert(successMessage);

      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
          planType: "",
        });
        setSelectedPlan(null);
        setSelectedCourses([]);
        setTransactionId("");
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        `⚠️ Submission failed. Please try again or call ${PAYMENT_PHONE_NUMBER}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedPlanData = () => {
    return sessionPlans.find((plan) => plan.id === selectedPlan);
  };

  const getSelectedCourse = (courseId) => {
    return tradingCourses.find((course) => course.id === courseId);
  };

  const renderCourseIcon = (course) => {
    if (!course) return null;
    const IconComponent = course.icon;
    return <IconComponent className={`w-5 h-5 ${course.color}`} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-10 px-4 relative overflow-hidden">
      {/* Forex Trading Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark Blue Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80"></div>

        {/* Animated USD/JPY Currency Pair - More Visible */}
        <div
          className="absolute top-10 left-5 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-blue-400/40 to-blue-600/40 backdrop-blur-sm rounded-full border border-blue-300/50 text-sm font-bold text-blue-200 shadow-lg">
            USD/JPY 149.85
          </div>
        </div>

        <div
          className="absolute top-20 right-10 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-green-400/40 to-green-600/40 backdrop-blur-sm rounded-full border border-green-300/50 text-sm font-bold text-green-200 shadow-lg">
            USD/JPY ▲ 0.15%
          </div>
        </div>

        {/* Moving grid lines - More Visible */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.4) 100%),
                             linear-gradient(0deg, transparent 95%, rgba(59, 130, 246, 0.4) 100%)`,
              backgroundSize: "50px 50px",
              animation: "gridMove 25s linear infinite",
            }}
          ></div>
        </div>

        {/* Money Bag Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`moneybag-${i}`}
            className="absolute"
            style={{
              left: `${10 + ((i * 12) % 80)}%`,
              top: `${15 + ((i * 8) % 75)}%`,
              animation: `moneyBagFloat ${8 + (i % 6)}s ease-in-out ${
                i * 0.3
              }s infinite`,
            }}
          >
            <div className="text-2xl">💰</div>
          </div>
        ))}

        {/* Animated GREEN Candles - Going UP */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`green-candle-up-${i}`}
            className="absolute"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${20 + ((i * 3) % 70)}%`,
              animation: `greenCandleUp ${3 + (i % 4)}s ease-in-out ${
                i * 0.2
              }s infinite`,
            }}
          >
            <div className="w-2 h-14 relative bg-gradient-to-b from-green-400 to-green-600 rounded-sm shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-0.5 h-4 bg-green-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-0.5 h-4 bg-green-300"></div>
            </div>
          </div>
        ))}

        {/* Animated RED Candles - Going DOWN */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`red-candle-down-${i}`}
            className="absolute"
            style={{
              left: `${(i * 6) % 100}%`,
              top: `${30 + ((i * 4) % 65)}%`,
              animation: `redCandleDown ${2.5 + (i % 3)}s ease-in-out ${
                i * 0.25
              }s infinite`,
            }}
          >
            <div className="w-2 h-12 relative bg-gradient-to-b from-red-400 to-red-600 rounded-sm shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-0.5 h-3 bg-red-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1.5 w-0.5 h-3 bg-red-300"></div>
            </div>
          </div>
        ))}

        {/* Large Green Candles Going UP */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`large-green-up-${i}`}
            className="absolute"
            style={{
              left: `${15 + ((i * 10) % 85)}%`,
              top: `${10 + ((i * 5) % 80)}%`,
              animation: `largeGreenUp ${4 + (i % 5)}s ease-in-out ${
                i * 0.4
              }s infinite`,
            }}
          >
            <div className="w-3 h-20 relative bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-sm shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-1 h-5 bg-emerald-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-1 h-5 bg-emerald-300"></div>
            </div>
          </div>
        ))}

        {/* Large Red Candles Going DOWN */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`large-red-down-${i}`}
            className="absolute"
            style={{
              left: `${5 + ((i * 15) % 90)}%`,
              top: `${40 + ((i * 7) % 60)}%`,
              animation: `largeRedDown ${3.5 + (i % 4)}s ease-in-out ${
                i * 0.5
              }s infinite`,
            }}
          >
            <div className="w-3 h-18 relative bg-gradient-to-b from-red-500 to-red-700 rounded-sm shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2.5 w-1 h-4 bg-red-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2.5 w-1 h-4 bg-red-300"></div>
            </div>
          </div>
        ))}

        {/* Floating currency pairs - More Visible */}
        {[
          "EUR/USD",
          "GBP/USD",
          "USD/JPY",
          "BTC/USD",
          "ETH/USD",
          "XAU/USD",
          "AUD/USD",
          "USD/CAD",
        ].map((pair, i) => (
          <div
            key={`pair-${i}`}
            className="absolute px-3 py-1.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full border border-blue-300/40 text-xs font-bold text-blue-200"
            style={{
              left: `${5 + ((i * 12) % 85)}%`,
              top: `${8 + ((i * 8) % 75)}%`,
              animation: `floatCurrency ${10 + i * 3}s ease-in-out ${
                i * 0.5
              }s infinite`,
            }}
          >
            {pair}
          </div>
        ))}

        {/* MORE VISIBLE GRAPHS - Some Going UP */}
        <div className="absolute top-1/4 left-5 w-1/4 opacity-50">
          <svg width="100%" height="120" className="opacity-80">
            <path
              d="M0,90 C30,30 60,100 90,40 C120,-20 150,70 180,20 C210,-30 240,60 270,10"
              stroke="url(#graphUp1)"
              strokeWidth="3"
              fill="none"
              style={{ animation: "drawGraphUp 18s linear infinite" }}
            />
            <defs>
              <linearGradient id="graphUp1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Graph Going DOWN */}
        <div className="absolute bottom-1/3 right-10 w-1/3 opacity-50">
          <svg width="100%" height="140" className="opacity-80">
            <path
              d="M0,30 C50,110 100,50 150,130 C200,210 250,150 300,230 C350,310 400,250 450,330"
              stroke="url(#graphDown1)"
              strokeWidth="3"
              fill="none"
              style={{ animation: "drawGraphDown 22s linear infinite 1s" }}
            />
            <defs>
              <linearGradient id="graphDown1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Additional UP Graph */}
        <div className="absolute top-40 right-20 w-1/4 opacity-40">
          <svg width="100%" height="80">
            <path
              d="M0,60 C20,10 40,70 60,20 C80,-30 100,40 120,-10 C140,-60 160,30 180,-20"
              stroke="#4ade80"
              strokeWidth="2.5"
              strokeOpacity="0.9"
              fill="none"
              style={{ animation: "drawGraphUp2 16s linear infinite 0.5s" }}
            />
          </svg>
        </div>

        {/* Additional DOWN Graph */}
        <div className="absolute bottom-40 left-20 w-1/3 opacity-40">
          <svg width="100%" height="100">
            <path
              d="M0,10 C30,80 60,20 90,90 C120,160 150,100 180,170 C210,240 240,180 270,250"
              stroke="#f87171"
              strokeWidth="2.5"
              strokeOpacity="0.9"
              fill="none"
              style={{ animation: "drawGraphDown2 20s linear infinite 1.5s" }}
            />
          </svg>
        </div>

        {/* Third UP Graph */}
        <div className="absolute top-20 left-40 w-1/5 opacity-30">
          <svg width="100%" height="60">
            <path
              d="M0,40 C15,5 30,45 45,10 C60,-25 75,35 90,0 C105,-35 120,25 135,-10"
              stroke="#86efac"
              strokeWidth="2"
              strokeOpacity="0.9"
              fill="none"
              style={{ animation: "drawGraphUp3 14s linear infinite 0.8s" }}
            />
          </svg>
        </div>

        {/* Third DOWN Graph */}
        <div className="absolute bottom-20 right-40 w-1/5 opacity-30">
          <svg width="100%" height="60">
            <path
              d="M0,20 C15,45 30,15 45,40 C60,65 75,35 90,60 C105,85 120,55 135,80"
              stroke="#fca5a5"
              strokeWidth="2"
              strokeOpacity="0.9"
              fill="none"
              style={{ animation: "drawGraphDown3 12s linear infinite 2s" }}
            />
          </svg>
        </div>

        {/* Floating profit/loss indicators - More Visible */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`indicator-${i}`}
            className={`absolute text-xs font-bold px-2 py-1 rounded ${
              i % 5 < 3
                ? "bg-green-500/50 text-green-200"
                : "bg-red-500/50 text-red-200"
            }`}
            style={{
              left: `${3 + ((i * 7) % 94)}%`,
              top: `${10 + ((i * 6) % 82)}%`,
              animation: `profitLoss ${4 + (i % 6)}s ease-in-out ${
                i * 0.3
              }s infinite`,
            }}
          >
            {i % 5 < 3
              ? "▲ +" + (0.8 + i * 0.15).toFixed(1) + "%"
              : "▼ -" + (0.5 + i * 0.1).toFixed(1) + "%"}
          </div>
        ))}

        {/* Animated trading indicators - More Visible */}
        <div className="absolute bottom-20 right-10 w-32 h-16 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 backdrop-blur-sm rounded-lg border border-yellow-400/50 flex items-center justify-center">
          <div
            className="text-sm font-bold text-yellow-200 animate-pulse"
            style={{ animationDuration: "2s" }}
          >
            💰 +12.5%
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-16 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 backdrop-blur-sm rounded-lg border border-cyan-400/50 flex items-center justify-center">
          <div
            className="text-sm font-bold text-cyan-200 animate-pulse"
            style={{ animationDuration: "3s" }}
          >
            📈 Bullish
          </div>
        </div>

        {/* Price movement waves - More Visible */}
        <div className="absolute bottom-10 left-1/4 w-1/2 opacity-40">
          <svg width="100%" height="60">
            <path
              d="M0,30 Q25,5 50,30 Q75,55 100,30 Q125,5 150,30 Q175,55 200,30 Q225,5 250,30 Q275,55 300,30 Q325,5 350,30 Q375,55 400,30"
              stroke="#22c55e"
              strokeWidth="2"
              strokeOpacity="0.9"
              fill="none"
              style={{ animation: "waveMotion 12s linear infinite" }}
            />
          </svg>
        </div>

        {/* More Money Symbols */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`money-${i}`}
            className="absolute text-lg"
            style={{
              left: `${(i * 8) % 95}%`,
              top: `${(i * 6) % 85}%`,
              animation: `moneyFloat ${5 + (i % 7)}s ease-in-out ${
                i * 0.2
              }s infinite`,
            }}
          >
            {i % 3 === 0 ? "💵" : i % 3 === 1 ? "💎" : "💹"}
          </div>
        ))}

        {/* Animated particles - More Visible */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
            style={{
              left: `${(i * 3.5) % 100}%`,
              top: `${(i * 2.5) % 100}%`,
              animation: `particleFloat ${2.5 + (i % 5)}s ease-in-out ${
                i * 0.15
              }s infinite`,
              opacity: 0.7,
            }}
          ></div>
        ))}

        {/* Volume bars animation - More Visible */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-40">
          <div className="flex items-end justify-center h-full space-x-1">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={`volume-${i}`}
                className="w-2.5 bg-gradient-to-t from-green-500/50 to-emerald-600/50 rounded-t"
                style={{
                  height: `${25 + Math.sin(i * 0.4) * 20}%`,
                  animation: `volumePulse ${
                    1.8 + i * 0.08
                  }s ease-in-out infinite ${i * 0.08}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Additional USD/JPY indicators - More Visible */}
        <div className="absolute bottom-32 left-16 animate-pulse">
          <div className="px-3 py-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full text-sm text-blue-200 font-semibold">
            💰 Profit
          </div>
        </div>

        <div
          className="absolute top-32 right-24 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="px-3 py-1 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-full text-sm text-green-200 font-semibold">
            📊 +8.3%
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-30px) translateX(-30px);
          }
        }

        @keyframes greenCandleUp {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-25px) scale(1.15);
            opacity: 1;
          }
        }

        @keyframes redCandleDown {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(20px) scale(0.9);
            opacity: 1;
          }
        }

        @keyframes largeGreenUp {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes largeRedDown {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(25px) scale(0.85);
            opacity: 1;
          }
        }

        @keyframes moneyBagFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.7;
            scale: 1;
          }
          33% {
            transform: translateY(-15px) translateX(5px) rotate(10deg);
            opacity: 1;
            scale: 1.2;
          }
          66% {
            transform: translateY(10px) translateX(-5px) rotate(-5deg);
            opacity: 0.8;
            scale: 0.9;
          }
        }

        @keyframes moneyFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-12px) translateX(4px) rotate(15deg);
            opacity: 0.9;
          }
          50% {
            transform: translateY(8px) translateX(-4px) rotate(-15deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-8px) translateX(2px) rotate(10deg);
            opacity: 0.8;
          }
        }

        @keyframes floatCurrency {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-8px) translateX(5px) rotate(1deg);
            opacity: 0.9;
          }
          66% {
            transform: translateY(5px) translateX(-3px) rotate(-1deg);
            opacity: 0.7;
          }
        }

        @keyframes drawGraphUp {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: -1000;
          }
        }

        @keyframes drawGraphDown {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: -1000;
          }
        }

        @keyframes drawGraphUp2 {
          0% {
            stroke-dasharray: 800;
            stroke-dashoffset: 800;
          }
          100% {
            stroke-dasharray: 800;
            stroke-dashoffset: -800;
          }
        }

        @keyframes drawGraphDown2 {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: -1000;
          }
        }

        @keyframes drawGraphUp3 {
          0% {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dasharray: 600;
            stroke-dashoffset: -600;
          }
        }

        @keyframes drawGraphDown3 {
          0% {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dasharray: 600;
            stroke-dashoffset: -600;
          }
        }

        @keyframes profitLoss {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-18px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-8px) translateX(4px);
            opacity: 0.9;
          }
          66% {
            transform: translateY(5px) translateX(-3px);
            opacity: 0.5;
          }
        }

        @keyframes waveMotion {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes volumePulse {
          0%,
          100% {
            height: 25%;
          }
          50% {
            height: 45%;
          }
        }
      `}</style>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl w-full max-w-sm relative border border-gray-700">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full flex items-center justify-center z-50 shadow-lg transition-all hover:scale-110"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    💳 Payment Instructions
                  </h2>
                  <p className="text-green-100 text-sm">M-Pesa Send Money</p>
                </div>
                <CurrencyDollarIcon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {paymentInProgress ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Verifying Payment...
                  </h3>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-600 to-emerald-700 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <QrcodeIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    Send Money via M-Pesa
                  </h3>

                  <div className="space-y-4">
                    {/* Payment Steps */}
                    <div className="p-3 bg-green-900/30 rounded-lg border border-green-700/50">
                      <h4 className="font-bold text-green-300 mb-2 text-sm">
                        📱 Send Money Steps:
                      </h4>
                      <ol className="space-y-2 text-left text-sm">
                        {[
                          "Go to M-Pesa on your phone",
                          "Select Send Money",
                          `Enter Phone Number: ${PAYMENT_PHONE_NUMBER}`,
                          `Enter Amount: ${getSelectedPlanData()?.price}`,
                          "Enter your M-Pesa PIN",
                          "Confirm and send",
                        ].map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-gray-300 text-sm">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Payment Details */}
                    <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Amount:</span>
                          <span className="text-lg font-bold text-white">
                            {getSelectedPlanData()?.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Phone:</span>
                          <span className="font-bold text-green-400">
                            {PAYMENT_PHONE_NUMBER}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Account:
                          </span>
                          <span className="font-semibold text-white">
                            {ACCOUNT_NAME}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Important Note */}
                    <div className="p-3 bg-yellow-900/30 rounded-lg border border-yellow-700/50">
                      <div className="flex items-start">
                        <ExclamationIcon className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-300">
                            Use <strong>Send Money</strong> only. You'll receive
                            confirmation from {PAYMENT_PHONE_NUMBER}.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2">
                      <button
                        onClick={confirmPayment}
                        className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all text-sm transform hover:scale-[1.02]"
                      >
                        ✅ I HAVE SENT MONEY
                      </button>
                      <button
                        onClick={() => setShowPaymentModal(false)}
                        className="w-full py-3 bg-gray-700 text-gray-300 rounded-lg font-bold hover:bg-gray-600 transition-all text-sm"
                      >
                        ← BACK TO BOOKING
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-6 shadow-lg animate-pulse">
            <ChartBarIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Book Your Trading Session
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Select topics, choose a plan, and book your trading session today
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2 rotate-180" />
              Back to Homepage
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trading Courses */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mr-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    1. Select Trading Topics
                  </h2>
                  <p className="text-gray-400">
                    Choose all topics you want to learn
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tradingCourses.map((course) => {
                  const isSelected = selectedCourses.includes(course.id);
                  return (
                    <div
                      key={course.id}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? "border-blue-500 bg-blue-900/40 shadow-lg"
                          : "border-gray-700 hover:border-gray-500 bg-gray-800/60"
                      }`}
                      onClick={() => handleCourseSelect(course.id)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-lg ${course.bgColor} mr-3`}
                        >
                          {renderCourseIcon(course)}
                        </div>
                        <span className="font-medium text-white text-sm">
                          {course.name}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedCourses.length > 0 && (
                <div className="mt-6 p-4 bg-green-900/30 rounded-xl border border-green-700/50">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                    <span className="font-semibold text-green-300">
                      Selected {selectedCourses.length} topic
                      {selectedCourses.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Session Plans */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    2. Choose Your Learning Plan
                  </h2>
                  <p className="text-gray-400">
                    Select the perfect plan for your trading journey
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sessionPlans.map((plan) => {
                  const Icon = plan.icon;
                  const isSelected = selectedPlan === plan.id;
                  return (
                    <div
                      key={plan.id}
                      className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? `${
                              plan.borderColor
                            } shadow-xl ${plan.bgColor.replace("50", "900/40")}`
                          : "border-gray-700 hover:border-gray-500 bg-gray-800/60"
                      }`}
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            ⭐ MOST POPULAR
                          </div>
                        </div>
                      )}

                      <div
                        className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-500"
                        }`}
                      >
                        {isSelected && (
                          <CheckIcon className="w-4 h-4 text-white" />
                        )}
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${plan.color}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">
                            {plan.price}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-center text-gray-400 mb-4">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{plan.duration}</span>
                      </div>

                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircleIcon
                              className={`w-5 h-5 mr-3 ${
                                isSelected ? "text-green-400" : "text-gray-500"
                              }`}
                            />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`w-full py-3 rounded-xl font-bold transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {isSelected ? "SELECTED" : "SELECT"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    3. Complete Your Details
                  </h2>
                  <p className="text-gray-400">
                    Fill in your information to complete your booking
                  </p>
                </div>
              </div>

              {/* Messages */}
              {submitSuccess && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">
                        ✅ Booking Submitted!
                      </h3>
                      <p className="text-green-100">
                        We've sent confirmation to your email. Check your inbox!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl">
                  <div className="flex items-center">
                    <ExclamationIcon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">{submitError}</h3>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Type your full name here
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Type your email address here
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="0712345678"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Type your Kenyan phone number here
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Select or type your preferred date
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-gray-800">
                          {time}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Select your preferred time slot
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Selected Topics ({selectedCourses.length})
                    </label>
                    <div className="px-4 py-3 border-2 border-gray-700 rounded-xl bg-gray-800/60 min-h-[60px] transition-all">
                      {selectedCourses.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedCourses.map((courseId) => {
                            const course = getSelectedCourse(courseId);
                            return course ? (
                              <span
                                key={courseId}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-900/50 text-blue-300 border border-blue-700/50"
                              >
                                {course.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      ) : (
                        <span className="text-gray-500 italic">
                          No topics selected yet. Select from above.
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Your selected topics will appear here
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Trading Goals (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800/60 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                    placeholder="Type your trading goals, experience level, or specific questions here..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Type your trading goals or questions here
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !selectedPlan ||
                      selectedCourses.length === 0
                    }
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      !isSubmitting &&
                      selectedPlan &&
                      selectedCourses.length > 0
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-700 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white mr-2"></div>
                        PROCESSING...
                      </div>
                    ) : (
                      "SUBMIT BOOKING"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(true)}
                    disabled={!selectedPlan}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      selectedPlan
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                        : "bg-gray-700 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    💳 VIEW PAYMENT INSTRUCTIONS
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BookOpenIcon className="w-6 h-6 mr-2 text-blue-400" />
                📋 Order Summary
              </h3>

              {selectedPlan ? (
                <>
                  <div className="space-y-6">
                    {selectedCourses.length > 0 && (
                      <div className="pb-4 border-b border-gray-700">
                        <div className="font-semibold text-white mb-2 flex items-center">
                          <AcademicCapIcon className="w-5 h-5 mr-2 text-purple-400" />
                          Selected Topics ({selectedCourses.length})
                        </div>
                        <div className="space-y-1 max-h-32 overflow-y-auto pr-2">
                          {selectedCourses.map((courseId) => {
                            const course = getSelectedCourse(courseId);
                            return course ? (
                              <div
                                key={courseId}
                                className="text-sm text-gray-300 flex items-center"
                              >
                                <CheckIcon className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                                <span className="truncate">{course.name}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <div className="pb-4 border-b border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-white flex items-center">
                          <CalendarIcon className="w-5 h-5 mr-2 text-blue-400" />
                          {getSelectedPlanData()?.name}
                        </div>
                        <div className="text-lg font-bold text-blue-400">
                          {getSelectedPlanData()?.price}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        {getSelectedPlanData()?.duration}
                      </p>
                    </div>

                    <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/50">
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-400 mr-2" />
                        <div>
                          <span className="font-semibold text-green-300">
                            Fixed Price: {getSelectedPlanData()?.price}
                          </span>
                          <p className="text-sm text-green-400 mt-1">
                            No hidden fees or extra charges
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl text-white">
                    <h4 className="font-bold mb-3 flex items-center">
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      📞 Contact & Payment
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>Phone:</span>
                        <span className="font-bold">
                          {PAYMENT_PHONE_NUMBER}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Payment Method:</span>
                        <span className="font-bold">M-Pesa Send Money</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Account Name:</span>
                        <span className="font-bold">{ACCOUNT_NAME}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-900/30 rounded-xl border border-blue-700/50">
                    <div className="flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 text-blue-400 mr-2" />
                      <div>
                        <span className="font-semibold text-blue-300">
                          Secure Booking
                        </span>
                        <p className="text-xs text-blue-400 mt-1">
                          Your information is secure. We'll contact you within
                          24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <CalendarIcon className="w-12 h-12 mx-auto text-gray-700 mb-3" />
                  <p>Select a plan and topics to see your order summary</p>
                </div>
              )}
            </div>

            {/* Pricing Summary */}
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-white border border-blue-700/30">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CurrencyDollarIcon className="w-6 h-6 mr-2" />
                💰 Fixed Pricing
              </h3>
              <div className="space-y-4">
                {sessionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`flex justify-between items-center p-3 rounded-lg transition-all ${
                      selectedPlan === plan.id
                        ? "bg-white/20 shadow-inner"
                        : "bg-white/10 hover:bg-white/15"
                    }`}
                  >
                    <div>
                      <div className="font-bold">{plan.name}</div>
                      <div className="text-sm opacity-90">{plan.duration}</div>
                    </div>
                    <div className="text-2xl font-bold">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700">
            <ShieldCheckIcon className="w-5 h-5 text-blue-400 mr-2 animate-pulse" />
            <p className="text-gray-300">
              <strong className="text-white">Fixed Pricing Guarantee:</strong>{" "}
              No hidden fees • 24/7 Support • Secure Booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSession;
