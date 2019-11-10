import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Blog from "./blogCard";
import NavBar from '../Navbar/nav';

class BlogPage extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <NavBar />
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

export default BlogPage;
