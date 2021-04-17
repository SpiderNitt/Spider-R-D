import React from "react";
import "./inductions.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "./tabs";
import Button from "@material-ui/core/Button";

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
        Spider Week 2021
      </Typography>
      <Typography
        component="h3"
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.follow}
      >
        Tired of being locked at your home and attending eternal live classes? Don't worry, we at Spider have the perfect break designed for you all. Spider Week is a brand new event consisting of amazing Workshops, exciting competitions and a lot more. It is a fantastic opportunity for everyone to learn and showcase their skills. Join us for a captivating week with amazing workshops, thrilling events, lots of interesting prizes to escape your boredom. <br />
        <br></br>
        List of events:
        <br></br>
        <br></br>
        <div>Spider UNOverse</div>
        <div>casCADe</div>
        <div>Spideysense</div>
        <div>Capture the Flag</div>
        <div>The World is your Canvas</div>
        <div>Clash of Code</div>
        <div>Spider Web Development Workshop</div>
        <div>Algos ICY Cup</div>
        <div>Blind Coding</div>
        <div>Code Connoisseurs</div>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" href="#">
          Register for Spider Week
        </Button>
      </Typography>
      {console.log("Spider Week 2021")}
      {/* <div className="App">
        <h2 className="ind-content"> Got any Questions?</h2>
        <h3 className="ind-content"> Check if we got them answered!</h3>
        <center>
          <div className="taby">
            <Tab />
          </div>
        </center>
    </div> */}
    </div>
  );
}

export default App;
