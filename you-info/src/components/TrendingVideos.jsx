import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
import CategorySelector from "./CategorySelector";
import CountrySelector from "./CountrySelector";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const [countryCode, setCountryCode] = useState(null); // initially null
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const fetchedVideoIds = useRef(new Set());

  const isShortVideo = (video) => {
    const duration = moment.duration(video.contentDetails.duration);
    return duration.asSeconds() <= 60;
  };

  const resetAndFetch = () => {
    setVideos([]);
    fetchedVideoIds.current.clear();
    fetchTrendingVideos();
  };

  const fetchTrendingVideos = async (pageToken = "") => {
    if (!YOUTUBE_API_KEY || loading || !countryCode) return;
    setLoading(true);
    try {
      const regionCodeParam = countryCode ? `&regionCode=${countryCode}` : "";
      const categoryParam = selectedCategory ? `&videoCategoryId=${selectedCategory}` : "";

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular${regionCodeParam}${categoryParam}&maxResults=10&pageToken=${pageToken}&key=${YOUTUBE_API_KEY}`
      );

      let newVideos = response.data.items.filter((video) => {
        const videoId = video.id;
        if (fetchedVideoIds.current.has(videoId)) return false;
        if (activeTab === "shorts" && !isShortVideo(video)) return false;
        fetchedVideoIds.current.add(videoId);
        return true;
      });

      // Sort after filtering
      if (sortOption === "views") {
        newVideos.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
      } else if (sortOption === "likes") {
        newVideos.sort((a, b) => (b.statistics.likeCount || 0) - (a.statistics.likeCount || 0));
      } else if (sortOption === "comments") {
        newVideos.sort((a, b) => (b.statistics.commentCount || 0) - (a.statistics.commentCount || 0));
      }

      setVideos((prev) => [...prev, ...newVideos]);
      setNextPageToken(response.data.nextPageToken || "");
    } catch (err) {
      console.error("Error fetching trending videos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Detect user location on initial load
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country || "US");
      } catch (err) {
        console.warn("Could not detect location, defaulting to US.");
        setCountryCode("US");
      }
    };

    detectLocation();
  }, []);

  // Fetch when filters change
  useEffect(() => {
    if (countryCode !== null) {
      resetAndFetch();
    }
  }, [countryCode, selectedCategory, activeTab, sortOption]);

  // Infinite scroll and scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      if (scrolledToBottom && nextPageToken && !loading) {
        fetchTrendingVideos(nextPageToken);
      }
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken, loading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setActiveTab("all");
    setSortOption("default");
    resetAndFetch();
  };

  return (
    <div className="p-4">
      {/* Header or Logo Reset */}
      <h1 onClick={resetFilters} className="text-2xl font-bold mb-4 cursor-pointer">
        YouInfo
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <CountrySelector selectedCountry={countryCode} onCountryChange={setCountryCode} />
        <CategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="default">Sort by: Default</option>
          <option value="views">Most Viewed</option>
          <option value="likes">Most Liked</option>
          <option value="comments">Most Commented</option>
        </select>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-2 border-b-2 ${
            activeTab === "all"
              ? "border-blue-500 text-blue-600 font-semibold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          All Videos
        </button>
        <button
          onClick={() => setActiveTab("shorts")}
          className={`pb-2 border-b-2 ${
            activeTab === "shorts"
              ? "border-blue-500 text-blue-600 font-semibold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Shorts Only
        </button>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="rounded-xl shadow-lg p-4 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="rounded-md mb-2"
              />
              {isShortVideo(video) && (
                <span className="inline-block text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md mb-1">
                  Short
                </span>
              )}
              <h2 className="font-semibold text-lg mb-1">{video.snippet.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                Channel: {video.snippet.channelTitle}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Uploaded on {moment(video.snippet.publishedAt).format("MMMM D, YYYY")} (
                {moment(video.snippet.publishedAt).fromNow()})
              </p>
              <p className="text-sm text-gray-500">
                Views: {video.statistics.viewCount} | Likes:{" "}
                {video.statistics.likeCount || "N/A"} | Comments:{" "}
                {video.statistics.commentCount || "N/A"}
              </p>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center mt-6">
          <ImSpinner2 className="animate-spin text-blue-500 text-3xl" />
        </div>
      )}

      {/* Scroll to Top */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default TrendingVideos;
