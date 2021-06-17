import React, { useEffect, useContext } from "react";
import { IconButton, TableCell } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { TableAnidada } from "./TableAnidada";
import { DataContext } from "../context/DataProvider";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

export const RowTblMaster = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { rows } = useContext(DataContext);
  const classes = useRowStyles();

  useEffect(() => {
    setOpen(false);
  }, [rows]);

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.CEDULA_ASEGURADO}</TableCell>
        <TableCell align="center">{row.NOMASEG}</TableCell>
        <TableCell align="center">{row.TOMADOR}</TableCell>
        <TableCell align="center">{row.DESCPARENTESCO}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <TableAnidada coberturas={row.COBERTURAS} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
