import React, { useState, useEffect } from "react";
import facade from "./components/apiFacade";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Joke from "./components/Joke";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "", roles: "" });

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setUser({ username: "", roles: "" });
  };

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      const token = facade.readJwtToken(facade.getToken());
      setUser({ username: token.username, roles: token.roles });
      setLoggedIn(true);
    });
  };

  return (
    <div>
      <Header loggedIn={loggedIn} login={login} user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Content user={user} />} />
        <Route path="/joke" element={<Joke />} />
      </Routes>
    </div>
  );
}

export default App;
