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
          <p className="uploadPhotoPageText">
            Upload a Photo and
          </p>
          <p className="uploadPhotoPageText">
            add your Zip Code
          </p>
          <input
            onChange={e => this._handleImageChange(e)}
            className="upload"
            type="file"
            text="Upload Photo"
            name="file"
            id="file"
          />
          <input className="zipCode" value="Zip Code" type="text" />
          <div />
        </div>
        <h3>No Photo? Take our Taste Test!</h3>
      </div>
    );
  }
}

export default UploadPhotoPage;
