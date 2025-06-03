// src/components/NavigationDrawer.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="text-gray-700 p-2 rounded hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Slide-Out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/contact" className="hover:text-blue-600">Contact Us</a>
          <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavigationDrawer;
