import React, { Component } from "react";

import "./Navbar.css";
import { Redirect, Link, useHistory } from "react-router-dom";
import { clearCurrentUser, clearPostId, clearUserName } from "../../auth";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();

  return (
    <nav className="NavbarMenu">
      <nav className="logo">
        <h3>
          <i className="fas fa-blender"></i>
        </h3>
        <h3>
          <i className="fas fa-space-shuttle"></i>
        </h3>
        <h3>
          <i className="fas fa-couch"></i>
        </h3>
        <Link className="navbar-logo" to="/">
          <h1>Stranger's Things</h1>
        </Link>
      </nav>
      <div className="menu-icon">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/posts">
          Posts
        </Link>
        {isLoggedIn ? (
          <Link className="nav-links" to="/profile">
            Profile
          </Link>
        ) : null}
        {isLoggedIn ? (
          <Link
            className="nav-links"
            to="/login"
            onClick={(event) => {
              const course = confirm("Are you sure you want to log out?");
              
              if (course === true) {
                event.preventDefault;
                clearCurrentUser();
                clearPostId();
                clearUserName();
                setIsLoggedIn(false);
              } 
            }}
          >
            {isLoggedIn ? "LogOut" : "LogIn"}
          </Link>
        ) : (
          <Link className="nav-links" to="/login">
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );

};

export default Navbar;
