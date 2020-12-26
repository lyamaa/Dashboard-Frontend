import axios from "axios";
import React, { Component } from "react";

export default class Delete extends Component<{
  id: number;
  endpoint: string;
  handleDelete: any;
}> {
  delete = async () => {
    if (window.confirm("Are you sure you want to delete selected product?")) {
      await axios.delete(`${this.props.endpoint}/${this.props.id}`);

      this.props.handleDelete(this.props.id);
    }
  };

  render() {
    return (
      <a className="button is-small is-danger" onClick={() => this.delete()}>
        Delete
      </a>
    );
  }
}
