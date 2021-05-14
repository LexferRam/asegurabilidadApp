import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/LoginPage";
// import { AuthContext } from "../auth/AuthContext";

// import { ChatPage } from "../pages/ChatPage";
import TblMasterPage from "../pages/TblMasterPage";
// import { AuthRouter } from "./AuthRouter";
// import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth } = useContext(AuthContext);

  //console para ver el tracking de la verificacion del token y la autenticancion
  //console.log(auth)

  //   useEffect(() => {
  //     //la fn verificaToken() se encargara de renovar el token llamando al api /renew
  //     //(el cual renueva el token y retorna la info del user)
  //     verificaToken();
  //   }, [verificaToken]);

  //si no esta autenticado checking siempre va a ser true
  //   if (auth.checking) {
  //     return <h1>Espere por favor</h1>;
  //   }

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <Route path="/auth" component={LoginPage} />
          {/* <PublicRoute
            isAuthenticated={sessionStorage.getItem("AUTH")}
            path="/auth"
            component={LoginPage}
          /> */}
          {/* <PrivateRoute
            exact
            isAuthenticated={sessionStorage.getItem("AUTH")}
            path="/"
            component={TblMasterPage}
          /> */}
          <Route exact path="/" component={TblMasterPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
