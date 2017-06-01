import React, { Component } from "react";
import "./uploadPhotoPage.css";
import defaultImag from "./images/photoUploadDefault.png";
import "./uploadPhotoPage.css";

class UploadPhotoPage extends Component {
  state = {
    img: "default"
  };
  render() {
    const image = this.state.img === "default"
      ? <img className="img" src={defaultImag} />
      : <p>la</p>;
    return (
      <div className="main">
        <div className="container">
          {image}
        </div>
        <div className="container">
          <p>
            Upload a Photo and
          </p>
          <p>
            add your Zip Code
          </p>
          <input className="upload" type="submit" text="Upload Photo" />
          <input className="zipCode" value="Zip Code" type="text" />
          <div />
        </div>

      </div>
    );
  }
}

export default UploadPhotoPage;
