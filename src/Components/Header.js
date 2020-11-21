import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "200px",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),

    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static"
    className={classes.header}
    color='secondary'>
      <Toolbar>
        <Typography variant="h3">Pedra Puntos</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
