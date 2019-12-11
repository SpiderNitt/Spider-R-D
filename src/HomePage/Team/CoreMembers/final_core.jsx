import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import core from "./coreMembersData.json";
import "./corecard.css";

export default function CoreMembers() {
  return (
    <div id="core-main">
      <center>
        <h1 className="core-header">Core Members</h1>
        <br />
        <div>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justify="center"
            className="coreGrid"
<<<<<<< HEAD
=======
            style={{padding: "40px"}}
>>>>>>> a17dd28f8dbce64dbf5b44ac98a1d12ac86609db
          >
            {core.map(members => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                align="center"
                key={members.id}
              >
                <Card style={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={members.Role}
                      height="270"
                      image={members.Photo}
                      title={members.Role}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {members.Name}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {members.Role}
                      </Typography>
                    </CardContent>

                    <CardActions
                      style={{ marginLeft: "20%", marginTop: "-5%" }}
                    >
                      <a href={members.Website}>
                        <IconButton aria-label="personalSite">
                          <LanguageIcon />
                        </IconButton>
                      </a>
                      <a href={members.LinkedIn}>
                        <IconButton aria-label="linkedIn">
                          <LinkedInIcon />
                        </IconButton>
                      </a>
                      <a href={members.Github}>
                        <IconButton aria-label="gitHubLink">
                          <GitHubIcon />
                        </IconButton>
                      </a>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </center>
    </div>
  );
}
