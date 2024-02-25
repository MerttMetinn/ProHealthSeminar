import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/header" component={Header} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default App;
