import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => (
  <section className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 animate-fade-in">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-6">
        Have questions, ideas, or need support? We're always listening.
      </p>
    </div>
    <div className="flex gap-4 items-start mb-8">
      <Mail className="text-blue-500 w-8 h-8 mt-1" />
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Email Support</h2>
        <p className="text-gray-600">
          Reach us at{" "}
          <a href="mailto:support@youinfo.com" className="text-blue-600 hover:underline">
            support@youinfo.com
          </a>
        </p>
      </div>
    </div>
    <div className="text-center">
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
          ← Back to Trending App
        </button>
      </Link>
    </div>
  </section>
);

export default Contact;
