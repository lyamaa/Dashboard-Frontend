import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./auth/components/nav";
import Menu from "./auth/components/menu";
import Dashboard from "./auth/dashboard";
import Users from "./auth/Users"
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="wrapper">
    <div className="columns">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/users'} component={Users} />
            </BrowserRouter>
           
          </main>
        </div>
     
  </div>
    </div>
  );
}

export default App;
