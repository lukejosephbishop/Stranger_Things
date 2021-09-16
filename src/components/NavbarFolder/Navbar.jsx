import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <i class="fas fa-couch"></i>
        </h3>
        <h1 className="navbar-logo">Stranger's Things</h1>
      </nav>
      <div className="menu-icon">
      <Link className="nav-links" to="/home">
        Home
      </Link>
      <Link className="nav-links" to="/posts">
        Posts
      </Link>
      <Link className="nav-links" to="/profile">
        Profile
      </Link>
      <Link className="nav-links" to="/login">
        Login
      </Link>
      </div>
    </nav>
  );

  // return (
  //       <nav className="NavbarMenu">
  //         <nav className="logo">
  //           <h3>
  //             <i className="fas fa-blender"></i>
  //           </h3>
  //           <h3>
  //             <i className="fas fa-space-shuttle"></i>
  //           </h3>
  //           <h1 className="navbar-logo">Stranger's Things</h1>
  //         </nav>
  //         <div className="menu-icon">
  //           <ul >
  //             {MenuItems.map((item, indx) => {
  //               return (
  //                 <>
  //                   <a className={item.cName} href={item.url}>
  //                     {item.title}
  //                   </a>
  //                 </>
  //               );
  //             })}
  //           </ul>
  //         </div>
  //       </nav>
  //     );
};

export default Navbar;
