import axios from "axios";
import React, { Component, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import { Permission } from "../../classes/Permission";
import Wrapper from "../components/wrapper";

export default class RolesCreate extends Component {
  state = {
    permissions: [],
    redirect: false,
  };
  selected: number[] = [];
  name = "";

  componentDidMount = async () => {
    const response = await axios.get("permissions");

    console.log(response);
    this.setState({
      permissions: response.data.data,
    });
    
  };

  check = (id: number) => {
    if (this.selected.filter((s) => s === id).length > 0) {
      this.selected = this.selected.filter((s) => s !== id);
      return;
    }
    this.selected.push(id);
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("roles", {
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
                        onChange={(e) => this.check(p.id)}
                      />{" "}
                      {p.name} &nbsp;
                    </label>
                  );
                })}
              </div>

              <div className="control mt-3">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}
