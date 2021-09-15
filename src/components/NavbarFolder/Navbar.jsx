import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarMenu">
        <nav className="logo">
          <h3>
            <i className="fas fa-blender"></i>
          </h3>
          <h3>
            <i className="fas fa-space-shuttle"></i>
          </h3>
          <h1 className="navbar-logo">Stranger's Things</h1>
        </nav>
        <div className="menu-icon">
          <ul>
            {MenuItems.map((item, indx) => {
              return (
                <>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
