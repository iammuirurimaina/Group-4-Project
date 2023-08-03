import React,{useState} from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ article,bookmarkArticle }) => {
  const { title, description, author, source, publishedAt, url, urlToImage } = article;
  const [bookmarked,setBookmarked] =useState(false)
    const handleBookmarkArticle = (article) => {
       bookmarkArticle(article)
      setBookmarked(!bookmarked)

    }

  return (
    <div className="row justify-content-center">
      
      <div className="col-md-6">
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <p>Author: {author}</p>
              <p>Source: {source.name}</p>
              <p>Published At: {publishedAt}</p>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" href={url} target="_blank">
              Read more
            </Button>
            <Button variant="primary" onClick={() => handleBookmarkArticle(article)}>
              Bookmark
            </Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default NewsCard;
