import React from "react";
import "./app.css";
import HomePage from "./components/Home/HomePage";
import MoviePage from "./components/Movies/MovieDetail";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
  <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
    </Routes>
  </>
  )
}

export default App;
