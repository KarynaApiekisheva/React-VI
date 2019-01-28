import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    )
  }
}

export default App