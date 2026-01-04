import { useState, useEffect } from "react";
import {
  HomeIcon,
  MenuIcon,
  XIcon,
  BookOpenIcon,
  UserIcon,
  LogoutIcon,
  EyeIcon,
  EyeOffIcon,
  AcademicCapIcon,
  SupportIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Logo from "../Assests/erastuslogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [users, setUsers] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    const savedUsers = localStorage.getItem("registeredUsers");

    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserData(user);
      setIsLoggedIn(true);
    }

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthModal = (mode = "signup") => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
    setShowPassword(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkUserExists = (email) => {
    return users.some((user) => user.email === email);
  };

  const validatePassword = () => {
    if (
      authMode === "signup" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match!");
      return false;
    }

    if (authMode === "signup" && formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }

    return true;
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (authMode === "signin") {
      const userExists = checkUserExists(formData.email);
      if (!userExists) {
        alert("No account found with this email. Please sign up first.");
        setAuthMode("signup");
        return;
      }

      const user = users.find((u) => u.email === formData.email);
      if (user && user.password === formData.password) {
        setUserData(user);
        setIsLoggedIn(true);
        localStorage.setItem("userData", JSON.stringify(user));
        closeAuthModal();
        alert(`Welcome back, ${user.firstName}!`);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else if (authMode === "signup") {
      if (!validatePassword()) {
        return;
      }

      if (checkUserExists(formData.email)) {
        alert("An account with this email already exists. Please sign in.");
        setAuthMode("signin");
        return;
      }

      const newUser = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        fullName: `${formData.firstName} ${formData.lastName}`,
        createdAt: new Date().toISOString(),
      };

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

      setUserData(newUser);
      setIsLoggedIn(true);
      localStorage.setItem("userData", JSON.stringify(newUser));
      closeAuthModal();
      alert(
        `Welcome, ${newUser.firstName}! Your account has been created successfully.`
      );
    } else if (authMode === "forgot") {
      const userExists = checkUserExists(formData.email);
      if (!userExists) {
        alert("No account found with this email. Please sign up first.");
        setAuthMode("signup");
        return;
      }
      alert("Password reset instructions have been sent to your email!");
      setAuthMode("signin");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("userData");
    setIsMenuOpen(false);
    alert("You have been logged out successfully.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getUserGreeting = () => {
    if (!userData) return "Hi!";

    if (userData.firstName) {
      return `Hi, ${userData.firstName}`;
    } else if (userData.fullName) {
      return `Hi, ${userData.fullName.split(" ")[0]}`;
    } else {
      return "Hi!";
    }
  };

  const getShortName = () => {
    if (!userData) return "Hi!";

    if (userData.firstName) {
      return userData.firstName.length > 6
        ? `${userData.firstName.substring(0, 6)}..`
        : userData.firstName;
    }
    return "Hi!";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-3 flex items-center justify-between z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-2xl border-b-2 border-orange-300/30 py-2"
            : "shadow-xl border-b-2 border-orange-400/50 py-3"
        }`}
      >
        {/* Logo with improved visibility and larger size */}
        <div className="flex-shrink-0">
          <div className="relative group">
            {/* Enhanced outer glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
            
            {/* Larger logo container with enhanced gradient */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-2 rounded-full">
              {/* White inner circle for better contrast */}
              <div className="relative bg-white rounded-full p-1">
                <img
                  src={Logo}
                  alt="ErastusFX Logo"
                  className="w-32 h-32 object-contain cursor-pointer transition-all duration-500 
                           group-hover:scale-110 group-hover:rotate-3 
                           rounded-full"
                  style={{
                    filter: "brightness(1.1) contrast(1.2) saturate(1.3)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </div>
            
            {/* Enhanced FX badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 
                          rounded-full flex items-center justify-center shadow-xl animate-bounce border-2 border-white">
              <span className="text-sm font-extrabold text-gray-900">FX</span>
            </div>

            {/* Additional shine effect for better visibility */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-3 hover:bg-orange-500/30 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-400/30 backdrop-blur-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3">
          {/* Home - Orange Theme */}
          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:from-orange-600 hover:to-orange-700 rounded-2xl transition-all duration-300 group border-2 border-orange-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <HomeIcon className="w-5 h-5 text-white group-hover:text-yellow-200 transition-colors" />
            <span className="text-white text-sm lg:text-base font-bold group-hover:text-yellow-200 transition-colors">
              Home
            </span>
          </Link>

          {/* Book Session - Blue Theme */}
          <Link
            to="/book-session"
            className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-blue-500/90 to-blue-600/90 hover:from-blue-600 hover:to-blue-700 rounded-2xl transition-all duration-300 group border-2 border-blue-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <BookOpenIcon className="w-5 h-5 text-white group-hover:text-cyan-200 transition-colors" />
            <span className="text-white text-sm lg:text-base font-bold group-hover:text-cyan-200 transition-colors">
              Book Session
            </span>
          </Link>

          {/* Learning Material - Purple Theme */}
          <Link
            to="/learning-material"
            className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:from-purple-600 hover:to-purple-700 rounded-2xl transition-all duration-300 group border-2 border-purple-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <AcademicCapIcon className="w-5 h-5 text-white group-hover:text-pink-200 transition-colors" />
            <span className="text-white text-sm lg:text-base font-bold group-hover:text-pink-200 transition-colors">
              Learning Material
            </span>
          </Link>

          {/* Contact Support - Orange Theme */}
          <Link
            to="/contact-support"
            className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:from-orange-600 hover:to-orange-700 rounded-2xl transition-all duration-300 group border-2 border-orange-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <SupportIcon className="w-5 h-5 text-white group-hover:text-yellow-200 transition-colors" />
            <span className="text-white text-sm lg:text-base font-bold group-hover:text-yellow-200 transition-colors">
              Contact Support
            </span>
          </Link>

          {/* Authentication Section - Desktop */}
          <div className="flex items-center space-x-2 lg:space-x-3 ml-2 lg:ml-4 pl-3 lg:pl-4 border-l-2 border-orange-400/30">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                {/* User Greeting */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-600/80 to-blue-700/80 rounded-2xl border-2 border-cyan-300/50 shadow-xl backdrop-blur-sm">
                  <UserIcon className="w-5 h-5 text-yellow-300" />
                  <span className="text-yellow-300 text-sm lg:text-base font-bold">
                    {getUserGreeting()}
                  </span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-red-500/90 to-red-600/90 hover:from-red-600 hover:to-red-700 rounded-2xl transition-all duration-300 group border-2 border-red-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  <LogoutIcon className="w-5 h-5 text-white group-hover:text-yellow-200 transition-colors" />
                  <span className="text-white text-sm lg:text-base font-bold group-hover:text-yellow-200 transition-colors">
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {/* Sign In Button - Green Theme */}
                <button
                  onClick={() => handleAuthModal("signin")}
                  className="flex items-center space-x-2 px-4 py-3 cursor-pointer bg-gradient-to-r from-emerald-500/90 to-green-600/90 hover:from-emerald-600 hover:to-green-700 rounded-2xl transition-all duration-300 group border-2 border-emerald-400/70 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  title="Sign in to your account"
                >
                  <UserIcon className="w-5 h-5 text-white group-hover:text-yellow-200 transition-colors" />
                  <span className="text-white text-sm lg:text-base font-bold group-hover:text-yellow-200 transition-colors">
                    Sign In
                  </span>
                </button>

                {/* Sign Up Button - Orange Theme */}
                <button
                  onClick={() => handleAuthModal("signup")}
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-red-500 hover:to-orange-600 text-white px-5 lg:px-7 py-3 rounded-2xl transition-all duration-300 font-bold text-sm lg:text-base shadow-2xl hover:shadow-3xl border-2 border-orange-400 transform hover:scale-105 hover:rotate-1"
                >
                  Sign Up Free
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 right-0 h-[calc(100vh-80px)] mt-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 z-40 flex flex-col rounded-b-3xl shadow-4xl border-b-2 border-orange-400/50 overflow-hidden">
            {/* Welcome Header */}
            <div className="px-6 py-5 text-center border-b-2 border-orange-400/30 bg-gradient-to-r from-orange-900/80 to-red-900/80 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 mb-3">
                {/* Mobile Logo with enhanced visibility */}
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-2 rounded-full">
                    <div className="relative bg-white rounded-full p-1">
                      <img
                        src={Logo}
                        alt="ErastusFX Logo"
                        className="w-32 h-32 object-contain cursor-pointer transition-all duration-500 
                                 group-hover:scale-110 group-hover:rotate-3 
                                 rounded-full"
                        style={{
                          filter: "brightness(1.1) contrast(1.2) saturate(1.3)",
                          transformOrigin: "center center",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-yellow-300">
                    Erastus Learning
                  </h2>
                  <p className="text-orange-200 text-lg mt-2">
                    Discover. Learn. Excel.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col p-5 space-y-4 overflow-y-auto">
              {/* Home - Orange Theme */}
              <Link
                to="/"
                className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-orange-600/90 to-orange-700/90 hover:from-orange-700 hover:to-orange-800 rounded-xl transition-all duration-300 group border-2 border-orange-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="p-3 bg-white rounded-xl group-hover:bg-yellow-100 transition-all duration-300 flex-shrink-0 shadow-md">
                  <HomeIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors block">
                    Home
                  </span>
                  <p className="text-orange-200 text-sm mt-1">
                    Your learning dashboard
                  </p>
                </div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </Link>

              {/* Book Session - Blue Theme */}
              <Link
                to="/book-session"
                className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-blue-600/90 to-blue-700/90 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 group border-2 border-blue-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="p-3 bg-white rounded-xl group-hover:bg-cyan-100 transition-all duration-300 flex-shrink-0 shadow-md">
                  <BookOpenIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors block">
                    Book Session
                  </span>
                  <p className="text-blue-200 text-sm mt-1">
                    Schedule expert tutoring
                  </p>
                </div>
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              </Link>

              {/* Learning Material - Purple Theme */}
              <Link
                to="/learning-material"
                className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-purple-600/90 to-purple-700/90 hover:from-purple-700 hover:to-purple-800 rounded-xl transition-all duration-300 group border-2 border-purple-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="p-3 bg-white rounded-xl group-hover:bg-pink-100 transition-all duration-300 flex-shrink-0 shadow-md">
                  <AcademicCapIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-xl font-bold text-white group-hover:text-pink-200 transition-colors block">
                    Learning Material
                  </span>
                  <p className="text-purple-200 text-sm mt-1">
                    Premium study resources
                  </p>
                </div>
                <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
              </Link>

              {/* Contact Support - Orange Theme */}
              <Link
                to="/contact-support"
                className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-orange-600/90 to-orange-700/90 hover:from-orange-700 hover:to-orange-800 rounded-xl transition-all duration-300 group border-2 border-orange-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="p-3 bg-white rounded-xl group-hover:bg-yellow-100 transition-all duration-300 flex-shrink-0 shadow-md">
                  <SupportIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors block">
                    Contact Support
                  </span>
                  <p className="text-orange-200 text-sm mt-1">
                    24/7 help available
                  </p>
                </div>
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </Link>

              {/* Authentication Section - Mobile */}
              <div className="mt-6 space-y-4 pt-6 border-t-2 border-orange-400/30">
                {isLoggedIn ? (
                  <div className="space-y-4">
                    {/* User Greeting */}
                    <div className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-cyan-800/50 to-blue-800/50 rounded-xl border-2 border-cyan-400/30 shadow-lg backdrop-blur-sm">
                      <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex-shrink-0 shadow-md">
                        <UserIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xl font-bold text-yellow-300 block truncate">
                          {getUserGreeting()}
                        </span>
                        <span className="text-sm text-cyan-200 block truncate">
                          {userData?.email}
                        </span>
                      </div>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-red-600/90 to-red-700/90 hover:from-red-700 hover:to-red-800 rounded-xl transition-all duration-300 group border-2 border-red-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="p-3 bg-white rounded-xl group-hover:bg-red-100 transition-colors flex-shrink-0 shadow-md">
                        <LogoutIcon className="w-6 h-6 text-red-600" />
                      </div>
                      <span className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors">
                        Logout
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={() => handleAuthModal("signin")}
                      className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-emerald-600/90 to-green-700/90 hover:from-emerald-700 hover:to-green-800 rounded-xl transition-all duration-300 group border-2 border-emerald-500/50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <div className="p-3 bg-white rounded-xl group-hover:bg-emerald-100 transition-colors flex-shrink-0 shadow-md">
                        <UserIcon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="text-xl font-bold text-white group-hover:text-yellow-200 transition-colors block">
                          Sign In
                        </span>
                        <p className="text-emerald-200 text-sm mt-1">
                          Access your dashboard
                        </p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleAuthModal("signup")}
                      className="flex items-center space-x-4 p-4 w-full bg-gradient-to-r from-orange-600 via-orange-700 to-red-600 hover:from-orange-700 hover:via-red-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 font-bold border-2 border-orange-400/70 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group backdrop-blur-sm"
                    >
                      <div className="p-3 bg-white rounded-xl group-hover:bg-orange-100 transition-colors flex-shrink-0 shadow-md">
                        <SparklesIcon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="text-xl font-bold block">
                          Join Free Today
                        </span>
                        <p className="text-orange-200 text-sm mt-1">
                          Unlock premium features
                        </p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Features Section */}
              <div className="mt-6 p-5 bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl border-2 border-orange-400/30 backdrop-blur-sm">
                <p className="text-yellow-300 text-xl font-bold text-center mb-3">
                  ✨ Premium Features
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-white text-base">
                      Personalized Learning Paths
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-white text-base">
                      Live Interactive Sessions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white text-base">
                      Progress Analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 text-center bg-gradient-to-r from-orange-900 to-red-900 border-t-2 border-orange-400/30 backdrop-blur-sm">
              <p className="text-yellow-300 text-xl font-bold mb-2">
                ERASTUS LEARNING
              </p>
              <p className="text-orange-200 text-base">
                Excellence in Education © 2024
              </p>
            </div>
          </div>
        )}

        {/* Mobile Auth Buttons (when menu is closed) */}
        {!isMenuOpen && (
          <div className="md:hidden flex items-center space-x-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                {/* User Greeting - Small */}
                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-700/80 rounded-xl border-2 border-cyan-300/50 shadow-lg backdrop-blur-sm">
                  <UserIcon className="w-4 h-4 text-yellow-300" />
                  <span className="text-yellow-300 text-sm font-bold">
                    {getShortName()}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 p-2 cursor-pointer hover:bg-red-500/30 rounded-xl transition-all duration-300 border-2 border-red-400/50 shadow-lg backdrop-blur-sm"
                  aria-label="Logout"
                >
                  <LogoutIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleAuthModal("signin")}
                  className="flex items-center space-x-1 p-2 cursor-pointer hover:bg-emerald-500/30 rounded-xl transition-all duration-300 border-2 border-emerald-400/50 shadow-lg backdrop-blur-sm"
                  aria-label="Sign In"
                  title="Sign In"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => handleAuthModal("signup")}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-2 rounded-xl transition-all duration-300 font-bold text-sm border-2 border-orange-400 shadow-lg transform hover:scale-105"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-40 md:h-44"></div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-md">
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-4xl w-full max-w-sm mx-auto transform transition-all duration-300 scale-95 hover:scale-100 max-h-[90vh] overflow-y-auto border-2 border-orange-300/30">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-red-600 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {authMode === "signin" && "Welcome Back!"}
                    {authMode === "signup" && "Join Erastus"}
                    {authMode === "forgot" && "Reset Password"}
                  </h2>
                  <p className="text-orange-200 text-sm mt-1">
                    {authMode === "signin" && "Continue your learning journey"}
                    {authMode === "signup" && "Start learning with us today"}
                    {authMode === "forgot" && "Recover your account access"}
                  </p>
                </div>
                <button
                  onClick={closeAuthModal}
                  className="text-white hover:text-yellow-300 transition-colors transform hover:scale-110 p-2"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form onSubmit={handleAuthSubmit} className="space-y-5">
                {authMode === "signup" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-sm border-2 border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-400 bg-white/80"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-sm border-2 border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-400 bg-white/80"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                )}

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
                    className="w-full px-4 py-3 text-sm border-2 border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-400 bg-white/80"
                    placeholder="student@example.com"
                  />
                </div>

                {(authMode === "signin" || authMode === "signup") && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-sm border-2 border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-400 bg-white/80 pr-12"
                        placeholder="••••••••"
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600 transition-colors p-1"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {authMode === "signup" && (
                      <p className="text-xs text-gray-600 mt-2 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Password must be at least 6 characters
                      </p>
                    )}
                  </div>
                )}

                {authMode === "signup" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-sm border-2 border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-400 bg-white/80"
                      placeholder="••••••••"
                      minLength={6}
                    />
                  </div>
                )}

                {authMode === "signin" && (
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setAuthMode("forgot")}
                      className="text-sm text-orange-600 hover:text-orange-800 font-semibold transition-colors hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 px-4 rounded-xl transition-all duration-300 font-bold text-base shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-orange-500/30 mt-2"
                >
                  {authMode === "signin" && "Sign In"}
                  {authMode === "signup" && "Create Account"}
                  {authMode === "forgot" && "Reset Password"}
                </button>
              </form>

              {/* Auth Mode Toggle */}
              <div className="mt-6 text-center">
                {authMode === "signin" && (
                  <p className="text-gray-700 text-sm">
                    New to Erastus?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode("signup")}
                      className="text-orange-600 hover:text-orange-800 font-bold transition-colors hover:underline"
                    >
                      Sign Up Now
                    </button>
                  </p>
                )}
                {authMode === "signup" && (
                  <p className="text-gray-700 text-sm">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode("signin")}
                      className="text-orange-600 hover:text-orange-800 font-bold transition-colors hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                )}
                {authMode === "forgot" && (
                  <p className="text-gray-700 text-sm">
                    Remember your password?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode("signin")}
                      className="text-orange-600 hover:text-orange-800 font-bold transition-colors hover:underline"
                    >
                      Back to Sign In
                    </button>
                  </p>
                )}
              </div>

              {/* Benefits Section */}
              <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
                <h3 className="text-sm font-bold text-gray-800 mb-3 text-center">
                  🎯 Why Join Erastus?
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 hover:bg-white/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">
                      Expert-Led Interactive Sessions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-white/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">
                      Personalized Learning Paths
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-white/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">
                      Premium Study Materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-white/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">
                      24/7 Academic Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;