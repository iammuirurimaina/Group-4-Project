import React from 'react';
import NewsFeed from './NewsFeed';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="container mt-4">
      <h1 class ="text-center">NewsFeed</h1>
      <div class="text-center">
      <SearchBar/>
      </div>
     
      <br/>
      <NewsFeed />
      
    </div>
  );
}

export default App;
