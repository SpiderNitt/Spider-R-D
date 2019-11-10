import React from "react";
import FooterBar from "./footer-bottom";
import SimpleMap from "./location-maps";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-main" >
        <center>
          <h1 className="footer-heading" >Find Us</h1>
        </center>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <SimpleMap />
        </Grid>
        <Grid item xs={12} sm={6}>
          <br />
          <Typography align="center" variant="h5" gutterBottom>
            <b>Primary Office</b>
            <br />
          </Typography>
          <Typography align="center" variant="h6" gutterBottom>
            Spider R&D Lab,
            <br /> Ground floor, Old SAC,
            <br /> (Opposite to CCD), NIT Tiruchirappalli.
            <br />
            <br />
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
            <b>Secondary Office</b>
            <br />
          </Typography>
          <Typography align="center" variant="h6" gutterBottom>
            Spider R&D Lab,
            <br /> Second floor, CSE Department,
            <br />
            NIT Tiruchirappalli.
            <br />
            <br />
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
            <b>Point of Contacts</b>
            <br />
          </Typography>
          <Typography align="center" variant="h6" gutterBottom>
            Shubham Saha
            <br /> President, Spider
            <br />
            Mobile :9629916025
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <FooterBar />
    </div>
  );
}

export default Footer;
