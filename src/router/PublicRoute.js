import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};
