import React, { Component } from "react";
import Nav from "./nav";
import Menu from "./menu";
import axios from 'axios'
import { Redirect } from "react-router-dom";

export default class wrapper extends Component {
  state = {
    redirect: false
  }
  componentDidMount = async() => {
    try {
        await axios.get('user')

    } catch (error) {
      this.setState({
        redirect: true
      })
    }
  }
  render() {
    if(this.state.redirect){
      return <Redirect to='/login'/>
    }
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
