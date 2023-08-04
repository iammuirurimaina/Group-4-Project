import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar';
import NewsFeed from '../NewsFeed';

function Home() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <div className="container mt-4">
      <h1 className="text-center">NewsFeed</h1>
      <div className="ui centered segment">
        
        <SearchBar />
      </div>
      <br />
      {/* Conditional rendering */}
      <div className="ui raised segment">
        {searchQuery ? (
          <NewsFeed searchQuery={searchQuery} />
        ) : (
          <NewsFeed />
        )}
      </div>
    </div>
  );
}

export default Home;