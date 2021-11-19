import React from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Plans from './pages/plans/Plans';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/cadastro" exact>
          <SignUp />
        </Route>
        <Route path="/planos" exact>
          <Plans />
        </Route>
      </Switch>
    </Router>
  );
}
