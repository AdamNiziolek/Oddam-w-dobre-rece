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
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/logowanie" component={Login}/>
          <Route path="/rejestracja" component={Registration}/>
          <Route path="/wylogowano" component={Logout}/>     
          <PrivateRoute path="/oddaj-rzeczy" component={Form}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
