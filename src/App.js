import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import { DataProvider } from "./context/DataProvider";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <AppRouter />
        </DataProvider>
      </AuthProvider>,
    </>
  );
};