import React from 'react';
import { CiMenuFries } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 footer">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 bot">
                <div>
                <h2 className="text-2xl font-bold mb-2">GlobeInfo</h2>
                <p className="text-gray-400 text-sm">
                    Explore global data with population, culture, and travel insights.
                </p>
                </div>
                {/* Quick Links */}
                <div>
                <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li><a href="/" className="hover:text-white"> <FaHome /> Home</a></li>
                    <li><a href="/country" className="hover:text-white"><CiFlag1 /> Top Countries </a></li>
                    <li><a href="/contact" className="hover:text-white"><IoIosContact /> Connect Us </a></li>
                    <li><a href="/about" className="hover:text-white"><AiFillAppstore /> About  </a></li>
                </ul>
                </div>

                {/* Contact */}
                <div className='contact'>
                <h3 className="font-semibold text-lg mb-2">Contact</h3>
                <p className="text-sm text-gray-300">Email: info@globeinfo.com</p>
                <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
                </div>

                {/* Social */}
                <div className='social'>
                <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <FaInstagram />
                    </a>
                </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-500 bar">
                © {new Date().getFullYear()} GlobeInfo. All rights reserved.
            </div>
        </footer>
    );
};
