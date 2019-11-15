import React from "react";
import Button from "@material-ui/core/Button";
import "./team.css";
// import "../../../App.css";

function Team() {
  return (
    <div className="team-body">
      <center>
        <h1 className="team-header">OUR TEAM</h1>
        <center>
          <div id="ourTeam" style={{ paddingTop: "3%" }}>
            <img
              src="/team.jpg"
              style={{ borderRadius: "20" }}
              width="78%"
              alt="Team members of Spider'18"
              className="team-image"
            />
            <br />
            <br />
            <a href="/members">
              <Button variant="contained" color="primary">
                View all Members
              </Button>
            </a>
          </div>
        </center>
      </center>
    </div>
  );
}

export default Team;
