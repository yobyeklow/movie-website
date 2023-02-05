import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header py-10 mb-5 text-white flex items-center justify-center gap-5 ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
