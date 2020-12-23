import React, { useState } from "react";
import {NavLink} from "react-router-dom"

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };
  return (
    <aside id="main-sidebar" className="column is-2 aside">
      <nav className="menu active-menu--home">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"} className=" is-active">
              <span className="icon is-small">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>Users</NavLink>
          </li>
        </ul>
      </nav>

      <div id="sidebar-toggler" onClick={openHandler}>
        <span className="icon is-small">
          <i className="fa fa-angle-double-left"></i>
        </span>
      </div>
    </aside>
  );
};
export default Menu;
