import React, { useState } from "react";

function NewsItem({ article, bookmarkArticle }) 
  const [bookmarked, setBookmarked] = useState(false);

  // Handles when the user clicks the Bookmark button
  const handleBookmarkClick = () => {
    bookmarkArticle(article);
    setBookmarked(true);
  }
