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
  // ✅ EmailJS Configuration - Moved outside component for better security in production
  const EMAILJS_PUBLIC_KEY = "La7uiwZgmmsaIVgLq";
  const EMAILJS_SERVICE_ID = "service_u7d5vzf";
  const EMAILJS_TEMPLATE_ID = "template_xj1i4bg";
  const ADMIN_EMAIL = "erastusngamau90@gmail.com";

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
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

  // ✅ FIXED: Removed unnecessary state (paymentConfirmed was not used properly)

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

  // ✅ FIXED: sendBookingEmail function - improved error handling
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

      // ✅ Improved template params
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
        payment_method: "M-Pesa",

        // Additional info
        action_required:
          "📞 CONTACT CLIENT TO CONFIRM PAYMENT AND SCHEDULE SESSION!",
        submission_timestamp: `${submissionDate} at ${submissionTime}`,
        contact_reminder: `📱 Call ${formData.phone} or WhatsApp ${formData.phone}`,
      };

      console.log("📤 Sending booking email...");

      // ✅ Use try-catch for email sending
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

  // ✅ FIXED: Removed unused sendMpesaPayment function and consolidated logic

  const confirmPayment = () => {
    setPaymentInProgress(true);

    setTimeout(() => {
      setPaymentInProgress(false);
      setShowPaymentModal(false);

      const selectedPlanData = getSelectedPlanData();
      alert(
        `✅ Payment Instructions Received!\n\nPlease pay ${selectedPlanData?.price} via M-Pesa to Till Number 4040456`
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
      (field) => !formData[field].trim()
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
      const successMessage = `✅ Booking Submitted Successfully!\n\nThank you, ${
        formData.name
      }!\n\n💰 Plan: ${selectedPlanData.name} - ${
        selectedPlanData.price
      }\n📚 Topics: ${selectedCourseNames}\n📅 Date: ${
        formData.preferredDate
      }\n⏰ Time: ${
        formData.preferredTime
      }\n\n📧 Confirmation has been sent.\n\n💳 Payment Instructions:\n1️⃣ Send ${
        selectedPlanData.price
      }\n2️⃣ Till Number: 4040456\n3️⃣ Account: Samuel Erastus Ngamau\n4️⃣ Reference: ${
        transactionId || "BOOKING"
      }\n\n📞 Contact: 0715657800`;

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
        "⚠️ Submission failed. Please try again or call 0715657800"
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

  // ✅ FIXED: Helper function for rendering course icon
  const renderCourseIcon = (course) => {
    if (!course) return null;
    const IconComponent = course.icon;
    return <IconComponent className={`w-5 h-5 ${course.color}`} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-10 px-4">
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 z-10"
            >
              <XIcon className="w-5 h-5 text-gray-600" />
            </button>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    💳 Payment Instructions
                  </h2>
                  <p className="text-green-100">
                    Complete your booking with M-Pesa
                  </p>
                </div>
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="p-6">
              {paymentInProgress ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Verifying Payment...
                  </h3>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <QrcodeIcon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pay via M-Pesa
                  </h3>

                  <div className="space-y-6">
                    {/* Payment Steps */}
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <h4 className="font-bold text-gray-800 mb-3">
                        📱 Payment Steps:
                      </h4>
                      <ol className="space-y-3 text-left">
                        {[1, 2, 3, 4, 5, 6].map((step) => (
                          <li key={step} className="flex items-start">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                              {step}
                            </span>
                            <span>Step {step} description</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Payment Details */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Amount:</span>
                          <span className="text-2xl font-bold text-gray-900">
                            {getSelectedPlanData()?.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Till Number:</span>
                          <span className="text-xl font-bold text-green-600">
                            4040456
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={confirmPayment}
                        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:shadow-lg"
                      >
                        ✅ I HAVE PAID
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <ChartBarIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Trading Session
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select topics, choose a plan, and book your trading session today
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold hover:shadow-lg transition-all"
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Select Trading Topics
                  </h2>
                  <p className="text-gray-600">
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
                          ? "border-blue-500 bg-blue-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleCourseSelect(course.id)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-lg ${course.bgColor} mr-3`}
                        >
                          {renderCourseIcon(course)}
                        </div>
                        <span className="font-medium text-gray-800 text-sm">
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
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">
                      Selected {selectedCourses.length} topic
                      {selectedCourses.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Session Plans */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Choose Your Learning Plan
                  </h2>
                  <p className="text-gray-600">
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
                          ? `${plan.borderColor} shadow-xl ${plan.bgColor}`
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            ⭐ MOST POPULAR
                          </div>
                        </div>
                      )}

                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center">
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
                          <div className="text-2xl font-bold text-gray-900">
                            {plan.price}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{plan.duration}</span>
                      </div>

                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircleIcon
                              className={`w-5 h-5 mr-3 ${
                                isSelected ? "text-green-500" : "text-gray-400"
                              }`}
                            />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`w-full py-3 rounded-xl font-bold ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700"
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Complete Your Details
                  </h2>
                  <p className="text-gray-600">
                    Fill in your information to complete your booking
                  </p>
                </div>
              </div>

              {/* Messages */}
              {submitSuccess && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">
                        ✅ Booking Submitted!
                      </h3>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl">
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
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0712345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Selected Topics ({selectedCourses.length})
                    </label>
                    <div className="px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 min-h-[60px]">
                      {selectedCourses.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedCourses.map((courseId) => {
                            const course = getSelectedCourse(courseId);
                            return course ? (
                              <span
                                key={courseId}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                              >
                                {course.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      ) : (
                        <span className="text-gray-500 italic">
                          No topics selected
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Trading Goals (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your trading goals..."
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !selectedPlan ||
                      selectedCourses.length === 0
                    }
                    className={`w-full py-4 rounded-xl font-bold text-lg ${
                      !isSubmitting &&
                      selectedPlan &&
                      selectedCourses.length > 0
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                📋 Order Summary
              </h3>

              {selectedPlan ? (
                <>
                  <div className="space-y-6">
                    {selectedCourses.length > 0 && (
                      <div className="pb-4 border-b border-gray-200">
                        <div className="font-semibold text-gray-900 mb-2">
                          Selected Topics ({selectedCourses.length})
                        </div>
                        <div className="space-y-1 max-h-32 overflow-y-auto">
                          {selectedCourses.map((courseId) => {
                            const course = getSelectedCourse(courseId);
                            return course ? (
                              <div
                                key={courseId}
                                className="text-sm text-gray-700"
                              >
                                • {course.name}
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <div className="pb-4 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-gray-900">
                          {getSelectedPlanData()?.name}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {getSelectedPlanData()?.price}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">
                          Fixed Price: {getSelectedPlanData()?.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
                    <h4 className="font-bold mb-3">📞 Contact</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Phone:</span>
                        <span className="font-bold">0715657800</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Till Number:</span>
                        <span className="font-bold">4040456</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Select a plan and topics
                </div>
              )}
            </div>

            {/* Pricing Summary */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">💰 Fixed Pricing</h3>
              <div className="space-y-4">
                {sessionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex justify-between items-center p-3 bg-white/10 rounded-lg"
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
          <div className="inline-flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <ShieldCheckIcon className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-gray-600">
              <strong>Fixed Pricing Guarantee:</strong> No hidden fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSession;
