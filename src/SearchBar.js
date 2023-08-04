import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch articles from the News API based on the search term
    const fetchArticles = async () => {
      try {
        const apiKey = '2513b10261db49bb8b031bc8cc66e9e9';
        const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          searchTerm
        )}&apiKey=${apiKey}`;

        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
      } catch (error) {
        setError('Error fetching articles. Please try again later.');
      }
    };

    if (searchTerm) {
      fetchArticles();
    } else {
      setArticles([]); // Clear articles when search term is empty
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="ui segment">
      <h1 className="ui header">Search Articles</h1>
      <div className="ui fluid action input">
        <input
          type="text"
          placeholder="Enter search keyword"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="ui button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <p>{error}</p>}
      <div className="ui relaxed divided list">
        {articles.map((article, index) => (
          <div className="item" key={index}>
            <h3 className="header">{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;