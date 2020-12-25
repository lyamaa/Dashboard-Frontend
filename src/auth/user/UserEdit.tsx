import axios from "axios";
import React, { Component, PropsWithRef, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { Role } from "../../classes/role";
import { User } from "../../classes/User";
import Wrapper from "../components/wrapper";

export default class UserEdit extends Component<{ match: PropsWithRef<any> }> {
  state = {
    roles: [],
    username: "",
    email: "",
    role_id: 0,
    redirect: false
  };

  id = 0;
  username = "";
  email = "";
  role_id = 0;

  componentDidMount = async () => {
    this.id = this.props.match.params.id;

    const rolesCall = await axios.get("roles");

    const userCall = await axios.get(`user/${this.id}`);

    const user: User = userCall.data.data;

    this.setState({
      username: user.username,
      email: user.email,
      role_id: user.role.id,
      roles: rolesCall.data.data,
    });
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`user/${this.id}`, {
        username: this.username,
        email: this.email,
        role_id: this.role_id
    })
    this.setState({
        redirect: true
    })
  };
  render() {
      if (this.state.redirect){
          return <Redirect to={"/users"} />
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
                    defaultValue={this.username = this.state.username}
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
                    defaultValue={this.email = this.state.email}
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
                    <select
                      name="role_id"
                      value={this.role_id = this.state.role_id}
                      onChange={e =>
                        {this.role_id = parseInt(e.target.value)
                            this.setState({
                                role_id: this.role_id
                            })
                        }
                      }
                    >
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
                  <button className="button is-info mt-2">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
