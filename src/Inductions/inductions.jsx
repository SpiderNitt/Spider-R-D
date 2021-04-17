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
    <div style={{padding: "1% 3%", backgroundColor: "#fff"}}>
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
        align="left"
        color="textPrimary"
        className={classes.follow}
      >
        Tired of being locked at your home and attending eternal live classes? Don't worry, we at Spider have the perfect break designed for you all. Spider Week is a brand new event consisting of amazing Workshops, exciting competitions and a lot more. It is a fantastic opportunity for everyone to learn and showcase their skills. Join us for a captivating week with amazing workshops, thrilling events, lots of interesting prizes to escape your boredom. <br />
        <br></br>
      </Typography>
      <Typography
        component="h3"
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.follow}
      >
        Register for each event using the links below:
        <br></br>
        <br></br>
        <div style={{color: "0E122B"}}>WEB DEV</div>
        <br/>
        <a href="https://forms.gle/GLyAAu686qN8LM95A" style={{textDecoration: "none", color: "#616161"}}>The World is your Canvas(.js)</a><br/>
        <a href="https://forms.gle/z1mvfvNd5oHCnFsE8" style={{textDecoration: "none", color: "#616161"}}>Trivia Quiz</a><br/>
        <a href="https://forms.gle/JwDGewMkhBpSVp9g7" style={{textDecoration: "none", color: "#616161"}}>Blind Coding</a><br/>
        <a href="https://forms.gle/Qpqy4QXp8H4SQaXx9" style={{textDecoration: "none", color: "#616161"}}>Spider Web Development Workshop</a><br/>
        <a href="https://forms.gle/kZBuu2BFsqFemNxd7" style={{textDecoration: "none", color: "#616161"}}>Capture the Flag</a><br/>
        <br/>
        <div style={{color: "0E122B"}}>ALGORITHMS</div>
        <br/>
        <a href="https://www.hackerrank.com/icy-cup21" style={{textDecoration: "none", color: "#616161"}}>Algos ICY Cup</a><br/>
        <br/>
        <div style={{color: "0E122B"}}>TRONIX</div>
        <br/>
        <a href="https://forms.gle/Z29mMLx9qfDoA29V9" style={{textDecoration: "none", color: "#616161"}}>Clash of Code</a><br/>
        <a href="https://forms.gle/Z29mMLx9qfDoA29V9" style={{textDecoration: "none", color: "#616161"}}>Spider UNOverse</a><br/>
        <a href="https://forms.gle/Z29mMLx9qfDoA29V9" style={{textDecoration: "none", color: "#616161"}}>casCADe</a><br/>
        <a href="https://forms.gle/Z29mMLx9qfDoA29V9" style={{textDecoration: "none", color: "#616161"}}>Spideysense</a><br/>
        <br/>
        <div style={{color: "0E122B"}}>APP DEV</div>
        <br/>
        <a href="https://forms.gle/YJBJGSkEd4GgHbvT8" style={{textDecoration: "none", color: "#616161"}}>Code Connoisseurs</a><br/>
        <br></br>
        Can't wait to you see you all!
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
