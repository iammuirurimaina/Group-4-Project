import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import SidebarLeft from './components/SidebarLeft';
import { Container, Row, Col } from "react-bootstrap";


const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
const [bookmarkedArticles,setBookmarkedArticles] = useState([]);
  useEffect(() => {
    const apiKey = '2513b10261db49bb8b031bc8cc66e9e9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => setArticles(response.data.articles))
      
      .catch((error) => console.error('Error fetching data:', error));
      console.log(setArticles)
  }, []);


  // Function to handle bookmarking an article
  const handleBookmark = (article) => {
    if (!bookmarkedArticles.includes(article)) {
      const newBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(newBookmarks);
      localStorage.setItem("bookmarkedArticles", JSON.stringify(newBookmarks));
      console.log(bookmarkedArticles);

    }
  
  };

  useEffect(() => {
    // Define an async function and immediately invoke it
    (async () => {
      try {
        // Use await to handle the asynchronous localStorage.getItem call
        const storedBookmarks = await localStorage.getItem(
          "bookmarkedArticles"
        );
        if (storedBookmarks) {
          setBookmarkedArticles(JSON.parse(storedBookmarks));
        
          console.log(storedBookmarks);
        }
      } catch (error) {
        console.error("Error fetching bookmarkedArticles: ", error)

      }
    })();
  }, []);


  return (
    <div><Container>
    <Row>
      <Col md={3}>
        <SidebarLeft bookmarkedArticles={bookmarkedArticles} />
      </Col>
      <Col md={9}>
        <div>
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              bookmarkArticle={handleBookmark}
            />
          ))}
        </div>
      </Col>
    </Row>
  </Container>
    </div>
  );
};

export default NewsFeed;
