import React, { Component } from "react";

import store from './redux'
import { Provider } from 'react-redux'

import './style.css'
import Home from './pages/home'
import Recado from './pages/Recado'

import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Recado} />
        </Router>
      </Provider>
    );
  }
}

export default App;
