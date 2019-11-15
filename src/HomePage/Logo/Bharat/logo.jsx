import React, { Component } from "react";

class LogoA extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#0E122B" }}>
        <br />
        <br />

        <center>
          <video
            height="800vh"
            width="100%"
            style={{ marginTop: "-50px" }}
            autoplay = "autoplay"
            loop
          >
            <source src="loop.mp4" type="video/mp4" />
            <source src="loop.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </center>
      </div>
    );
  }
}

export default LogoA;
