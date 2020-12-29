import React, { Component, SyntheticEvent } from "react";
import Wrapper from "../components/wrapper";

import axios from "axios"
import { User } from "../../classes/User";

export default class Profile extends Component {
  state = {
    username : "",
    email: ""

  }
  username = "";
  email = "";
  password = "";
  password_confirm = "";

  componentDidMount = async() => {
    const response = await axios.get('user')

    const user: User = response.data.data

    this.setState({
      username: user.username,
      email: user.email
    })
  }

  updateProfile = async(e:SyntheticEvent) => {
    e.preventDefault();
    await axios.put('user/info', {
      username: this.username,
      email: this.email
  })
  }

  changePassword = async(e:SyntheticEvent) => {
    e.preventDefault()

    await axios.put('user/password', {
        password: this.password,
        password_confirm: this.password_confirm
    })
  }
  render() {
    return (
      <Wrapper>
        <div className="columns is-multiline is-mobile">
          <div className="column">
            <form className="box mt-5 ml-5" onSubmit={this.updateProfile}>
              <p className="title" style={{ textAlign: "center" }}>
                Profile
              </p>
              <div className="field mt-0">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    placeholder="Text input"
                    defaultValue= {this.username = this.state.username}
                    onChange={e => this.username = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="field mt-0">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-danger"
                    type="email"
                    placeholder="Email input"
                    defaultValue= {this.email = this.state.email}
                    onChange={e => this.email = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">Submit</button>
                </p>
              </div>
            </form>
          </div>
          <div className="column">
            <form className="box mt-5 ml-5" onSubmit={this.changePassword}>
              <p className="title" style={{ textAlign: "center" }}>
                Change Password
              </p>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => this.password = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    name="password_confirm"
                    placeholder="Password"
                    onChange={e => this.password_confirm = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">Submit</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
