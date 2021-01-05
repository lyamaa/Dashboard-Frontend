import React, { Component, Dispatch, SyntheticEvent } from "react";
import Wrapper from "../components/wrapper";

import axios from "axios";
import { User } from "../../classes/User";
import { connect } from "react-redux";
import setUser from "../../redux/actions/setUserAction";

class Profile extends Component<any> {
  state = {
    username: "",
    email: "",
  };
  username = "";
  email = "";
  password = "";
  password_confirm = "";

  updateProfile = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.put("user/info", {
      username: this.username,
      email: this.email,
    });
    const user: User = response.data;
    console.log(user);
    this.props.setUser(new User(
      user.id,
      user.username,
      user.email,
      user.role,
      user.permissions
    ));
  };

  changePassword = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put("user/password", {
      password: this.password,
      password_confirm: this.password_confirm,
    });
  };
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
                    defaultValue={(this.username = this.props.user.username)}
                    onChange={(e) => (this.username = e.target.value)}
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
                    defaultValue={(this.email = this.props.user.email)}
                    onChange={(e) => (this.email = e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <p className="control">
                  <button type="submit" className="button is-success">Submit</button>
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
                    onChange={(e) => (this.password = e.target.value)}
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
                    onChange={(e) => (this.password_confirm = e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button type="submit" className="button is-success">
                    Submit
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setUser: (user: User) => dispatch(setUser(user)),
  };
};
//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
