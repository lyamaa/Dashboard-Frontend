import Wrapper from "../components/wrapper";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import "./user.css";

import { User } from "../../classes/User";

export default class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount = async () => {
    const response = await axios.get("users");
    this.setState({
      users: response.data.data,
    });
  };
  render() {
    return (
      <Wrapper>
        <div className="field is-grouped">
          <div className="control">
            <Link to={'/users/create'} className="button">Anchor</Link>
          </div>
        </div>
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
                <abbr title="Played">Email</abbr>
              </th>
              <th>
                <abbr title="Won">Role</abbr>
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
                <abbr title="Played">Email</abbr>
              </th>
              <th>
                <abbr title="Won">Role</abbr>
              </th>
              <th>
                <abbr title="Drawn">Action</abbr>
              </th>
            </tr>
          </tfoot>
          <tbody>
            {this.state.users.map((user: User) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className="is-grouped">
                      <div className="control">
                        <Link to={"/users"} className="button is-small is-info">Edit</Link>
                        <Link to={"/users"} className="button is-small is-danger">Delete</Link>
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
