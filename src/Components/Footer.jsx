import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import logo from '../../public/logo.png'
import logoText from '../../public/logo-text.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#183630] text-white flex justify-center items-center p-16 lg:h-96">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center lg:justify-between gap-16">
                {/* Logo and Description */}
                <div className="text-center lg:text-left">
                    <Link to="/" className="flex items-center justify-center">
                        {/* Use Next.js Image */}
                        <img src={logo} alt="Logo" className="h-16 " />
                        <img src={logoText} alt="Logo Text" className="h-12  " />
                    </Link>
                    <p className="flex justify-end items-center text-xl text-gray-300">
                        Turning Dreams Into <br /> Reality
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold mb-4">Navigation</h1>
                    <ul className="flex flex-col space-y-2">
                        <li><Link to="/upcomming-projects">Upcoming Projects</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold mb-4">Contact Info</h1>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <FaLocationDot />
                            <span>
                            DHQ Hospital Rd, Chārsadda, <br />
                             Charsadda, Khyber Pakhtunkhwa 24451
                            </span>
                        </div>
                        <div className="flex flex-col items-start justify-center lg:justify-start gap-2">
                           <div className="flex items-center gap-1">
                           <IoCallSharp />
                           <span>+923116203188</span>
                           </div>
                           <div className="flex items-center gap-1">
                           <IoCallSharp />
                           <span>+9203116203187</span>
                           </div>
                           <div className="flex items-center gap-1">
                           <IoCallSharp />
                           <span>
                           (091) 6570111
                           </span>
                           </div>   
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <MdMail />
                            <span>
                            Barkhiyacharsadda@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold mb-4">Social Links</h1>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <FaLocationDot />
                            <Link to="https://www.facebook.com/Barkhiya.pk/" target="_blank">Facebook</Link>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <IoCallSharp />
                            <Link to="https://www.instagram.com/explore/locations/102483706203113/barkhiya-town-peshawar/" target="_blank">Instagram</Link>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <MdMail />
                            <a to="https://wa.me/923012631172" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
