import React, { useContext } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../context/DataProvider";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const { openbd } = useContext(DataContext);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={openbd}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
