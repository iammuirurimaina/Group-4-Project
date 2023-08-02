import React from 'react';

import SearchBar from './SearchBar';

function App() {
  return (
    <div className="container mt-4">
      <h1 class ="text-center">NewsFeed</h1>
      <div className='searchBar'>
      <SearchBar />
      </div>
      
    </div>
  );
}

export default App;