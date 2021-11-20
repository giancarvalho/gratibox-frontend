/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function PrivateRoute({ element: Element, path, ...rest }) {
  const { user } = useContext(UserContext);

  return (
    <Route exact path={path}>
      {user.token ? <Element {...rest} /> : <Redirect to="/login" />}
    </Route>
  );
}
