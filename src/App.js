import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.less';
import {Route} from "react-router";
import Home from "./components/Home";
import Todo from "./components/Todo";

class App extends Component{
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/todos/:id' component={Todo} />
      </Router>
    );
  }
}

export default App;