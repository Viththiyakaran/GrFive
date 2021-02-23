import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing_page/main';
import Login from './components/login/login';
import Formtest from './components/login/form';
import Quiz from './components/quiz/main'
import { Route,BrowserRouter as Router, Switch, useHistory} from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
           <Route path="/" exact component={LandingPage}/> 
           <Route path="/login" exact component={Login}/> 
           <Route path="/form" exact component={Formtest }/> 
           <Route path="/quiz" exact component={Quiz}/> 
        </Switch>
      </Router>
    );
  }
}

export default App;




