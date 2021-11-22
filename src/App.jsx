import React, { useCallback, useState } from 'react';
import './assets/css/reset.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Alert from './components/others/Alert';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Plans from './pages/plans/Plans';
import ScrollToTop from './hooks/ScrollToTop';
import PrivateRoute from './routes/PrivateRoute';
import PlanForm from './pages/planform/PlanForm';

function App() {
  const [user, setUser] = useState({});
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
      <ScrollToTop />
      <UserContext.Provider value={{ setUser, user }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login" exact>
            <SignIn sendAlert={sendAlert} />
          </Route>

          <Route path="/cadastro" exact>
            <SignUp sendAlert={sendAlert} />
          </Route>

          <PrivateRoute path="/planos" element={Plans} exact />
          <PrivateRoute
            path="/plano/:id"
            element={PlanForm}
            sendAlert={sendAlert}
            exact
          />
        </Switch>
      </UserContext.Provider>
      <Alert alert={alert} setAlert={setAlert} />
    </Router>
  );
}

export default App;
