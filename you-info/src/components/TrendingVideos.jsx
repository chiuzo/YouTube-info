import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
import CategorySelector from "./CategorySelector";
import CountrySelector from "./CountrySelector";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // ✅ 'all' or 'shorts'

  const fetchedVideoIds = useRef(new Set());

  const isShortVideo = (video) => {
    const duration = moment.duration(video.contentDetails.duration);
    return duration.asSeconds() <= 60;
  };

  const fetchTrendingVideos = async (pageToken = "") => {
    if (!YOUTUBE_API_KEY) return;

    setLoading(true);
    try {
      const regionCodeParam = countryCode ? `&regionCode=${countryCode}` : "";
      const categoryParam = selectedCategory ? `&videoCategoryId=${selectedCategory}` : "";

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular${regionCodeParam}${categoryParam}&maxResults=10&pageToken=${pageToken}&key=${YOUTUBE_API_KEY}`
      );

      const newVideos = response.data.items.filter((video) => {
        const videoId = video.id;

        // Prevent duplicate videos
        if (fetchedVideoIds.current.has(videoId)) return false;

        // ✅ Tab filtering
        if (activeTab === "shorts" && !isShortVideo(video)) return false;

        fetchedVideoIds.current.add(videoId);
        return true;
      });

      if (newVideos.length === 0 && videos.length === 0) {
        setVideos(response.data.items);
      } else {
        setVideos((prev) => [...prev, ...newVideos]);
      }

      setNextPageToken(response.data.nextPageToken || "");
    } catch (err) {
      console.error("Error fetching trending videos:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Refetch on tab, country or category change
  useEffect(() => {
    setVideos([]);
    fetchedVideoIds.current.clear();
    fetchTrendingVideos();
  }, [countryCode, selectedCategory, activeTab]);

  return (
    <div className="p-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <CountrySelector selectedCountry={countryCode} onCountryChange={setCountryCode} />
        <CategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>

      {/* ✅ Tab selector */}
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

      {/* Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="rounded-xl shadow-lg p-4 bg-white">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="rounded-md mb-2"
              />

              {/* ✅ Shorts Badge */}
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
          </div>
        ))}
      </div>

      {/* Loading / Load More */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {nextPageToken && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={() => fetchTrendingVideos(nextPageToken)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingVideos;
