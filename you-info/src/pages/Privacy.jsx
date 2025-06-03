import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => (
  <section className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 animate-fade-in">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Privacy Policy</h1>
      <p className="text-gray-600 text-lg mb-6">
        We respect your privacy and are committed to protecting it.
      </p>
    </div>

    <div className="space-y-6">
      <div className="flex gap-4 items-start">
        <ShieldCheck className="text-green-500 w-8 h-8 mt-1" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Data Collection</h2>
          <p className="text-gray-600">
            We collect only public video statistics from YouTube's API. No personal data is stored.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <ShieldCheck className="text-purple-500 w-8 h-8 mt-1" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Third-Party Services</h2>
          <p className="text-gray-600">
            We use Google APIs strictly to fetch trending video data. We do not use cookies or trackers.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <ShieldCheck className="text-red-500 w-8 h-8 mt-1" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Your Control</h2>
          <p className="text-gray-600">
            You can browse anonymously. No login or tracking features are used or required.
          </p>
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
          ← Back to Trending App
        </button>
      </Link>
    </div>
  </section>
);

export default Privacy;
