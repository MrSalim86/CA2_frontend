import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home.jsx";
import About from "../routes/About.jsx";
import React from "react";
import Joke from "../routes/Jokes.jsx";
import Weather from "../routes/Weather.jsx";

const Content = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About user={user} />} />
      <Route path="/jokes" element={<Joke user={user} />} />
      <Route path="/weather" element={<Weather user={user} />} />
    </Routes>
  );
};

export default Content;
