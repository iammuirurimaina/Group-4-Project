import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import NewsFeed from './NewsFeed';
import SearchBar from './SearchBar';


function App() {
  return (
    <div className="container mt-4">
       <NavBar />
      <Routes>
      <Route  path="/" element={<Home />} />
        
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

    </Routes>
    </div>
  );
}

export default App;
