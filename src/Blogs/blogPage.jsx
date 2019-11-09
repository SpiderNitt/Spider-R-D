import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Blog from "./blogCard";

class BlogPage extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            background: "#e2e2e2",
            maxWidth: "100vw"
          }}
        >
          <Blog />
        </div>
      </div>
    );
  }
}

export default BlogPage;
