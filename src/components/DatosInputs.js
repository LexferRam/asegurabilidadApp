import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Divider, Grid, Paper } from "@material-ui/core";
import { DataContext } from "../context/DataProvider";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from '@material-ui/icons/Search';
import { AuthContext } from "../auth/AuthContext";
import imgPira from "../logoPira.svg";

const currencies = [
  {
    value: "V",
    label: "V",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "J",
    label: "J",
  },
  {
    value: "P",
    label: "P",
  },
];

export const DatosInputs = () => {
  const { fetchInfo, setTipoID, tipoID, rows } = useContext(DataContext);
  const [cedula, setCedula] = useState("");
  const {codProv} = useContext(
    AuthContext
  );

  const handleChange = (event) => {
    setTipoID(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 15 }}>
      <Grid container justify="flex-start" spacing={1}>
        <Grid xs item={12}>
        <img src={imgPira} style={{ width: 140, marginTop: 10 }} />
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ marginBottom: 15 }}>
            <Divider />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            value={tipoID}
            onChange={handleChange}
            helperText="Tipo de Identificación"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-number"
            helperText="Número de identificación"
            type="number"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="#outlined-buttons"
            onClick={() => {
              fetchInfo(tipoID,codProv, cedula);
            }} //10495356

            style={{
              height: "30px !important",
              borderRadius: 50,
              margin: "18px 0px 0px 20px",
              fontSize: 8
            }}
            startIcon={<SearchIcon />}

          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
