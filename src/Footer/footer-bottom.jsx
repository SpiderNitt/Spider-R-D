import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  palette: {
    primary: {
      main: "#393855"
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  onhover: {
    boxshadow: "0px 0px 2px 1px #000000"
  }
}));

export default function FooterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0D1329" }}>
        <Toolbar>
          <Typography variant="center" className={classes.title}>
            <b style={{ padding: 20 }}>
              Weaved with &#128376; by{" "}
              <a
                href="https://spider.nitt.edu"
                style={{ textDecoration: "none", color: "white" }}
              >
                Spider
              </a>
            </b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
