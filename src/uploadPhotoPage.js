import React, { Component } from "react";
import "./uploadPhotoPage.css";
import defaultImag from "./images/photoUploadDefault.png";
import "./uploadPhotoPage.css";
import livingRoomImg from "./images/Living-Room-Uploaded.png";
import { Redirect } from "react-router";

//we don't have a backend for this photo upload function yet
//so I put a fake button there for now.

class UploadPhotoPage extends Component {
  state = {
    imageUploaded: false,
    showPoppup: false,
    zipCode: "",
    zipCodeValidated: false,
    readyForSubmission: false,
    redirect: false
  };

  showPoppup = () => {
    this.setState({ showPoppup: true });
  };

  imageUploaded = () => {
    this.setState({ imageUploaded: true });
    this.setState({ showPoppup: false });
  };

  zipCodeOnChange = event => {
    const zipCode = event.target.value;
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
    if (isValidZip) {
      this.setState({ zipCodeValidated: true });
      this.setState({ zipCode });
    }
  };

  submit = () => {
    this.setState({ redirect: true });
  };

  render() {
    const image = this.state.imageUploaded
      ? <img className="img" src={livingRoomImg} />
      : <img className="img" src={defaultImag} />;

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
                  onClick={this.imageUploaded}
                />
              </div>
            </div>
          </div>
          <div className="popupBackground" />
        </div>
      : <div />;

    const bottomText = this.state.imageUploaded
      ? <div />
      : <h3>No Photo? Take our Taste Test!</h3>;

    const uploadButton = this.state.imageUploaded
      ? <input className="uploaded" value="Uploaded" type="submit" />
      : <input
          className="upload"
          //type="file"
          value="Upload Photo"
          type="submit"
          onClick={this.showPoppup}
        />;

    const zipCodeButton = this.state.zipCodeValidated
      ? <input
          className="zipCodeValidated"
          placeholder={this.state.zipCode}
          type="text"
        />
      : <input
          className="zipCode"
          placeholder="Zip Code"
          type="text"
          onChange={this.zipCodeOnChange}
        />;

    const bottomContent = this.state.imageUploaded &&
      this.state.zipCodeValidated
      ? <input
          className="selectPhotoBtn"
          type="submit"
          value="Submit"
          onClick={this.submit}
        />
      : <div />;

    if (this.state.redirect) {
      return <Redirect to="/analyzing" />;
    }
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
          {uploadButton}
          {zipCodeButton}
          <div />
        </div>
        {bottomText}
        {bottomContent}
      </div>
    );
  }
}

export default UploadPhotoPage;
