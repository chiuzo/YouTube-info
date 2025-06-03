import React from "react";
import { Rocket, Globe, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">About YouInfo Trends</h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover what's trending on YouTube across the world — by category and region.
        </p>
        <img
          src="i" // Sample illustration
          alt="Trends Illustration"
          className="w-full md:w-3/4 mx-auto mb-8 rounded-lg shadow"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex gap-4 items-start animate-slide-in">
          <Globe className="text-blue-500 w-8 h-8 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Global Reach</h2>
            <p className="text-gray-600">
              Instantly explore YouTube’s top content across countries and categories.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start animate-slide-in delay-100">
          <BarChart3 className="text-green-500 w-8 h-8 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Real-Time Stats</h2>
            <p className="text-gray-600">
              See up-to-date video data, including views, likes, and comments.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start animate-slide-in delay-200">
          <Users className="text-purple-500 w-8 h-8 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Community Focus</h2>
            <p className="text-gray-600">
              Built to inform creators, marketers, and trend-watchers alike.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start animate-slide-in delay-300">
          <Rocket className="text-red-500 w-8 h-8 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Fast & Beautiful</h2>
            <p className="text-gray-600">
              Designed with performance and visual elegance using React & Tailwind.
            </p>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="mt-10 text-center">
        <Link to="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
            ← Back to Trending App
          </button>
        </Link>
      </div>

      {/* Footer note */}
      <div className="mt-10 border-t pt-6 text-sm text-gray-500 text-center">
        Built with ❤️ by <span className="font-medium text-gray-700">Chizoma Uzoma</span>. Powered by YouTube Data API.
      </div>
    </section>
  );
};

export default About;
