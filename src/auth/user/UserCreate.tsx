import React, { Component, SyntheticEvent } from "react";
import Wrapper from "../components/wrapper";

import axios from "axios";
import { Role } from "../../classes/role";
import { Redirect } from "react-router-dom";

export default class UserCreate extends Component {
  state = {
    roles: [],
    redirect : false
  };

  username = ""
  email = ""
  role_id = 0
  componentDidMount = async () => {
    const response = await axios.get("roles");

    this.setState({
      roles: response.data.data,
    });
  };

  submit = (e: SyntheticEvent) => {
    e.preventDefault();
    axios.post('users', {
      username: this.username,
      email : this.email,
      role_id: this.role_id
    })
    this.setState({
      redirect: true
    })
    
  }
  render() {
    if(this.state.redirect){
      return <Redirect to={'/users'} />
    }
    return (
      <Wrapper>
           <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter ">
            <form className="control" onSubmit={this.submit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left ">
                  <input
                    className="input is-success"
                    type="text"
                    placeholder="Text input"
                    onChange={e => this.username = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <p className="help is-success"></p>
              </div>

              <div className="field mt-0">
                <label className="label">Email</label>
                <div className="control has-icons-left ">
                  <input
                    className="input is-danger"
                    type="email"
                    placeholder="Email input"
                    onChange={e => this.email = e.target.value}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <p className="help is-danger"></p>
              </div>

              <div className="field mt-0">
                <label className="label">Roles</label>
                <div className="control">
                  <div className="select">
                    <select name="role_id" onChange={e => this.role_id = parseInt(e.target.value)}>
                      <option>Select Roles</option>
                      {this.state.roles.map((role: Role) => {
                        return (
                          <option key={role.id} value={role.id}>
                            {role.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field is-grouped mt-2">
                <div className="control">
                  <button className="is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>              
      </Wrapper>
    );
  }
}
