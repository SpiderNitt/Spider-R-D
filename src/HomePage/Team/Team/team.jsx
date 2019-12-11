import React from "react";
import Button from "@material-ui/core/Button";
import "./team.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="team-body">
      <center>
        <h1 className="team-header">Our Team</h1>
        <center>
          <div id="ourTeam" style={{ paddingTop: "3%" }}>
            <img
              src="images/team.jpg"
              style={{ borderRadius: "20" }}
              width="78%"
              alt="Team members of Spider'18"
              className="team-image"
            />
            <br />
            <br />
            <Link to="/members" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                size="large"
                style={{ background: "#0E122B", color: "white" }}
              >
                View all Members
              </Button>
            </Link>
          </div>
        </center>
      </center>
    </div>
  );
}

export default Team;
