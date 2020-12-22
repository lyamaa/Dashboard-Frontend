import Wrapper from "../components/wrapper";
import React, { Component } from "react";
import axios from 'axios';

import {User} from "../../classes/User"

export default class Users extends Component {
   state = {
      users: []
   }
   componentDidMount = async () => {
      const response = await axios.get('users')
      this.setState({
         users: response.data.data
      })
   }
  render() {
    return (
      
        <Wrapper>
          <table className="table mt-5 ml-3">
  <thead>
    <tr>
    <th><abbr title="Position">#</abbr></th>
      <th><abbr title="Position">Name</abbr></th>
      <th><abbr title="Played">Email</abbr></th>
      <th><abbr title="Won">Role</abbr></th>
      <th><abbr title="Drawn">Action</abbr></th>
    </tr>
  </thead>
  <tfoot>
    <tr>
    <th><abbr title="Position">#</abbr></th>
    <th><abbr title="Position">Name</abbr></th>
      <th><abbr title="Played">Email</abbr></th>
      <th><abbr title="Won">Role</abbr></th>
      <th><abbr title="Drawn">Action</abbr></th>
    </tr>
  </tfoot>
  <tbody>
    {this.state.users.map((user: User) => {
       return (
         <tr>
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td></td>
         <td></td>
       </tr>
       )
    })}
    
  </tbody>
</table>
        </Wrapper>
    
    );
  }
}
