import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import TrendingVideos from "./components/TrendingVideos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <Header />
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-700 mb-2">
                      Discover What's Trending
                    </h2>
                    <p className="text-gray-500">
                      Select a country and category to explore the latest YouTube trends globally.
                    </p>
                  </div>
                  <TrendingVideos />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <footer className="bg-white border-t py-8 mt-12 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-600 text-sm">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-800 mb-2">YouInfo Trends</h4>
              <p>Discover what’s trending on YouTube around the world.</p>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-2">Quick Links</h4>
              <ul className="space-y-1">
                  <li>
                    <a
                      href="/about"
                      className="inline-block border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 text-gray-600 hover:text-blue-600"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="inline-block border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 text-gray-600 hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="inline-block border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 text-gray-600 hover:text-blue-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>

            </div>

            <div className="text-center sm:text-right">
              <p>&copy; {new Date().getFullYear()} YouInfo. Built by Chizoma Uzoma.</p>
              <p>Powered by YouTube & Google Trends APIs.</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
};

export default App;
