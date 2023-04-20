import { NavLink } from "react-router-dom";
import LogIn from "./LoginForm";
import LoggedIn from "./LoggedIn";

const Header = ({ loggedIn, login, user, logout }) => {
  return (
    <ul className="header">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
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
