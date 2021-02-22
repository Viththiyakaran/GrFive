import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing_page/main';
import Login from './components/login/login';
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
           <Route path="/" exact component={LandingPage}/> 
           <Route path="/login" exact component={Login}/> 
        </Switch>
      </Router>
    );
  }
}

export default App;




