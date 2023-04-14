import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setUser, setToken, setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <h1>Strangers' Things</h1>
        {isLoggedIn ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setUser({});
                setToken("");
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
