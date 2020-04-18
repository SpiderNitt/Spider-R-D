import React from "react";
import "./inductions.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "./tabs";
import Button from '@material-ui/core/Button';



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
      <Typography
        component="h3"
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.follow}
      >
        Follow the link below to Register for the program! <br/><br></br>
        <Button variant="contained" color="primary" href="https://spider.nitt.edu/orientation/#">
        Register for SOP
        </Button>
      </Typography>
      
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
