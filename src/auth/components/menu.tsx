import React, {useState} from "react";

const Menu = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openHandler = () => {
    if (!sidebarOpen){
      setSidebarOpen(true)
    }
    else{
      setSidebarOpen(false)
    }
  }
  return (
    <aside id="main-sidebar"  className="column is-2 aside">
        <nav className="menu active-menu--home">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a className="is-active" href="/bulma-admin-dashboard-template/">
                <span className="icon is-small"><i className="fas fa-tachometer-alt"></i></span> <span
                  className="menu-text">Dashboard</span>
              </a>
            </li>
          </ul>
         
        </nav>

        <div id="sidebar-toggler" onClick={openHandler} >
          <span className="icon is-small"><i className="fa fa-angle-double-left"></i></span>
        </div>
      </aside>
  )
}
export default Menu;
