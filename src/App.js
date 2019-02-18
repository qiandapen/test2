import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from "./store/index";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Entry from "./component/entry/entry";
import Login from "./component/login/login";
import './common/css/base.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
              <Router>
                  <div>
                      <Switch>
                          <Route path="/entry" component={Entry}/>
                          <Route path="/login" component={Login}/>
                          <Redirect path="/" to="/entry"/>
                      </Switch>
                  </div>
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
