import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function SidebarLeft({ bookmarkedArticles }) {
  return (
    <Container>
      <h2>Bookmarks</h2>
      {bookmarkedArticles
        .slice()
        .reverse()
        .map((article, index) => (
          <Card key={index}>
            <Card.Header>
              <h5>{article.source.name}</h5>
            </Card.Header>
            <Card.Img
              variant="top"
              src={
                article.urlToImage ||
                "https://via.placeholder.com/800x400.png?text=Image+Not+Available"
              }
              alt={article.title}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x400.png?text=Image+Not+Available";
              }}
            />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Button
                variant="primary"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}
export default SidebarLeft