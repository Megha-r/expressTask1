import React, { Component } from 'react';

import Demo from './pages/Demo'
import Home from './pages/Home'
import User from './pages/User'
import Product from './pages/Product'
import PrivateRoute from './pages/PrivateRoute'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/users" component={User} />
            <Route path="/products" component={Product} />
            <Route path="/demo" component={Demo} />
            <Route path="/test/:id" render={({match: {params}}) => {
              console.log('Testing', params)
              return <h1>TESTING</h1>
            }} />
            <Route path="/users/:username" component={User} />
            <PrivateRoute path="/admin" component={() => (<div> ADMIN </div>)} />
            <Route render={() => <div>Page Not Found</div>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;