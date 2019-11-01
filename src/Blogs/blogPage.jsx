import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Blog from "./blogCard";

class blogPage extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100vw", maxHeight: "100vh", padding: 0, margin: "auto" }}>
        <div
          style={{
            background: "#e2e2e2",
            // width: "100vw"
          }}
        >
          <Blog />
        </div>
      </div>
    );
  }
}

export default blogPage;
