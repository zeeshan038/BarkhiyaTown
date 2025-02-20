import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import videoBg from "../assets/promo.mp4"; // Background for Home
import projectBanner from "../assets/projectBanner.jpeg"; // Background for About
import projectBanner1 from "../assets/projectBanner-1.jpeg"; // Background for About
import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";
import { FaPhone } from "react-icons/fa6";
import about1 from '../assets/about-1.png'
import about2 from '../assets/about-2.png'
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    // Background based on route
    const getBackground = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <video
                        src={videoBg}
                        autoPlay
                        loop
                        muted
                        className="w-full object-cover"
                    />
                );
                case "/upcomming-projects":
                    return (
                        <img
                            src={window.innerWidth >= 1024 ? projectBanner: projectBanner1} 
                            alt="Project Background"
                            className="w-full "
                        />
                    );
             
    
                case "/contact":
                    return (
                        <div className="bg-[#123932] gap-3  text-3xl lg:text-6xl text-white flex justify-center items-center p-16 lg:h-96">
                            <FaPhone/>
                            Contact Us 
                        </div>
                    );
             

            case "/about":
                return (
                    <img
                    src={window.innerWidth >= 1024 ? about1: about2} 
                    alt="Project Background"
                    className="w-full "
                />
                );
    
            default:    
                return null;
        }
    };
    

    return (
        <div className="relative w-full">
      {/* Dynamic Background */}
      {getBackground()}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-around px-6 md:px-8 py-4 text-white z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 md:h-16" />
          <img src={logoText} alt="Logo Text" className="h-6 md:h-12 " />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:justify-center md:items-center text-xl space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/upcomming-projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#183630] flex flex-col items-center justify-center z-50 text-white space-y-8 text-2xl">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/upcomming-projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

    </div>
    );
};

export default Navbar;
