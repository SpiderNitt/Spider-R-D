import React from "react";
import "./inductions.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "./tabs";

const myStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "raleway",
    fontWeight: "bold",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7, 0, 7),
  },
}));

function App() {
  const classes = myStyles();
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        className={classes.root}
      >
        Got any Questions?
      </Typography>
      <div className="App">
        <h2 className="ind-content"> Check if we got them answered!</h2>
        <center>
          <div className="taby">
            <Tab />
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
