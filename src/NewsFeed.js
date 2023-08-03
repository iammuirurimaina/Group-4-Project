import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '2513b10261db49bb8b031bc8cc66e9e9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => setArticles(response.data.articles))
      
      .catch((error) => console.error('Error fetching data:', error));
      console.log(setArticles)
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
