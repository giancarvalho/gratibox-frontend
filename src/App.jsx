import React, { useCallback, useState } from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/others/Alert';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [alert, setAlert] = useState({
    status: false,
    message: '',
    error: false,
  });

  const sendAlert = useCallback((details) => {
    setAlert({ status: true, ...details });
  }, []);

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
          <SignUp sendAlert={sendAlert} />
        </Route>
      </Switch>
      <Alert alert={alert} setAlert={setAlert} />
    </Router>
  );
}

export default App;
