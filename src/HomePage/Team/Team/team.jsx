import React from "react";
import Button from "@material-ui/core/Button";

import "../../../App.css";

function Team() {
  return (
    <div style={{ paddingBottom: "3%", backgroundColor: "#ffffff" }}>
      <center>
        <h1 style={{ fontSize: "2em", paddingTop: "80px", color: "black" }}>
          Our Team
        </h1>
        <center>
          <div id="ourTeam" style={{ paddingTop: "3%" }}>
            <img
              src={require("./team.jpg")}
              style={{ borderRadius: "20" }}
              width="75% "
            />
            <br />
            <br />
            <Button variant="contained" color="primary">
              View all Members
            </Button>
          </div>
        </center>
      </center>
    </div>
  );
}

export default Team;
