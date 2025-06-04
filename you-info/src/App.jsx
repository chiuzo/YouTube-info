import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import TrendingVideos from "./components/TrendingVideos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import TermsOfUse from "./pages/TermsOfUse";

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
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </main>

        <Footer/>

      </div>
    </Router>
  );
};

export default App;
