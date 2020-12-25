import React, { Component } from "react";
import Wrapper from "../components/wrapper";

import axios from "axios";
import { Role } from "../../classes/role";
import { Link } from "react-router-dom";

export default class Roles extends Component {
  state = {
    roles: [],
  };
  componentDidMount = async () => {
    const response = await axios.get("roles");
    console.log(response);

    this.setState({
      roles: response.data.data,
    });
  };

  delete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this record?')){
        await axios.delete(`roles/${id}`)
        this.setState({
          roles: this.state.roles.filter((r: Role) => r.id !== id)
        })
    }
  }

  render() {
    return (
      <Wrapper>
        {/* BUTTON SECTION */}
        <div className="field is-grouped">
          <div className="control">
            <Link to={"/roles/create"} className="button">
              Roles Create
            </Link>
          </div>
        </div>
        {/* TABLE SECTION */}
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Name</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title="Position">#</abbr>
              </th>
              <th>
                <abbr title="Position">Name</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            {this.state.roles.map((role: Role) => {
              return (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td>
                    <div className="is-grouped">
                      <div className="control">
                        <Link
                          to={`/roles/${role.id}/edit`}
                          className="button is-small is-info"
                        >
                          Edit
                        </Link>
                        <Link
                          to={"/roles"}
                          className="button is-small is-danger"
                          onClick={() => this.delete(role.id)}
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}
