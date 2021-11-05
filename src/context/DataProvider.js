import React, { createContext, useState, useContext } from "react";
import { fetchData } from "../helpers/fetch";
import { AuthContext } from "../auth/AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [rows, setRows] = useState([]);
  const [openbd, setOpenbd] = useState(false);
  const [tipoID, setTipoID] = useState("V");
  const [openDialog, setOpenDialog] = useState(false);

  const {  setOpen, setMsn } = useContext(
    AuthContext
  );
  const fetchInfo = async (tipoDocu, proveedor, ci) => {
    console.log(tipoDocu);
    setOpenbd(true);
    const codProveedor = await fetchData("/ObtieneCodProv", {
      cProveedor: proveedor,
    });
    const respAsegurabilidad = await fetchData("/ConsultaAsegurabilidad", {
      cCodProv: codProveedor.data[0].CODPROV,
      cTipoId: tipoDocu,
      nNumId: parseInt(ci),
      cDvId: tipoDocu == "M" ? null: "0",//"0",
    });

    const arrayTabla = await respAsegurabilidad.data.Asegurados_cur.map(
      (asegurado) => {
        return {
          NOMASEG: asegurado.NOMASEG,
          CEDULA_ASEGURADO: asegurado.CEDULA_ASEGURADO,
          TOMADOR: asegurado.TOMADOR,
          DESCPARENTESCO:asegurado.DESCPARENTESCO,
          COBERTURAS: respAsegurabilidad.data.Aseg_coberturas_cur.filter(
            (cobertura) =>
              cobertura.NUMCERT === asegurado.NUMCERT &&
              cobertura.CEDULA_ASEGURADO === asegurado.CEDULA_ASEGURADO &&
              cobertura.DVIDASEG === asegurado.DVIDASEG
          ),
        };
      }
    );
    
    await setRows(arrayTabla);
   
    setOpenbd(false);
  };

  return (
    <DataContext.Provider
      value={{
        rows,
        fetchInfo,
        setRows,
        setOpenbd,
        openbd,
        setOpenDialog,
        openDialog,
        setTipoID,
        tipoID,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
