import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const LikedArticlesPage = () => {
  const [likedArticles, setLikedArticles] = useState([]);

  // Function to handle adding an article to liked articles
  const handleLikeArticle = (article) => {
    setLikedArticles((prevLikedArticles) => [...prevLikedArticles, article]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Liked Articles</h1>
      <div className="ui four cards">
        {likedArticles.map((article) => (
          <Card key={article.id}>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description>{article.description}</Card.Description>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LikedArticlesPage;