import React, { Component } from "react";
import Profile from "../assets/profile-pic.jpg";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="p-5">About Me</h1>
        <div className="d-flex">
          <img className="profile_image" src={Profile} />
          <p className="px-5 d-flex text-left align-items-center">
            My name is Meghan Sun and am a rising 3rd year student at the
            University of North Carolina at Chapel Hill. I'm majoring in
            Computer Science and minoring in Business Adminstration. I'm
            passionate about the impact and good technology can bring to our
            communities and am excited to continue to learn more about how I can
            contribute. I have expereince with Java, JavaScript (React, Node,
            Express), TypeScript, Python, HTML, and CSS.
            <br />
          </p>
        </div>
      </div>
    );
  }
}
