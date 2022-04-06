import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/oddaj-rzeczy" component={Form}/>
        <Route path="/logowanie" component={Login}/>
        <Route path="/rejestracja" component={Registration}/>
        <Route path="/wylogowano" component={Logout}/>        
      </Switch>
    </Router>
  );
}

export default App;
