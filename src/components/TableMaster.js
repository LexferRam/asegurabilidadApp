import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { RowTblMaster } from "./RowTblMaster";
import { DataContext } from "../context/DataProvider";

export const TableMaster = () => {
  const { rows } = useContext(DataContext);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ backgroundColor: "#3f51b5" }}>
          <TableRow>
            <TableCell />
            <TableCell style={{ color: "white" }} align="center">
              CEDULA
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              NOMBRE Y APELLIDO
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              CONTRATATANTE
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              PARENTESCO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, key) => (
            <RowTblMaster key={key} row={row} />
            // console.log(row)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
