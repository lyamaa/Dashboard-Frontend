import React, { Component } from "react";
import Nav from "./nav";
import Menu from "./menu";

export default class wrapper extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="wrapper">
          <div className="columns">
            <Menu />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {this.props.children}
            </main>
          </div>
        </div>
      </>
    );
  }
}
