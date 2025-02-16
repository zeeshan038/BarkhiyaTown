import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import videoBg from "../assets/promo.mp4"; // Background for Home
import projectBanner from "../assets/projectBanner.jpeg"; // Background for About
import projectBanner1 from "../assets/projectBanner-1.jpeg"; // Background for About
import contactBg from "../assets/projectBanner.jpeg"; // Background for Contact
import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";
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
                        className="h-screen w-full object-cover"
                    />
                );
                case "/upcomming-projects":
                    return (
                        <img
                            src={window.innerWidth >= 1024 ? projectBanner1 : projectBanner} 
                            alt="Project Background"
                            className="w-full "
                        />
                    );
             
    
                case "/about":
                    return (
                        <img
                            src={window.innerWidth >= 1024 ? projectBanner1 : projectBanner} 
                            alt="Project Background"
                            className="w-full "
                        />
                    );
             

            case "/contact":
                return (
                    <img
                        src={contactBg}
                        alt="Contact Background"
                        className="w-full h-full"
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
            <div className="absolute inset-0 bg-black/40"></div>
   
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-50">
            <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16 md:h-20" />
                        <img src={logoText} alt="Logo Text" className="h-12 w-40 md:w-72 md:h-16" />
                    </Link>
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/upcomming-projects" className="hover:text-gray-300">Projects</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
            </nav>

            {/* Content */}
            <div className="">
                <h1 className="text-5xl font-bold">
                    {location.pathname === "/"
                      
                      }
                </h1>
              
            </div>
        </div>
    );
};

export default Navbar;
