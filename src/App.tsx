import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./auth/dashboard";
import Users from "./auth/Users";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./userAuth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/users"} component={Users} />
        <Route path={"/login"} component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
