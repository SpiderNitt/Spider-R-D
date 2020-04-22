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
  follow: {
    fontFamily: "raleway",
    fontWeight: "bold",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
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
        Spider Orientation Program
      </Typography>
      {/* <Typography
        component="h3"
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.follow}
      >
        SOP is live! Click the link to download the app now. <br />
        <br></br>
        <Button variant="contained" color="primary" href="#">
          Register for SOP
        </Button>
      </Typography> */}
      {console.log("SOP App on the way. Stay tuned!")}
      <div className="App">
        <h2 className="ind-content"> Got any Questions?</h2>
        <h3 className="ind-content"> Check if we got them answered!</h3>
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
