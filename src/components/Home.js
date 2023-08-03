import React from 'react'
import SearchBar from '../SearchBar'
import NewsFeed from '../NewsFeed'

function Home() {

  return (
    
  <div className="container mt-4">
   <h1 class ="text-center">NewsFeed</h1>
   <div class="text-center">
  
   <SearchBar />
   </div>
  
   <br/>
   <NewsFeed />
   
 
 </div>
  )
}

export default Home