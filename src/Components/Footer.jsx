import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLocationDot,
    FaWhatsapp,
} from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#183630] text-white flex justify-center  items-center px-6 py-10 md:py-16">
            <div className="w-full max-w-7xl flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-32 text-center md:text-left">
                {/* Logo and Description */}
                <div>
                    <Link to="/" className="flex items-center justify-center md:justify-start ">
                        <img src={logo} alt="Logo" className="h-16" />
                        <img src={logoText} alt="Logo Text" className="h-12" />
                    </Link>
                    <p className="mt-4 text-gray-300 text-lg">Turning Dreams Into <br /> Reality</p>
                </div>

                {/* Navigation Links */}
                <div className="ml-4">
                    <h1 className="text-2xl font-bold mb-4">Navigation</h1>
                    <ul className="space-y-2">
                        <li><Link to="/upcomming-projects" className="hover:underline">Upcoming Projects</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                        <li><Link to="/about" className="hover:underline">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Contact Info</h1>
                    <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <FaLocationDot />
                            <span>DHQ Hospital Rd, Chārsadda,<br />Charsadda, Khyber Pakhtunkhwa 24451</span>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <IoCallSharp />
                                <a href="https://wa.me/923116203188" target="_blank" rel="noopener noreferrer" className="hover:underline">0311 6203188</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <IoCallSharp />
                                <a href="https://wa.me/923116203187" target="_blank" rel="noopener noreferrer" className="hover:underline">0311 6203187</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <IoCallSharp />
                                <a href="tel:+92916570111" className="hover:underline">(091) 6570111</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <MdMail />
                            <a href="mailto:Barkhiyacharsadda@gmail.com" className="hover:underline">Barkhiyacharsadda@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Social Links</h1>
                    <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <FaFacebook />
                            <Link to="https://www.facebook.com/Barkhiya.pk/" target="_blank" className="hover:underline">Facebook</Link>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <FaInstagram />
                            <Link to="https://www.instagram.com/explore/locations/102483706203113/barkhiya-town-peshawar/" target="_blank" className="hover:underline">Instagram</Link>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <FaWhatsapp />
                            <a href="https://wa.me/923012631172" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
