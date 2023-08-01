import React from 'react';

const NewsCard = ({ article }) => {
  const { title, description, author, source, publishedAt, url, urlToImage } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-author">{author}</p>
        <p className="card-source">{source.name}</p>
        <p className="card-published">{publishedAt}</p>
        <p className="card-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-readmore">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;