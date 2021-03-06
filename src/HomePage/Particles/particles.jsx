import React, { Component } from "react";
import "./particles.css";

class Sparticle extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/indScript.js";
    script.async = true;
    this.instance.appendChild(script);
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="canvas_container" style={{ width: "100%" }}>
        <canvas
          id="c"
          ref={(el) => {
            this.instance = el;
          }}
        />

        <img
          className="ima1"
          src="images/SpiderLogo.png"
          alt="spiderlogo-main"
        />
        <br />
      </div>
    );
  }
}

export default Sparticle;
