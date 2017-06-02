import React, { Component } from "react";
import "./uploadPhotoPage.css";
import defaultImag from "./images/photoUploadDefault.png";
import "./uploadPhotoPage.css";

//we don't have a backend for this photo upload function yet
//so I put a fake button there for now.

class UploadPhotoPage extends Component {
  state = {
    img: "default",
    showPoppup: false
  };

  showPoppup = () => {
    this.setState({ showPoppup: true });
  };

  render() {
    const image = this.state.img === "default"
      ? <img className="img" src={defaultImag} />
      : <p>la</p>;
    const popup = this.state.showPoppup
      ? <div>
          <div className="popupwrap">
            <div className="popupContainer">
              <div className="popup">
                <p className="popupText">Upload a photo from computer</p>
                <input
                  className="selectPhotoBtn"
                  type="submit"
                  value="Select Photo"
                />
              </div>
            </div>
          </div>
          <div className="popupBackground" />
        </div>
      : <div />;
    return (
      <div className="main">
        {popup}
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
            className="upload"
            //type="file"
            value="Upload Photo"
            type="submit"
            onClick={this.showPoppup}
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
