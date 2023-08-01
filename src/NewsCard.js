import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ article }) => {
  const { title, description, author, source, publishedAt, url, urlToImage } = article;

  return (
    <div className="row justify-content-center">
      
      <div className="col-md-6">
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <p>{author}</p>
              <p>{source.name}</p>
              <p>{publishedAt}</p>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" href={url} target="_blank">
              Read more
            </Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default NewsCard;
