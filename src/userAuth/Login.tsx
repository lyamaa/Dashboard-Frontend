import React, { Component, SyntheticEvent } from "react";
import "./public.css";
import Profile from "./img/profile.svg";
import Access from "./img/access.svg";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
class Login extends Component {
  username = ''
  password = ''

  state = {
    redirect: false
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await axios.post('login',{
      username: this.username,
      password: this.password
    })
    this.setState({
      redirect: true,
    });
  }
  render() {
    if(this.state.redirect){
      return <Redirect to="/"/>
    }
    return (
     
      <div className="container is-mobile">
        <div className="container">
          <div className="img">
            <img src={Access} />
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
                <div>
                <div className="field">
                  {/* <label className="label">Username/Email</label> */}
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-medium is-rounded"
                      type="text"
                      placeholder="Username/Email"
                      
                      required
                      onChange={e => this.username = e.target.value}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  </div>
                </div>
              </div>
              <div className="input-div">
                <div className="i"></div>
                <div>
                  <div className="field mt-0">
                    {/* <label className="label">Password</label> */}
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="  input is-medium is-rounded"
                        type="Password"
                        placeholder="Password"
                        required
                        onChange={e => this.password = e.target.value}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-0">


                <button className="button btn is-rounded is-success">
                  Login
                </button>
                <label  className="label mt-1 ml-6">
                  <Link to="/register">New Here?</Link>
                </label>
                <label className="label ml-6">
                  <a href="#">Forgot Password?</a>
                </label>
              </div>
            </form>
          </div>
        </div>
        <script type="text/javascript" src="./app.js"></script>
      </div>
    );
  }
}
export default Login;
