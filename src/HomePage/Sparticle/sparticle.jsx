import React, { Component } from "react";
import "./sparticle.css";

class Sparticle extends Component {
  componentDidMount() {
    console.log("Going to load");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/indScript.js";
    script.async = true;
    this.instance.appendChild(script);
    document.body.appendChild(script);
    console.log("Loaded");
  }

  render() {
    return (
      <div id="canvas_container" style={{width:"100%",height:"600px"}}>
        <canvas
          id="c"
          ref={el => {
            this.instance = el;
          }}
        />

        <img className="ima1" src="images/SpiderLogo.png" alt="spiderlogo-main" />
         <br />
         <img className="ima2" src="images/navlogo.png" alt="spiderlogo-2" />
      </div>
    );
  }
}

export default Sparticle;
