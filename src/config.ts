require('dotenv').config();

const config: any = {
  port: process.env.PORT,
  news: {
    endpoint: process.env.NEWS_ENDPOINT,
    apiKey: process.env.NEWS_API_KEY,
  },
  quotes: {
    endpoint: process.env.QUOTES_ENDPOINT,
  },
  weather:{
    endpoint: process.env.WEATHER_ENDPOINT,
    apiKey: process.env.WEATHER_API_KEY
  }
};

export default config;
