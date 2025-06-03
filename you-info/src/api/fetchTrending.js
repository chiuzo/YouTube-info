// src/api/fetchTrending.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchTrendingVideos = async (countryCode = 'US') => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet,statistics',
      chart: 'mostPopular',
      regionCode: countryCode,
      maxResults: 12,
      key: API_KEY,
    },
  });

  return response.data.items;
};
