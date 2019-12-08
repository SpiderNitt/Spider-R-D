import React, { Component } from "react";
import "./sparticle.css";

class Sparticle extends Component {
  componentDidMount() {
    console.log("Going to load");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "indScript.js";
    script.async = true;
    this.instance.appendChild(script);
    document.body.appendChild(script);
    console.log("Loaded");
  }

  render() {
    return (
      <div id="canvas_container">
        <canvas
          id="c"
          ref={el => {
            this.instance = el;
          }}
        />
        {/* <center> */}
        <img className="ima1" src="SpiderLogo.png" alt="spiderlogo-main" />
        {/* <br /> */}
        {/* <img className="ima2" src="navlogo.png" alt="spiderlogo-2" /> */}
        {/* </center> */}
      </div>
    );
  }
}

export default Sparticle;
