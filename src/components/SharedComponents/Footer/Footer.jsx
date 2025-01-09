import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaWhatsappSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-green-200 py-20 max-sm:px-10 px-16">
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-10 max-sm:grid-cols-1">
        <div>
          <h2 className="text-xl font-semibold mb-4">Lingo Bingo</h2>
          <p>
            Your companion in mastering vocabulary. Explore, learn, and grow
            with our interactive platform.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="mt-3 font-semibold  space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/start-learning" className="hover:underline">
                Start Learning
              </Link>
            </li>
           
          
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <p className="mt-2 py-2 font-semibold">Email: <a href="mailto:help@lingobingo.com" className="hover:underline">help@lingobingo.com</a></p>
      <p className="text-sm font-semibold pb-2">Phone: +880 1515151515</p>
      <p className="text-sm font-semibold">Office: KhanKhanapur,Rajbari</p>
        </div>
        <div className="">
  <h2 className="text-xl font-semibold mb-4">Follow Us on Social Media</h2>
  <div className="flex items-center gap-10 text-2xl">
    <Link to="/facebook" className="hover:text-blue-500 transition-colors duration-300">
      <FaFacebook />
    </Link>
    <Link to="/instagram" className="hover:text-pink-500 transition-colors duration-300">
      <FaInstagram />
    </Link>
    <Link to="/whatsapp" className="hover:text-green-500 transition-colors duration-300">
      <FaWhatsappSquare />
    </Link>
    <Link to="/twitter" className="hover:text-blue-400 transition-colors duration-300">
      <FaXTwitter />
    </Link>
  </div>
</div>

      </div>
      <div className="mt-8 text-center">
        <div className="divider"></div>
  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#15389E] via-[#2e6eb6] to-[#4A9CF8]'">
    Copyright © {new Date().getFullYear()} Lingo Bingo. All rights reserved.
  </p>
</div>
   
    </div>
  );
};

export default Footer;
