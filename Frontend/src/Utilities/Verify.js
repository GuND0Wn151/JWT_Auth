import React from "react";
import { Navigate } from "react-router-dom";
function Verify({ token, children }) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Verify;
