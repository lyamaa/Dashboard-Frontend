import React from "react";

const Menu = () => (
  <aside id="main-sidebar" className="column is-2 aside">
        <nav className="menu active-menu--home">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a className="is-active" href="/bulma-admin-dashboard-template/">
                <span className="icon is-small"><i className="fa fa-tachometer"></i></span> <span
                  className="menu-text">Dashboard</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">Administration</p>
          <ul className="menu-list">
            <li>
              <a className="" href="/bulma-admin-dashboard-template/forms/">
                <span className="icon is-small"><i className="fa fa-pencil-square-o"></i></span> <span
                  className="menu-text">Forms</span>
              </a>
            </li>
            <li>
              <a className="" href="/bulma-admin-dashboard-template/ui-elements/">
                <span className="icon is-small"><i className="fa fa-desktop"></i></span> <span className="menu-text">UI
                  Elements</span>
              </a>
            </li>
            <li>
              <a className="" href="/bulma-admin-dashboard-template/tables/">
                <span className="icon is-small"><i className="fa fa-table"></i></span> <span className="menu-text">Tables</span>
              </a>
            </li>
            <li>
              <a className="" href="/bulma-admin-dashboard-template/presentations/">
                <span className="icon is-small"><i className="fa fa-bar-chart"></i></span>
                <span className="menu-text">Presentations</span>
              </a>
            </li>

            <li className="has-children">
              <a className=""><span className="icon is-small"><i className="fa fa-cog"></i></span> <span
                  className="menu-text">Layouts</span></a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
          </ul>

          <p className="menu-label">Live On</p>
          <ul className="menu-list">
            <li>
              <a className="" href="/bulma-admin-dashboard-template/additional/">
                <span className="icon is-small"><i className="fa fa-bug"></i></span> <span className="menu-text">Additional
                  Pages</span>
              </a>
            </li>
            <li>
              <a className="" href="/bulma-admin-dashboard-template/extras/">
                <span className="icon is-small"><i className="fa fa-windows"></i></span> <span className="menu-text">Extras</span>
              </a>
            </li>
          </ul>

          <div className="ads-square">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins className="adsbygoogle" style={{display: "block"}} data-ad-format="fluid" data-ad-layout-key="-gw-3+1f-3d+2z"
              data-ad-client="ca-pub-5442972248172818" data-ad-slot="9533807764"></ins>
            <script>
                ; (adsbygoogle = window.adsbygoogle || []).push({})
            </script>
          </div>
        </nav>

        <div id="sidebar-toggler">
          <span className="icon is-small"><i className="fa fa-angle-double-left"></i></span>
        </div>
      </aside>
);
export default Menu;
