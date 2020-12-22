import React, { Component } from "react";
import "./public.css";
import Profile from "./img/profile.svg";
import Access from "./img/register.svg";
import Wave from "./img/wave.png";
export default class register extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="img">
            <img src={Access} />
          </div>
          <div className="login-container">
            <form>
              <div className="img">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={Profile} alt="" />
                </figure>
              </div>
              <h2 className="">Welcome</h2>
              <div className="input-div">
                <div className="i"></div>
                <div className="field">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="text"
                        placeholder="Username"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="i"></div>
                <div className="field">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="email"
                        placeholder="me@me.com"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="i"></div>
                <div className="field">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="password"
                        placeholder="Password "
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="i"></div>
                <div className="field">
                  <div className="control">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-rounded"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="field">
                <div className="control">
                  <button className="button btn is-rounded is-success  ml-6">
                    Login
                  </button>
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
