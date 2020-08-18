import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App"
      class App extends Components {
  render() {
    return (
        <Router>
          <div>
            <h2> Routing in React</h2>
            <nav className="navbar-light bg-light">
              <ul classNames="navbar-nav mr-auto">
                <li><link to={'/'}
                  className="nav-link">Home</link></li>
                <li><link to={'/contact'}
                  className="nav-link">Contact</link></li>
                <li><link to={'/about'}
                  className="nav-link">About</link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path="/Welcome/:name" component={welcome} />
              <Route path='/contact' component={Contact} />
              <Route path='/clock' component={Clock} />
            </Switch>
          </div>
        </Router>
      );
}
}

export default App;
