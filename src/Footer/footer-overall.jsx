import React from "react";
import BottomFooter from "./footer-bottom";
import MapComponent from "./footer-maps";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./footer-overall.css";

function Footer() {
  return (
    <div id="Footer-Contacts">
      <div className="footer-main">
        <center>
          <br />
          <h1 className="footer-header">Find Us</h1>
        </center>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} className="map-grid">
          <MapComponent />
        </Grid>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <Typography align="center" variant="h6" gutterBottom>
            <b>PRIMARY OFFICE</b>
            <br />
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Spider R&D Lab,
            <br /> Ground floor, Old SAC,
            <br /> (Opposite to CCD), NIT Tiruchirappalli.
            <br />
            <br />
          </Typography>
          <Typography align="center" variant="h6" gutterBottom>
            <b>Secondary Office</b>
            <br />
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Spider R&D Lab,
            <br /> Second floor, CSE Department,
            <br />
            NIT Tiruchirappalli.
            <br />
            <br />
          </Typography>
          <Typography align="center" variant="h6" gutterBottom>
            <b>Points of Contact</b>
            <br />
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Ankur Sinha
            <br /> Head, Spider
            <br />
            Mobile : 8107838949
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Arunesh Saddish
            <br /> Head, Spider
            <br />
            Mobile : 9150663632
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            Rishabh Taparia
            <br /> Treasurer, Spider
            <br />
            Mobile : 9930032143
          </Typography>
          <Typography align="center" variant="body1" gutterBottom>
            G Arvindaksha
            <br /> Treasurer, Spider
            <br />
            Mobile : 9710333251
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <BottomFooter />
    </div>
  );
}

export default Footer;
