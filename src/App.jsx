import React from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
