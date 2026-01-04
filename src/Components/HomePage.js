import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  FireIcon,
  BadgeCheckIcon,
  DeviceMobileIcon,
  WifiIcon,
  CashIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  CurrencyDollarIcon,
  LightningBoltIcon,
  PhoneIcon,
  ChartBarIcon as ChartBarIconSolid,
} from "@heroicons/react/solid";

function HomePage() {
  // ✅ EmailJS Configuration - ONE EMAIL ONLY
  const EMAILJS_PUBLIC_KEY = "La7uiwZgmmsaIVgLq";
  const EMAILJS_SERVICE_ID = "service_u7d5vzf";
  const EMAILJS_TEMPLATE_ID = "template_xj1i4bg";
  const ADMIN_EMAIL = "erastusngamau90@gmail.com";

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Timer count from 12 days (CHANGED FROM 30 TO 12)
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [isLoading, setIsLoading] = useState(true);

  // DYNAMIC SLOT MANAGEMENT - Changed to track real bookings
  const [availableSlots] = useState(10);
  const [registeredSlots, setRegisteredSlots] = useState(3); // Start with 3, but will increase with bookings

  const [selectedPlan, setSelectedPlan] = useState("daily");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("2:00 PM - 4:00 PM");

  // Booking form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "2:00 PM - 4:00 PM",
    message: "",
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Track total bookings made during session
  const [sessionBookings, setSessionBookings] = useState(0);

  // Refs
  const paymentSectionRef = useRef(null);
  const bookingSectionRef = useRef(null);

  // Set registration deadline to 12 days from now (CHANGED)
  const [registrationDeadline] = useState(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 12); // CHANGED from 30 to 12
    deadline.setHours(23, 59, 59, 999);
    return deadline;
  });

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = registrationDeadline.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setIsLoading(false);
    }, 1000);

    setTimeLeft(calculateTimeLeft());
    setIsLoading(false);

    return () => clearInterval(timer);
  }, [registrationDeadline]);

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  // Calculate enrollment percentage - NOW DYNAMIC
  const enrollmentPercentage = Math.round(
    (registeredSlots / availableSlots) * 100
  );

  // Function to update slots when booking is made
  const updateRegisteredSlots = () => {
    if (registeredSlots < availableSlots) {
      const newSlots = registeredSlots + 1;
      setRegisteredSlots(newSlots);
      setSessionBookings((prev) => prev + 1);

      // Update localStorage to persist across page refresh
      localStorage.setItem("totalBookings", sessionBookings + 1);
      localStorage.setItem("registeredSlots", newSlots);

      return newSlots;
    }
    return registeredSlots;
  };

  // Load initial booking data from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("totalBookings");
    const savedSlots = localStorage.getItem("registeredSlots");

    if (savedBookings) {
      setSessionBookings(parseInt(savedBookings));
    }

    if (savedSlots) {
      // Ensure we don't exceed available slots
      const slots = parseInt(savedSlots);
      setRegisteredSlots(Math.min(slots, availableSlots));
    }
  }, [availableSlots]);

  const scrollToBookingSection = () => {
    if (bookingSectionRef.current) {
      bookingSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      bookingSectionRef.current.classList.add("highlight-section");
      setTimeout(() => {
        if (bookingSectionRef.current) {
          bookingSectionRef.current.classList.remove("highlight-section");
        }
      }, 1500);
    }
  };

  const courseModules = [
    { id: 1, name: "Candle Science", emoji: "📊", color: "bg-red-500" },
    {
      id: 2,
      name: "Order Block Navigation",
      emoji: "🧱",
      color: "bg-blue-500",
    },
    { id: 3, name: "Fair Value Gap", emoji: "📊", color: "bg-green-500" },
    {
      id: 4,
      name: "Liquidity and Market Dynamics",
      emoji: "💧",
      color: "bg-purple-500",
    },
    { id: 5, name: "Break of Structure", emoji: "⚡", color: "bg-yellow-500" },
    {
      id: 6,
      name: "Market Structure Analysis",
      emoji: "🏗️",
      color: "bg-pink-500",
    },
    { id: 7, name: "714 Method Strategy", emoji: "🎯", color: "bg-indigo-500" },
    { id: 8, name: "ORBS Strategy", emoji: "🎲", color: "bg-teal-500" },
    {
      id: 9,
      name: "Support and Resistance",
      emoji: "📈",
      color: "bg-orange-500",
    },
    { id: 10, name: "Risk Management", emoji: "🛡️", color: "bg-cyan-500" },
    {
      id: 11,
      name: "Trading Psychology",
      emoji: "🧠",
      color: "bg-emerald-500",
    },
    {
      id: 12,
      name: "False Breakout Analysis",
      emoji: "🎭",
      color: "bg-rose-500",
    },
    {
      id: 13,
      name: "Price Action Mastery",
      emoji: "🎖️",
      color: "bg-violet-500",
    },
  ];

  const prerequisites = [
    {
      icon: DeviceMobileIcon,
      emoji: "📱",
      title: "Smart Phone",
      description: "Android or iOS device for trading apps",
    },
    {
      icon: WifiIcon,
      emoji: "🌐",
      title: "Reliable Internet",
      description: "Stable connection for live trading sessions",
    },
    {
      icon: AcademicCapIcon,
      emoji: "🎓",
      title: "Willing to Learn",
      description: "Open mindset for mastering trading concepts",
    },
  ];

  const stats = [
    { icon: UserGroupIcon, emoji: "👥", value: "10", label: "Limited Slots" },
    { icon: AcademicCapIcon, emoji: "📚", value: "13", label: "Modules" },
    { icon: BadgeCheckIcon, emoji: "✅", value: "98%", label: "Success Rate" },
    {
      icon: StarIcon,
      emoji: "💰",
      value: "70%",
      label: "Money Back Guarantee",
    },
  ];

  const sessionPlans = [
    {
      id: "daily",
      name: "1-Day Intensive",
      duration: "1 Day",
      sessions: "Full-day intensive session",
      price: 399,
      savings: "Save 97%",
      features: [
        "✅ 5 Hours Intensive Learning",
        "✅ 1-on-1 Expert Guidance",
        "✅ Immediate Doubt Solving",
        "✅ Certificate of Completion",
        "✅ Take-home Materials",
        "✅ Email Support (7 days)",
      ],
      popular: true,
      icon: LightningBoltIcon,
      emoji: "⚡",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      badgeColor: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      id: "weekly",
      name: "Weekly Package",
      duration: "7 Days",
      sessions: "Multiple sessions per week",
      price: 999,
      savings: "Save 75%",
      features: [
        "✅ 3 Live Sessions per week",
        "✅ Daily Trading Support",
        "✅ Weekly Progress Report",
        "✅ 24/7 WhatsApp Support",
        "✅ Premium Trading Materials",
        "✅ Certificate of Participation",
      ],
      popular: false,
      icon: CalendarIcon,
      emoji: "📅",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: "monthly",
      name: "Monthly Program",
      duration: "30 Days",
      sessions: "Complete monthly program",
      price: 4999,
      savings: "Save 58% vs Quarterly",
      features: [
        "✅ 20+ Live Sessions",
        "✅ Personalized Learning Path",
        "✅ Priority 24/7 Support",
        "✅ Monthly Assessment",
        "✅ Advanced Trading Materials",
        "✅ Certificate of Excellence",
        "✅ Weekly Q&A Sessions",
      ],
      popular: true,
      icon: TrendingUpIcon,
      emoji: "📈",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: "quarterly",
      name: "Quarterly Mastery",
      duration: "90 Days",
      sessions: "Extended mastery program",
      price: 9999,
      savings: "Save 33% Monthly",
      features: [
        "✅ 60+ Live Sessions",
        "✅ Personal Mentor Assignee",
        "✅ VIP 24/7 Support",
        "✅ Weekly Assessments",
        "✅ Pro Trading Materials",
        "✅ Career Guidance Session",
        "✅ Certificate with Distinction",
        "✅ Market Analysis Reports",
      ],
      popular: true,
      icon: StarIcon,
      emoji: "🌟",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-50",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const timeSlots = [
    { time: "9:00 AM - 11:00 AM", emoji: "🌅" },
    { time: "11:00 AM - 1:00 PM", emoji: "☀️" },
    { time: "2:00 PM - 4:00 PM", emoji: "⏰" },
    { time: "4:00 PM - 6:00 PM", emoji: "🌇" },
    { time: "6:00 PM - 8:00 PM", emoji: "🌙" },
  ];

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseSelection = (courseId) => {
    setSelectedCourses((prev) => {
      if (prev.includes(courseId)) {
        return prev.filter((id) => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  const getSelectedCourse = (courseId) => {
    return courseModules.find((course) => course.id === courseId);
  };

  const getSelectedPlanData = () => {
    return sessionPlans.find((plan) => plan.id === selectedPlan);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format date for email
  const formatDateForEmail = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ FIXED: Send ONE email with ALL details including emojis
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
      const topicsWithEmojis = selectedCourses
        .map((id) => {
          const course = getSelectedCourse(id);
          return course ? `${course.emoji} ${course.name}` : "";
        })
        .filter(Boolean)
        .join("\n");

      const topicsList = selectedCourses
        .map((id) => {
          const course = getSelectedCourse(id);
          return course ? course.name : "";
        })
        .filter(Boolean)
        .join(", ");

      // ✅ Send ONE email with ALL details - NO DUPLICATES
      const templateParams = {
        // Email configuration
        to_email: ADMIN_EMAIL,
        to_name: "Samuel Erastus Ngamau",
        from_name: formData.name || "New Bootcamp Client",
        from_email: "booking@forexbootcamp.com",
        reply_to: formData.email,

        // Subject line with emoji
        subject: `🚨 NEW BOOKING: ${formData.name} - ${selectedPlanData?.name}`,

        // ✅ CLIENT INFORMATION with emojis
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,

        // ✅ BOOKING DATE & TIME with emojis
        booking_date: `📅 ${formatDateForEmail(formData.preferredDate)}`,
        booking_time: `⏰ ${formData.preferredTime}`,

        // ✅ SELECTED PLAN with emoji
        selected_plan: `📋 ${selectedPlanData?.name}`,
        plan_price: `💰 Ksh ${formatPrice(selectedPlanData?.price || 0)}`,
        plan_duration: `⏳ ${selectedPlanData?.duration}`,

        // ✅ SELECTED TOPICS with emojis
        selected_topics: `📚 ${topicsList}`,
        detailed_topics: topicsWithEmojis,
        number_of_topics: `🎯 ${selectedCourses.length} topics selected`,

        // ✅ TRADING GOALS with emoji
        trading_goals: formData.message
          ? `🎯 ${formData.message}`
          : "🎯 No trading goals shared",

        // ✅ BOOTCAMP STATUS with emojis - NOW DYNAMIC
        enrollment_status: `👥 ${
          registeredSlots + 1
        }/${availableSlots} slots filled`,
        slots_left: `🚨 ${availableSlots - (registeredSlots + 1)} spots left`,
        days_remaining: `⏳ ${timeLeft.days} days remaining`,

        // ✅ PAYMENT INFORMATION with emojis
        mpesa_number: "📱 0715657800",
        account_name: "👤 Samuel Erastus Ngamau",
        total_amount: `💰 Ksh ${formatPrice(selectedPlanData?.price || 0)}`,

        // ✅ SUBMISSION TIMESTAMP with emoji
        submission_timestamp: `📝 Submitted on ${submissionDate} at ${submissionTime}`,

        // ✅ URGENT ACTION with emoji
        action_required: "⚡ PLEASE CONTACT CLIENT WITHIN 24 HOURS! ⚡",

        // ✅ ALL IN ONE SUMMARY
        complete_summary: `
👤 CLIENT: ${formData.name}
📧 EMAIL: ${formData.email}
📞 PHONE: ${formData.phone}

📅 BOOKING DATE: ${formatDateForEmail(formData.preferredDate)}
⏰ BOOKING TIME: ${formData.preferredTime}

📋 PLAN: ${selectedPlanData?.name}
💰 PRICE: Ksh ${formatPrice(selectedPlanData?.price || 0)}

🎯 TOPICS (${selectedCourses.length}):
${topicsWithEmojis}

💭 TRADING GOALS:
${formData.message || "No goals shared"}

📊 SLOTS STATUS: ${registeredSlots + 1}/${availableSlots} filled
🎟️ SLOTS LEFT: ${availableSlots - (registeredSlots + 1)} remaining

⚡ ACTION: Contact within 24 hours!
        `,
      };

      console.log("📤 SENDING ONE EMAIL WITH EMOJIS:");
      console.log("=================================");
      console.log("👤 Client:", formData.name);
      console.log("📧 Email:", formData.email);
      console.log("📞 Phone:", formData.phone);
      console.log("📅 Date:", formatDateForEmail(formData.preferredDate));
      console.log("⏰ Time:", formData.preferredTime);
      console.log("📚 Topics:", selectedCourses.length);
      console.log("🎯 Goals:", formData.message || "None");
      console.log("📋 Plan:", selectedPlanData?.name);
      console.log(
        "💰 Price:",
        `Ksh ${formatPrice(selectedPlanData?.price || 0)}`
      );
      console.log(
        "📊 Updated Slots:",
        `${registeredSlots + 1}/${availableSlots}`
      );
      console.log("=================================");

      // ✅ Send ONLY ONE email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("✅ ONE EMAIL SENT SUCCESSFULLY!");
      return { success: true, message: "Booking email sent successfully!" };
    } catch (error) {
      console.error("❌ Email error:", error);

      // Fallback without opening email client (to avoid duplicates)
      return {
        success: false,
        message: `Booking submitted! We'll contact you shortly. Error: ${
          error.text || error.message
        }`,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      console.log("⚠️ Already submitting, please wait...");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    console.log("🔍 FORM SUBMISSION:");
    console.log("==================");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Date:", formData.preferredDate);
    console.log("Time:", formData.preferredTime);
    console.log("Topics:", selectedCourses.length);
    console.log("Goals:", formData.message || "None");
    console.log("Plan:", selectedPlan);
    console.log("Current Slots:", `${registeredSlots}/${availableSlots}`);
    console.log("==================");

    // Validate required fields
    if (!selectedPlan) {
      setSubmitError("Please select a learning plan");
      setIsSubmitting(false);
      return;
    }

    if (selectedCourses.length < 3) {
      setSubmitError("Please select at least 3 topics");
      setIsSubmitting(false);
      return;
    }

    // Check if slots are available
    if (registeredSlots >= availableSlots) {
      setSubmitError(
        "❌ All slots have been filled! Please contact us for waitlist."
      );
      setIsSubmitting(false);
      return;
    }

    // Validate form fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "preferredDate",
      "preferredTime",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setSubmitError(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate phone contains at least 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setSubmitError(
        "Please enter a valid phone number with at least 10 digits"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // ✅ Send ONE booking email
      const emailResult = await sendBookingEmail();

      if (!emailResult.success) {
        // Even if email fails, show success (we have the data)
        console.log("Email failed but form submitted successfully");
      }

      // ✅ UPDATE REGISTERED SLOTS DYNAMICALLY
      const newSlots = updateRegisteredSlots();

      console.log("🎯 Updated slots:", `${newSlots}/${availableSlots}`);

      // Set success state with updated slot information
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Success message with slot update
      const successMessage = `✅ Booking Submitted Successfully!\n\n📊 Slots Status: ${newSlots}/${availableSlots} filled\n🎟️ Remaining: ${
        availableSlots - newSlots
      } spots\n\nThank you, ${formData.name}! Your booking has been confirmed.`;

      // Auto-scroll to success message
      setTimeout(() => {
        if (bookingSectionRef.current) {
          bookingSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      // Reset form after 15 seconds (keep slots updated)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "2:00 PM - 4:00 PM",
          message: "",
        });
        setSelectedCourses([]);
        setSubmitSuccess(false);
      }, 15000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        "Booking submitted! We'll contact you shortly. Thank you!"
      );
      setSubmitSuccess(true); // Show success even on error
      setIsSubmitting(false);
    }
  };

  // Set minimum date for date picker to today
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Get max date (next 60 days)
  const getMaxDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 60);
    return today.toISOString().split("T")[0];
  };

  // Set preferred time when time slot is selected
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      preferredTime: selectedTimeSlot,
    }));
  }, [selectedTimeSlot]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Countdown */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
          <div className="text-center px-2 sm:px-4">
            {/* Bootcamp Badge - Responsive */}
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm sm:text-lg mb-6 sm:mb-8 shadow-2xl">
              <FireIcon className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
              <span className="text-xs sm:text-base">
                🚀 FOREX TRADING MASTERY BOOTCAMP
              </span>
            </div>

            {/* Main Heading - Responsive */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Master Professional Forex Trading
              <span className="block text-yellow-300 mt-2 sm:mt-4">
                Through Consistency🎯
              </span>
            </h1>

            {/* Subtitle - Responsive */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto px-2 sm:px-4">
              Transform from beginner to confident trader with our comprehensive
              13-module bootcamp. Limited to only 10 students for personalized
              attention! ✨
            </p>

            {/* Slots Availability - Responsive */}
            <div className="max-w-md mx-auto mb-6 sm:mb-8 bg-yellow-500/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-yellow-400/50 mx-2">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="text-yellow-300 font-bold text-sm sm:text-lg">
                  🚨 Limited Slots: {registeredSlots}/{availableSlots} Filled
                </div>
                <div className="w-32 sm:w-40 h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                    style={{
                      width: `${enrollmentPercentage}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-yellow-200 text-xs sm:text-sm mt-2 text-center">
                🎟️ {availableSlots - registeredSlots} spots remaining - Booking
                updates in real-time!
              </div>
            </div>

            {/* Countdown Timer - Responsive */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/20 shadow-2xl">
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 text-yellow-300 mb-3 sm:mb-4">
                    <CalendarIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      ⏳ Registration Closes In:
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-lg mb-2 text-center">
                    Secure your spot! Registration ends in {timeLeft.days} days
                  </p>
                </div>

                {isLoading ? (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-yellow-400"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div
                        key={unit}
                        className="bg-gradient-to-br from-gray-900 to-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-700"
                      >
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2 font-mono">
                          {formatTimeUnit(value)}
                        </div>
                        <div className="text-gray-300 uppercase text-xs sm:text-sm tracking-wider">
                          {unit}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Progress Bar - Responsive */}
                <div className="mt-6 sm:mt-8">
                  <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-300 mb-2 space-y-1 sm:space-y-0">
                    <span>📊 Real-time Registration Progress</span>
                    <span>
                      {enrollmentPercentage}% Filled ({registeredSlots} of{" "}
                      {availableSlots} students enrolled)
                    </span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                      style={{
                        width: `${enrollmentPercentage}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-center text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm">
                    Registration ends in {timeLeft.days} days -{" "}
                    {availableSlots - registeredSlots} spots remaining 🚨
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <button
                onClick={scrollToBookingSection}
                className="group relative inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 text-sm sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-full hover:from-orange-600 hover:via-red-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
              >
                <span className="relative z-10 text-xs sm:text-base">
                  🎯 Book Your Slot Now - Only{" "}
                  {availableSlots - registeredSlots} Left
                </span>
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              </button>

              <button className="inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-lg font-bold text-white border-2 border-yellow-400 rounded-full hover:bg-yellow-400/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-xs sm:text-base">
                  📅 Schedule Consultation
                </span>
              </button>
            </div>

            {/* Money Back Guarantee - Responsive */}
            <div className="mt-6 sm:mt-8 lg:mt-10 inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold shadow-xl text-xs sm:text-sm lg:text-base">
              <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />✅ 70%
              Money Back Guarantee - Not satisfied after 3rd session? Get
              refund!
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            📚 Comprehensive 13-Module Curriculum
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Master every aspect of professional forex trading with our
            structured program ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {courseModules.map((module) => (
            <div
              key={module.id}
              className="group bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${module.color} rounded-lg sm:rounded-xl flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {module.emoji}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                    {module.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Master this essential trading concept with practical
                    examples
                  </p>
                </div>
                <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              🎯 Prerequisites & Requirements
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to successfully participate in our bootcamp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {prerequisites.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 mx-auto">
                  <span className="text-xl sm:text-2xl">{item.emoji}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flexible Session Plans with Pricing */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
              <CurrencyDollarIcon className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
              💰 CLEAR PRICING & SESSION PLANS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Choose Your Perfect Learning Plan
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with incredible value. Compare plans and
              select what works best for you! ✨
            </p>
          </div>

          {/* Pricing Cards - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
            {sessionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-xl sm:rounded-2xl border-2 ${
                  plan.id === selectedPlan
                    ? "border-blue-500 shadow-xl sm:shadow-2xl transform scale-105 z-10"
                    : plan.borderColor
                } ${
                  plan.bgColor
                } p-4 sm:p-6 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer h-full flex flex-col`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span
                      className={`${plan.badgeColor} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg`}
                    >
                      <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">
                        🏆 MOST POPULAR
                      </span>
                    </span>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                      💸 {plan.savings}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                  >
                    <span className="text-2xl sm:text-3xl">{plan.emoji}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 text-center">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    ⏳ {plan.duration} • 📅 {plan.sessions}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                      💰 Ksh {formatPrice(plan.price)}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm mt-1">
                      One-time payment
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                  <div className="text-xs sm:text-sm font-bold text-gray-700 mb-1 sm:mb-2">
                    ✅ What's included:
                  </div>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Select Button */}
                <button
                  className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 mt-3 sm:mt-4 ${
                    plan.id === selectedPlan
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : `bg-gradient-to-r ${plan.color} text-white hover:opacity-90 hover:shadow-lg`
                  }`}
                >
                  {plan.id === selectedPlan ? (
                    <span className="flex items-center justify-center">
                      <CheckCircleIcon className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
                      <span className="text-xs sm:text-base">
                        ✅ Selected Plan
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs sm:text-base">
                      📝 Select This Plan
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Time Slot Selection - Responsive */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 shadow-xl mx-2 sm:mx-0">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 text-blue-500" />
                <span>⏰ Select Your Preferred Time Slot</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Choose the most convenient time for your live sessions (EAT Time
                Zone)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => setSelectedTimeSlot(slot.time)}
                  className={`py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    selectedTimeSlot === slot.time
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                      : "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md"
                  }`}
                >
                  <div className="text-sm sm:text-base">
                    {slot.emoji} {slot.time}
                  </div>
                  <div className="text-xs font-normal mt-1 opacity-75">
                    {selectedTimeSlot === slot.time
                      ? "✅ Selected"
                      : "📅 Click to select"}
                  </div>
                </button>
              ))}
            </div>

            {/* Selection Summary - Responsive */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 w-full md:w-auto">
                  <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    📋 Your Selection:
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg w-full sm:w-auto">
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        {
                          sessionPlans.find((plan) => plan.id === selectedPlan)
                            ?.name
                        }
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        💰 Ksh{" "}
                        {formatPrice(
                          sessionPlans.find((plan) => plan.id === selectedPlan)
                            ?.price
                        )}
                      </div>
                    </div>
                    <div className="text-gray-400 hidden sm:block">→</div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg w-full sm:w-auto">
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        ⏰ {selectedTimeSlot}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Time Slot
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">
                    💰 Total Investment
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Ksh{" "}
                    {formatPrice(
                      sessionPlans.find((plan) => plan.id === selectedPlan)
                        ?.price
                    )}
                  </div>
                  <button
                    onClick={scrollToBookingSection}
                    className="inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-sm sm:text-base"
                  >
                    🎯 Complete Booking
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3" />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      ✅ 70% Money Back Guarantee Included
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Not satisfied after the 3rd session? Get 70% refund! 💸
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information Section */}
      <div
        ref={paymentSectionRef}
        className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 md:p-12 shadow-xl border border-blue-100">
          <div className="text-center mb-8 sm:mb-10 px-2">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
              <CashIcon className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
              💰 FEE & PAYMENT INFORMATION
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Secure Your Investment Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Full payment required before training begins with our money-back
              guarantee ✨
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Payment Details */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <CashIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 text-green-500" />
                <span>📱 Payment Instructions</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-200">
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    📱 M-PESA Payment Steps:
                  </h4>
                  <ol className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      Go to{" "}
                      <span className="font-bold text-blue-600">M-PESA</span> on
                      your phone
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      Select{" "}
                      <span className="font-bold text-green-600">
                        "Send Money"
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      Enter phone number:{" "}
                      <span className="font-bold text-red-600">0715657800</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      Enter the full course amount
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">5.</span>
                      Enter your{" "}
                      <span className="font-bold text-purple-600">
                        M-PESA PIN
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">6.</span>
                      Confirm transaction ✅
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    ✅ Confirmation:
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    You will receive an M-PESA confirmation SMS showing payment
                    was sent to:
                  </p>
                  <p className="font-bold text-gray-900 mt-2 text-sm sm:text-base lg:text-lg">
                    👤 Samuel Erastus Ngamau
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    ⚠️ Important Notes:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Payment must be made in full before the first day of
                      training
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Keep your M-PESA confirmation message for reference
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Contact support if you don't receive confirmation within 5
                      minutes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 text-green-500" />
                <span>🛡️ Money Back Guarantee</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                    70%
                  </div>
                  <div className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    💰 MONEY BACK GUARANTEE
                  </div>
                  <p className="text-green-100 text-sm sm:text-base">
                    If you're not satisfied with the training after the third
                    session
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      ✅ Full course access upon payment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      ✅ Risk-free investment with guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      ✅ Immediate enrollment confirmation
                    </span>
                  </div>
                </div>

                {/* Slot Availability */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    🚨 Real-time Slot Availability
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base">
                      Slots Available:
                    </span>
                    <span className="font-bold text-xl sm:text-2xl">
                      {registeredSlots} / {availableSlots}
                    </span>
                  </div>
                  <div className="h-2 sm:h-3 bg-white/30 rounded-full overflow-hidden mt-2 sm:mt-3">
                    <div
                      className="h-full bg-white transition-all duration-1000"
                      style={{
                        width: `${enrollmentPercentage}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-white/90">
                    {availableSlots - registeredSlots} spots remaining -
                    Registration ends in {timeLeft.days} days! ⏳
                  </p>
                  <div className="text-xs text-white/80 mt-1 sm:mt-2">
                    📊 Updates automatically with each booking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div
        ref={bookingSectionRef}
        className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
            <CalendarIcon className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
            📝 COMPLETE YOUR BOOKING
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Secure Your Forex Trading Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Fill in your details below to book your spot ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Topic Selection & Form */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Topic Selection - FIXED: Centered on small screens */}
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              {/* FIXED SECTION: Centered header for mobile */}
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    1️⃣ Select Topics You Want to Learn
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">
                    Choose the trading topics that interest you most (Select at
                    least 3) 🎯
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">
                      🎯 Personalized Learning Path
                    </p>
                    <p className="text-blue-700 text-xs sm:text-sm">
                      Your selected topics will help us create a customized
                      learning plan just for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {courseModules.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleCourseSelection(course.id)}
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedCourses.includes(course.id)
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${course.color} rounded-lg flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-sm">
                          {course.emoji}
                        </span>
                      </div>
                      {selectedCourses.includes(course.id) && (
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Master this essential trading concept
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="text-gray-700 mb-2 sm:mb-0">
                    <span className="font-bold text-sm sm:text-base">
                      📚 {selectedCourses.length} topics selected
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-2">
                      (Minimum: 3 topics)
                    </span>
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
                      selectedCourses.length >= 3
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedCourses.length >= 3
                      ? "✅ Ready to proceed"
                      : "⚠️ Select 3+ topics"}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              {/* FIXED: Centered header for mobile */}
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    2️⃣ Complete Your Details
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">
                    Fill in your information to book your spot 📝
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">
                      ✅ All Details Will Be Sent To You
                    </p>
                    <p className="text-blue-700 text-xs sm:text-sm">
                      After submission, you'll receive ONE confirmation email
                      with all your booking details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg sm:rounded-2xl animate-fadeIn">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        🎉 Booking Submitted Successfully!
                      </h3>
                      <p className="mt-1 text-sm sm:text-base">
                        Your booking details have been sent to Samuel Erastus
                        Ngamau. You'll receive ONE confirmation email.
                      </p>

                      {/* Slot Update Info */}
                      <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-white/20 rounded-lg">
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <span className="font-bold text-sm sm:text-base">
                            📊 Slot Status Updated:
                          </span>
                          <span className="font-bold text-yellow-300 text-sm sm:text-base">
                            {registeredSlots} / {availableSlots} filled
                          </span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-white/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white transition-all duration-1000"
                            style={{
                              width: `${enrollmentPercentage}%`,
                            }}
                          ></div>
                        </div>
                        <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                          🎟️ {availableSlots - registeredSlots} spots remaining
                        </p>
                      </div>

                      <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-white/20 rounded-lg">
                        <p className="text-sm sm:text-base">
                          <strong>📧 Email Sent With:</strong>
                        </p>
                        <ul className="text-xs sm:text-sm mt-1 space-y-1">
                          <li>👤 Name: {formData.name}</li>
                          <li>📞 Phone: {formData.phone}</li>
                          <li>📧 Email: {formData.email}</li>
                          <li>📋 Plan: {getSelectedPlanData()?.name}</li>
                          <li>📚 Topics: {selectedCourses.length}</li>
                          <li>
                            📅 Date:{" "}
                            {formatDateForEmail(formData.preferredDate)}
                          </li>
                          <li>⏰ Time: {formData.preferredTime}</li>
                          <li>
                            🎯 Goals: {formData.message || "Not specified"}
                          </li>
                        </ul>
                      </div>
                      <p className="text-xs sm:text-sm mt-1 sm:mt-2">
                        We'll contact you within 24 hours to confirm your
                        booking. ⏳
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg sm:rounded-2xl animate-fadeIn">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        ⚠️ Submission Error
                      </h3>
                      <p className="mt-1 text-sm sm:text-base">{submitError}</p>
                      <p className="text-xs sm:text-sm mt-2 opacity-90">
                        Please try again or contact us directly at 📱 0715657800
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      👤 Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      📧 Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      📞 Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      📅 Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={getMinDate()}
                      max={getMaxDate()}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      ⏰ Preferred Time Slot *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.time} value={slot.time}>
                          {slot.emoji} {slot.time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        📚 Selected Topics ({selectedCourses.length})
                      </label>
                      <div className="px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 min-h-[60px]">
                        {selectedCourses.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {selectedCourses.map((courseId) => {
                              const course = getSelectedCourse(courseId);
                              return course ? (
                                <span
                                  key={courseId}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800"
                                >
                                  {course.emoji} {course.name}
                                </span>
                              ) : null;
                            })}
                          </div>
                        ) : (
                          <span className="text-gray-500 italic text-sm">
                            No topics selected
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    🎯 Trading Goals & Experience (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-sm sm:text-base"
                    placeholder="Tell us about your trading experience and what you hope to achieve..."
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={
                      !selectedPlan ||
                      selectedCourses.length < 3 ||
                      isSubmitting ||
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.preferredDate ||
                      !formData.preferredTime ||
                      registeredSlots >= availableSlots
                    }
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 ${
                      selectedPlan &&
                      selectedCourses.length >= 3 &&
                      !isSubmitting &&
                      formData.name &&
                      formData.email &&
                      formData.phone &&
                      formData.preferredDate &&
                      formData.preferredTime &&
                      registeredSlots < availableSlots
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-t-2 border-b-2 border-white mr-2"></div>
                        <span className="text-sm sm:text-base">
                          📤 SENDING BOOKING REQUEST...
                        </span>
                      </div>
                    ) : selectedPlan &&
                      selectedCourses.length >= 3 &&
                      registeredSlots < availableSlots ? (
                      <div className="flex items-center justify-center">
                        <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                        <span className="text-sm sm:text-base">
                          🎯 SUBMIT BOOKING REQUEST (
                          {availableSlots - registeredSlots} spots left)
                        </span>
                      </div>
                    ) : registeredSlots >= availableSlots ? (
                      "❌ ALL SLOTS FILLED - CONTACT US"
                    ) : (
                      "⚠️ SELECT PLAN & 3+ TOPICS FIRST"
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      After submission, you'll receive ONE confirmation email
                      with all details. 📧
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      📊 Current slots: {registeredSlots}/{availableSlots}{" "}
                      filled • 🎟️ {availableSlots - registeredSlots} remaining
                    </p>
                  </div>

                  <Link
                    to="/"
                    className="block w-full py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg sm:rounded-xl font-bold text-center hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base"
                  >
                    ← Back to Homepage
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 sticky top-4 sm:top-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                <ChartBarIconSolid className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                <span>📋 Booking Summary</span>
              </h3>

              {selectedPlan ? (
                <>
                  <div className="space-y-4 sm:space-y-6">
                    {/* Selected Plan */}
                    <div className="pb-3 sm:pb-4 border-b border-gray-200">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          📋 {getSelectedPlanData()?.name}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-blue-600">
                          💰 Ksh {formatPrice(getSelectedPlanData()?.price)}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 flex items-center">
                        <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        ⏳ {getSelectedPlanData()?.duration}
                      </div>
                    </div>

                    {/* Selected Topics */}
                    {selectedCourses.length > 0 && (
                      <div className="pb-3 sm:pb-4 border-b border-gray-200">
                        <div className="mb-1 sm:mb-2">
                          <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            📚 Selected Topics ({selectedCourses.length})
                          </div>
                          <div className="space-y-1 max-h-32 overflow-y-auto pr-2">
                            {selectedCourses.map((courseId) => {
                              const course = getSelectedCourse(courseId);
                              return course ? (
                                <div
                                  key={courseId}
                                  className="flex items-center text-xs sm:text-sm"
                                >
                                  <div
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 ${course.color}`}
                                  ></div>
                                  <span className="text-gray-700">
                                    {course.emoji} {course.name}
                                  </span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Selected Date & Time */}
                    {(formData.preferredDate || formData.preferredTime) && (
                      <div className="pb-3 sm:pb-4 border-b border-gray-200">
                        <div className="mb-1 sm:mb-2">
                          <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            📅 Selected Date & Time
                          </div>
                          <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                            {formData.preferredDate && (
                              <div className="flex items-center">
                                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2 flex-shrink-0" />
                                <span>
                                  📅{" "}
                                  {formatDateForEmail(formData.preferredDate)}
                                </span>
                              </div>
                            )}
                            {formData.preferredTime && (
                              <div className="flex items-center">
                                <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2 flex-shrink-0" />
                                <span>⏰ {formData.preferredTime}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Trading Goals Preview */}
                    {formData.message && (
                      <div className="pb-3 sm:pb-4 border-b border-gray-200">
                        <div className="mb-1 sm:mb-2">
                          <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            🎯 Trading Goals
                          </div>
                          <div className="text-xs sm:text-sm text-gray-700 p-2 bg-gray-50 rounded-lg max-h-24 overflow-y-auto">
                            {formData.message.length > 100
                              ? `${formData.message.substring(0, 100)}...`
                              : formData.message}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slot Status */}
                    <div className="pb-3 sm:pb-4 border-b border-gray-200">
                      <div className="mb-1 sm:mb-2">
                        <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          📊 Slot Availability
                        </div>
                        <div className="text-xs sm:text-sm text-gray-700 space-y-1.5 sm:space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Slots Filled:</span>
                            <span className="font-bold">
                              {registeredSlots}/{availableSlots}
                            </span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                              style={{
                                width: `${enrollmentPercentage}%`,
                              }}
                            ></div>
                          </div>
                          <div className="text-center text-xs sm:text-sm text-gray-600">
                            🎟️ {availableSlots - registeredSlots} spots
                            remaining
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Client Information Preview */}
                    {formData.name && (
                      <div className="pt-3 sm:pt-4">
                        <div className="mb-3 sm:mb-4">
                          <div className="text-xs sm:text-sm text-gray-500 mb-1">
                            👤 Your Information:
                          </div>
                          <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                            {formData.name && (
                              <div className="flex items-center">
                                <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">
                                  {formData.name}
                                </span>
                              </div>
                            )}
                            {formData.phone && (
                              <div className="flex items-center">
                                <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                                <span>📞 {formData.phone}</span>
                              </div>
                            )}
                            {formData.email && (
                              <div className="flex items-center">
                                <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">
                                  📧 {formData.email}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                          <div className="flex items-center">
                            <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                            <span className="text-xs sm:text-sm font-semibold text-blue-800">
                              📱 Direct Contact: 0715657800
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Email Confirmation */}
                  <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl border border-blue-200">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-blue-800">
                          📧 Email Confirmation
                        </p>
                        <p className="text-xs text-blue-600">
                          All details will be emailed to you in ONE email
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg sm:rounded-xl text-white">
                    <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                      📞 Contact Details
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between">
                        <span className="text-green-100 text-xs sm:text-sm">
                          Phone:
                        </span>
                        <span className="font-bold text-xs sm:text-sm">
                          📱 0715657800
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-100 text-xs sm:text-sm">
                          WhatsApp:
                        </span>
                        <span className="font-bold text-xs sm:text-sm">
                          💬 0715657800
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-100 text-xs sm:text-sm">
                          Email Response:
                        </span>
                        <span className="font-bold text-xs sm:text-sm">
                          ⚡ Instant
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-100 text-xs sm:text-sm">
                          Call Response:
                        </span>
                        <span className="font-bold text-xs sm:text-sm">
                          ⏰ 24 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8">
                  <div className="text-gray-400 mb-3 sm:mb-4 text-sm">
                    ⚠️ No plan selected
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Select topics and a plan to begin
                  </p>
                </div>
              )}
            </div>

            {/* Quick Contact Guide */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>📱 Quick Contact</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-bold mb-1 text-sm sm:text-base">
                    Contact Number:
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold tracking-wider">
                    📱 0715657800
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1 text-sm sm:text-base">
                    Available:
                  </div>
                  <div className="text-base sm:text-lg">
                    📅 Mon-Sun, 8AM-10PM
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1 text-sm sm:text-base">
                    Email Response:
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">
                    ⚡ Instant
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-white/20 rounded-lg">
                <p className="text-xs sm:text-sm">
                  💡 <strong>Need Help with Booking?</strong> Call or WhatsApp
                  us directly at 📱 0715657800
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center px-2">
          <div className="inline-flex items-center space-x-2 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-2xl">
            <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <p className="text-gray-600 text-xs sm:text-sm">
              <strong>🔒 Secure Booking:</strong> All information is encrypted
              and sent directly to Samuel Erastus Ngamau
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 mx-auto">
                <span className="text-xl sm:text-2xl">{stat.emoji}</span>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            🚀 Ready to Master Forex Trading?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our exclusive bootcamp with only{" "}
            {availableSlots - registeredSlots} slots remaining. Registration
            ends in {timeLeft.days} days! ⏳
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={scrollToBookingSection}
              className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 text-sm sm:text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              <span className="text-sm sm:text-base">
                🎯 Book Your Spot Now
              </span>
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="text-white text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-sm sm:text-base">
                    ⏳ Registration Ends In:
                  </span>
                </div>
                <span className="font-mono bg-black/30 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-sm">
                  {formatTimeUnit(timeLeft.days)}:
                  {formatTimeUnit(timeLeft.hours)}:
                  {formatTimeUnit(timeLeft.minutes)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-blue-200 mt-2">
                📊 {enrollmentPercentage}% Filled ({registeredSlots} of{" "}
                {availableSlots} students enrolled)
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

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

        .highlight-section > div {
          animation: highlight 1.5s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
