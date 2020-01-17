import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { medium } from "react-icons-kit/fa/medium";
import { facebookOfficial } from "react-icons-kit/fa/facebookOfficial";

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
    textAlign: "center",
    fontSize: 19,
    fontFamily: "Raleway"
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
        <Toolbar style={{ paddingBottom: 0 }}>
          <Typography className={classes.title}>
            <b style={{ paddingTop: 20 }}>
              Weaved with 🕸 by{" "}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Spider
              </Link>
            </b>
          </Typography>
        </Toolbar>
        <Toolbar style={{ justifyContent: "center", paddingBottom: 10 }}>
          <div style={{ width: 23, height: 23, paddingRight: "10px" }}>
            <a
              href="https://medium.com/spidernitt"
              style={{ textDecoration: "None", color: "inherit" }}
            >
              <Icon icon={medium} size={"100%"}></Icon>
            </a>
          </div>
          <div style={{ width: 23, height: 23, paddingLeft: "10px" }}>
            <a
              href="https://www.facebook.com/SpiderNitt/"
              style={{ textDecoration: "None", color: "inherit" }}
            >
              <Icon icon={facebookOfficial} size={"100%"}></Icon>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
