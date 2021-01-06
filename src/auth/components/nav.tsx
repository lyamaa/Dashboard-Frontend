
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'
import { User } from '../../classes/User';
import { connect } from 'react-redux'; 
import Logo from "../../assets/img/dash.png"
class nav extends Component<{user:User}> {

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
            <img className="navbar-brand-logo" src={Logo} />
          </a>
          <Link to={"/"} className="navbar-item is-tab is-hidden-mobile is-active">
            <span className="icon is-medium">
              <i className="fa fa-home"></i>
            </span>
            Home
          </Link>
          <a target="_blank"
            className="navbar-item is-tab is-hidden-mobile" 
            href="https://github.com/surajmt8848/Dashboard"
          >
            Github
          </a>
          <Link to={"/users"} className="navbar-item is-tab is-hidden-mobile">
            Users
          </Link>
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
          
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#">
              Welcome &nbsp;
            <strong> {this.props.user.name}</strong>
             
            </a>

            <div className="navbar-dropdown is-right">
              <Link to="/profile" className="navbar-item">
                <span className="icon is-small">
                  <i className="fas fa-user"></i>
                </span>
                &nbsp; Profile
              </Link>
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

// @ts-ignore
export default connect(state => ({user: state.user})) (nav)