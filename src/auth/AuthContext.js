import React, { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({ Cod_User: "", Contrasena: "" });
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  const [msn, setMsn] = React.useState("");
  const [codProv, setCodProv] = React.useState(sessionStorage.getItem("PROVEEDOR"));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
      //  "https://segurospiramide.com/asg-api/login",
      "https://emergencia24horas.segurospiramide.com/node/express/servicios/apiFidens/autenticarUser",
        user
      );
     
      await sessionStorage.setItem("DATA_FIDENS", JSON.stringify(res.data));
      await sessionStorage.setItem("AUTH", JSON.stringify(true));
       await setCodProv(res.data.Valores_Usuarios[0].CODIGO_USUARIO)
       await setAuth(true);
      await sessionStorage.setItem("PROVEEDOR",res.data.Valores_Usuarios[0].CODIGO_USUARIO)
    } catch (error) {
      if (error.response) {
        if (error.response.status == 400) {
          setOpen(true);
          setMsn("Usuario o Contraseña incorrecta");
        } else {
          console.log(error);
        }
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ msn, onSubmit, user, setUser, auth, setAuth, open, setOpen ,setMsn,codProv}}
    >
      {children}
    </AuthContext.Provider>
  );
};
