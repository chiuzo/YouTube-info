import React from "react";
import TrendingVideos from "./components/TrendingVideos";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
            YouInfo Trends
          </h1>
          <span className="text-sm text-gray-500">Powered by YouTube & Google Trends</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">Discover What's Trending</h2>
          <p className="text-gray-500">Select a country and category to explore the latest YouTube trends globally.</p>
        </div>

        <TrendingVideos />
      </main>

      {/* FOOTER */}
      <footer className="bg-white shadow-inner mt-10 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} YouInfo. Built by Chizoma Uzoma.
      </footer>
    </div>
  );
};

export default App;
