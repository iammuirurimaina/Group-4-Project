import React from 'react';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
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
