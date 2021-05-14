import React from "react";
import {
  TableRow,
  TableCell,
  Table,
  TableHead,
  TableBody,
} from "@material-ui/core";

export const TableAnidada = ({ coberturas }) => {
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow
          style={{
            backgroundColor: "#dcdee6",
            color: "#2a284f !important",
          }}
        >
          <TableCell>ASISTENCIAS DISPONIBLES PARA EL ASEGURADO</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {coberturas.map((cobertura, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">
              {cobertura.DESCCOBERT}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
