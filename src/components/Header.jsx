import { NavLink } from "react-router-dom";
import LogIn from "./LoginForm.jsx";
import LoggedIn from "./LoggedIn.jsx";
import React from "react";

const Header = ({ loggedIn, login, user, logout }) => {
  return (
    <ul className="header">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/jokes">Joke</NavLink>
      </li>
      <li>
        <NavLink to="/weather">Weather</NavLink>
      </li>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <>
          <LoggedIn user={user} logout={logout} />
        </>
      )}
    </ul>
  );
};

export default Header;
