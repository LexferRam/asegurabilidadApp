import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import { DataContext } from "../context/DataProvider";
import {Link} from "react-router-dom"
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: 14,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const { auth, setAuth,codProv } = useContext(AuthContext);
  const { setRows,} = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    sessionStorage.clear();
     setAuth(false);
     setRows([])
  };

  useEffect(() => {
    if (!auth) {
      setAuth(false);
    }
  }, [auth]);

  return (
    <div>
      <AppBar position="static" color="default" style={{margin:"0px !important"}}>
        <Toolbar style={{display:"flex", justifyContent:"flex-end"}}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <b>USUARIO: </b>
          <Typography variant="h7" className={classes.title}>
            {sessionStorage.getItem("PROVEEDOR")}
          </Typography>
          <div>
            {/* <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
          </Menu> */}
          <Button component={Link} to="/auth" onClick={handleClose}>Salir</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MenuAppBar);
