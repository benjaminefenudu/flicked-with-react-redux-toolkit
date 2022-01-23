import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToLogin = () => {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
};

export default RedirectToLogin;
