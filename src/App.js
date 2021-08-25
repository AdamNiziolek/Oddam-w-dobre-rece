import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Logoutn from "./components/Logoutn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/oddaj-rzeczy" component={Form}/>
        <Route path="/logowanie" component={Login}/>
        <Route path="/rejestracja" component={Register}/>
        <Route path="/wylogowano" component={Logoutn}/>        
      </Switch>
    </Router>
  );
}

export default App;
