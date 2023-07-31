import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const getPopularShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shows`);
    const popularShows = response.data.slice(0, 20); // İlk 20 popüler dizi
    return popularShows;
  } catch (error:any) {
    console.error('Error fetching popular shows:', error.message);
    return [];
  }
};
