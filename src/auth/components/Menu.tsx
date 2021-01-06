import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export class Menu extends Component {
  render() {
    return (
      <aside id="main-sidebar" className="column is-2 aside">
      <nav className="menu active-menu--home">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
             
              <span className="menu-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>
             
              <span className="menu-text">Users</span>
            </NavLink>
          </li>
          <li>
          <NavLink to={"/roles"}>
             
              <span className="menu-text">Roles</span>
            </NavLink>
          </li>
          <li>
          <NavLink to={"/products"}>
              
              <span className="menu-text"> Products</span>
            </NavLink>
          </li>
          <li>
          <NavLink to={"/orders"}>
             
              <span className="menu-text"> Orders</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="sidebar-toggler">
        <span className="icon is-small">
          <i className="fa fa-angle-double-left"></i>
        </span>
      </div>
    </aside>
    )
  }
}

// @ts-ignore
export default Menu
