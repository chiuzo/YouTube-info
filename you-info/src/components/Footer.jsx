import React from "react";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">

        {/* Description */}
        <p className="text-sm mb-4">
          Discover the latest trending YouTube videos by country and category. Powered by the YouTube API.
        </p>

        {/* Divider */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Horizontal Links with animated underline and bounce/glow */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
          {[
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Disclaimer", href: "/disclaimer" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group text-gray-600 transition duration-300 hover:text-blue-600"
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 rounded-full group-hover:w-full 
                           group-hover:shadow-md group-hover:shadow-blue-400 transition-all duration-300 ease-out"
              ></span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-4">
          <a
            href="https://www.tiktok.com/@your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-black transition duration-300 ease-out"
          >
            <FaTiktok className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-black transition duration-300 ease-out"
          >
            <FaXTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/@your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-red-600 transition duration-300 ease-out"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} YouInfo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
