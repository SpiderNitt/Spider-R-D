import React,{ Component } from "react";
import "./sparticle.css";
import "./indScript.js";

class Sparticle extends Component{
  render() {
    return (
      <div>
				<canvas id="c"/>
				    <center>
				        <img className="ima1" src="SpiderLogo.png"  /><br />
				        <img className="ima2" src="navLogo.png"  />
				    </center>
			</div>
    );
  }
}

export default Sparticle;
