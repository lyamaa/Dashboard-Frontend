
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";

export default class nav extends Component {

  state = {
    redirect: false
  }


  handleClick = async () => {
    await axios.post('logout', {})
    this.setState({
      redirect: true
    })
  }
  render() {
    if (this.state.redirect){
      return <Redirect to="/login" />
    }
    return (
      <div>
        <header className="hero">
    <div className="hero-head">
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item is--brand">
            <img className="navbar-brand-logo" src="" alt="Welcome" />
          </a>
          <a href="/" className="navbar-item is-tab is-hidden-mobile is-active">
            <span className="icon is-medium">
              <i className="fa fa-home"></i>
            </span>
            Home
          </a>
          <a
            className="navbar-item is-tab is-hidden-mobile"
            href="https://github.com/mazipan/bulma-admin-dashboard-template"
          >
            Github
          </a>
          <a className="navbar-item is-tab is-hidden-mobile" href="/users">
            Users
          </a>
          <a className="navbar-item is-tab is-hidden-mobile" href="#">
            About
          </a>

          <button className="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="navbar-menu navbar-end" id="navMenu">
          <a className="navbar-item nav-tag">
            <span className="icon is-small">
              <i className="fa fa-envelope-o animated"></i>
            </span>
            <span className="tag is-success counter">2</span>
          </a>
          <a className="navbar-item nav-tag">
            <span className="icon is-small">
              <i className="fa fa-bell-o animated"></i>
            </span>
            <span className="tag is-danger counter">6</span>
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="https://mazipan.space/">
              <figure
                className="image is-32x32"
                style={{ marginRight: "0.5em" }}
              >
                <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32" />
              </figure>
              mazipan
            </a>

            <div className="navbar-dropdown is-right">
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-user-o"></i>
                </span>
                &nbsp; Profile
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" onClick={this.handleClick}>
                <span className="icon is-small">
                  <i className="fa fa-power-off"></i>
                </span>
                &nbsp; Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
      </div>
    )
  }
}

