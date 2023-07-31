import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ component }) => {
  const { myUser } = useUserContext();
  return myUser ? component : <Navigate to={'/'} />;
};
export default PrivateRoute;
