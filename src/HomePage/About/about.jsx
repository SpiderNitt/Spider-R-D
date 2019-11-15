import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div style={{ background: "#EFEFEF", paddingBottom: "3%" }}>
        <h1 className="about-header">ABOUT US</h1>
        <b>
          <p className="about-content">
            Spider, the Research and Development Club of NIT Trichy is a group
            of people enthusiastic about technology and innovation. We ideate
            and pursue projects that are relevant to today's industry in fields
            like Artificial Intelligence and Machine Learning, Electronics,
            Computer Technology along with App and Web Development. Spread
            across 4 domains: Algorithms, Tronix, App Development and Web
            Development, we as a team look forward to Ideate and Innovate to
            take Research and Development projects to greater heights.
          </p>
        </b>
      </div>
    );
  }
}

export default About;
