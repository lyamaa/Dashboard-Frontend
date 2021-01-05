import React, { Component, SyntheticEvent } from "react";

import Profile from "./img/profile.svg";
import Access from "./img/register.svg";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
export default class register extends Component {
  username = "";
  email = "";
  password = "";
  password_confirm = "";

  state = {
    redirect: false,
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("register", {
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
    });

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div className="container">
        <div className="container">
          <div className="img">
            <img src={Access}  alt="signup user"/>
          </div>
          <div className="login-container">
            <form onSubmit={this.submit}>
              <div className="img">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={Profile} alt="" />
                </figure>
              </div>
              <h2 className="">Welcome</h2>
              <div className="input-div">
                <div className="i"></div>
                <div className="field mt-0">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="text"
                        placeholder="Username"
                        required
                        onChange={(e) => (this.username = e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="i"></div>
                <div className="field mt-0">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="email"
                        placeholder="me@me.com"
                        required
                        onChange={(e) => (this.email = e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="i"></div>
                <div className="field mt-0">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => (this.password = e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="i"></div>
                <div className="field mt-0">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        onChange={(e) =>
                          (this.password_confirm = e.target.value)
                        }
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field mt-0">
                <div className="control">
                  <button type="submit" className="button btn is-rounded is-success">
                    Sign Up
                  </button>
                  <label className="label mt-1 ml-6">
                    <Link to="/login">sign-in?</Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <script type="text/javascript" src="./app.js"></script>
      </div>
    );
  }
}
