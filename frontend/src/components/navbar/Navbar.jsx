import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5"; // icons
import HeaderBar from "./HeaderBar";
import Logout from "../auth/Logout";

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);//closes dropdown on outside clicking

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  },[]);

  return (
    <header className="w-full shadow">
      {/* Top header bar */}
      <HeaderBar />

      {/* 🔹 Main Navbar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">
          Online<span className="text-gray-800">Classroom</span>
        </h1>

        <nav className="space-x-4">

          {/* nav buttons */}
          <Link
            to="/stream"
            className="px-1 py-2 text-indigo-600 hover:text-black transition"
          >
            Pricing
          </Link>

          {/* resources dropdown */}
          <div ref={dropdownRef} className="relative inline-block">  {/*ref is needed for outside click dropdown close*/}
            <button 
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-1 px-4 py-2 text-indigo-600 rounded-lg hover:text-black transition">
              Resources
              {dropdown ? (
                <IoChevronUp className="text-lg transition-transform" />
              ) : (
                <IoChevronDown className="text-lg transition-transform" />
              )}
            </button>

            {/* dropdown menu */}
            {dropdown && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn">
                <Link 
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition"
                  onClick={() => setDropdown(false)}>
                    About Us
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition"
                  onClick={() => setOpenDropdown(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/feedback"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition"
                  onClick={() => setOpenDropdown(false)}
                >
                  Feedback
                </Link>
              </div>
            )}
          </div>

          {/* auth buttons */}
          <Link
            to="/login"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            dashboard
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </Link>
          <Logout />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
