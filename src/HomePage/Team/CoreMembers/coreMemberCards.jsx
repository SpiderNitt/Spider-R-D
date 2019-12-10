import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
import core from "./coreMembersData.json";
import "./coreStyles.css";

export default function CoreMembers() {
  return (
    <div id="core-main">
      <center>
        <h1 id="core-header">
          CORE MEMBERS
        </h1>
          <div id="heads">
            <Grid
              container
              spacing={6}
              alignItems="center"
              justify="center"
              className="coreGrid"
            >
              {core.map(members => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} align="center" key={members.id} >
                  <Card className="coreCard">

                      <img
                        className="coreImage"
                        src={members.Photo}
                        alt={members.Name}
                      />
                      <CardContent>
                        <Typography
                          variant="h4"
                          component="h2"
                          className="coreName"
                        ><b>
                          {members.Name}</b>
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h2"
                          className="coreRole"
                        >
                          {members.Role}
                        </Typography>
                        <a href={members.LinkedIn}>
                          <IconButton className="coreIcon">
                            <LinkedInIcon
                              fontSize="large"
                              style={{ fill: "#000000" }}
                            />
                          </IconButton>
                        </a>
                        <a href={members.Github}>
                          <IconButton className="coreIcon">
                            <GitHubIcon
                              fontSize="large"
                              style={{ fill: "#000000" }}
                            />
                          </IconButton>
                        </a>
                        <a href={members.Website}>
                          <IconButton className="coreIcon">
                            <LanguageIcon
                              fontSize="large"
                              style={{ fill: "#000000" }}
                            />
                          </IconButton>
                        </a>
                        <br />
                        {members.Contact ? (
                          <IconButton className="coreIcon">
                            <PhoneIcon
                              fontSize="small"
                              style={{ fill: "#000000" }}
                            />
                            <Typography style={{ color: "#000000" }}>
                              {members.Contact}
                            </Typography>
                          </IconButton>
                        ) : (
                          ""
                        )}
                      </CardContent>
                  </Card>

                </Grid>
              ))}
            </Grid>
          </div>

      </center>
    </div>
  );
}
