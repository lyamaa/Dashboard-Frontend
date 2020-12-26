import Wrapper from "../components/wrapper";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./user.css";


import { User } from "../../classes/User";
import Paginator from "../components/paginator";
import Delete from "../components/Delete";

export default class Users extends Component {
  state = {
    users: [],
  };

  page = 1;
  last_page = 0
  componentDidMount = async () => {
    const response = await axios.get(`users?page=${this.page}`);
    this.setState({
      users: response.data.data,
    });
    this.last_page = response.data.meta.last_page
  };
  
  handlePageChange = async (page: number) => {
    this.page = page;

    await this.componentDidMount()
  }

  handleDelete = async (id: number) => {
        this.setState({
          users: this.state.users.filter((u: User) => u.id !== id)
        })
    
  }
  render() {
    return (
      <Wrapper>
        {/* BUTTON SECTION */}
        <div className="field is-grouped">
          <div className="control">
            <Link to={"/users/create"} className="button">
              User Create
            </Link>
          </div>
        </div>
        {/* TABLE SECTION */}
        <table className="table is-bordered is-striped is-fullwidth">
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
                <tr className="is-selected">
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className="is-grouped">
                      <div className="control">
                        <Link to={`/users/${user.id}/edit`} className="button is-small is-info" >
                          Edit
                        </Link>
                        
                        <Delete id={user.id} endpoint={'user'} handleDelete={this.handleDelete} />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* END OF TABLE SECTION */}

        <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange} />
      </Wrapper>
    );
  }
}
