import React, { Component } from "react";
import "./App.css";
import d3Img from "./images/tmpD3Still.png";
import { Redirect } from "react-router";

class App extends Component {
  state = {
    redirect: false
  };
  getStarted = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/uploadPhotoPage" />;
    }
    return (
      <div className="App">
        <img src={d3Img} className="d3Still" />

        <div className="landingText">
          <p>Hello!</p>
          <p>Let's design your home.</p>
          <p>Please upload a photo of a room</p>

        </div>
        <div className="buttonContainer">
          <button className="buttonGetStarted" onClick={this.getStarted}>
            Get Started
          </button>

        </div>

      </div>
    );
  }
}

export default App;
