import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  const location = useLocation();

  if (!isAllowed) {
    // pass the current location in state so login can redirect back
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
