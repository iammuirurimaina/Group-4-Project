import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ article, bookmarkArticle }) => {
  const { title, description, author, source, publishedAt, url, urlToImage } = article;
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkArticle = () => {
    bookmarkArticle(article);
    setBookmarked(!bookmarked);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8"> {/* Increase the width of the card */}
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Author: {author}</Card.Text>
            <Card.Text>Source: {source.name}</Card.Text>
            <Card.Text>Published At: {publishedAt}</Card.Text>
            <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
              Read More
            </Button>
            <button onClick={handleBookmarkArticle} className="btn btn-light">
              {bookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>
            <button className="btn btn-light" style={{ fontSize: '1rem' }}> {/* Reduce the font size */}
              Like
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NewsCard;
