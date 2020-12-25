import axios from "axios";
import React, { Component, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { Permission } from "../../classes/Permission";
import { Role } from "../../classes/role";
import Wrapper from "../components/wrapper";

export default class RolesEdit extends Component<{ match: any }> {
  state = {
    name: "",
    selected: [],
    permissions: [],
    redirect: false,
  };
  selected: number[] = [];
  name = "";
  id = 0;

  componentDidMount = async () => {
    this.id = this.props.match.params.id;
    const permissionCall = await axios.get("permissions");

    const roleCall = await axios.get(`roles/${this.id}`);

    const role: Role = roleCall.data.data;

    this.selected = role.permissions.map((p: Permission) => p.id);

    console.log(permissionCall);
    this.setState({
      name: role.name,
      selected: this.selected,
      permissions: permissionCall.data.data,
    });
  };

  check = (id: number) => {
    if (this.isChecked(id)) {
      this.selected = this.selected.filter((s) => s !== id);
      return;
    }
    this.selected.push(id);
  };


  isChecked = (id: number) => {
    return  this.state.selected.filter((s) => s === id).length > 0
  };


  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.put( `roles/${this.id}`, {
      name: this.name,
      permissions: this.selected,
    });
    this.setState({
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/roles"} />;
    }
    return (
      <div>
        <Wrapper>
          <form onSubmit={this.submit}>
            {/*  */}
            <div className="field ml-6">
              <label className="label"> Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  defaultValue={(this.name = this.state.name)}
                  onChange={(e) => (this.name = e.target.value)}
                />
              </div>

              <div className="control">
                {this.state.permissions.map((p: Permission) => {
                  return (
                    <label className="checkbox mt-3" key={p.id}>
                      <input
                        type="checkbox"
                        value={p.id}
                        defaultChecked={this.isChecked(p.id)}
                        onChange={(e) => this.check(p.id)}
                      />{" "}
                      {p.name} &nbsp;
                    </label>
                  );
                })}
              </div>

              <div className="control mt-3">
                <button className="button is-link">Update</button>
              </div>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}
