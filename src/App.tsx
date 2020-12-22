import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './main.scss'

import Dashboard from "./auth/dashboard/dashboard";
import Users from "./auth/user/Users";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./userAuth/Login";
import Register from "./userAuth/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/users"} component={Users} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
