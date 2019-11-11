import React, { Component } from "react";
import Blog from "./blogCard";
import FooterBar from "../Footer/footer-bottom";

class BlogPage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            background: "#e2e2e2"
            // width: "100vw"
          }}
        >
          <Blog />
        </div>
        <FooterBar />
      </div>
    );
  }
}

export default BlogPage;
