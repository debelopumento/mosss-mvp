import React, { Component } from "react";
import livingRoomImg from "./images/Living-Room-Uploaded.png";
import "./analyzingScreen.css";
import { Redirect } from "react-router";

class AnalyzingScreen extends Component {
	state = {
		redirect: false
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ redirect: true });
		}, 3000);
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/colorPalette" />;
		}
		return (
			<div
				style={{
					textAlign: "center",
					marginTop: 100
				}}
			>
				<img className="tintedImg" src={livingRoomImg} />
				<div className="loader">
					<input className="loaderDot up" />
					<input className="loaderDot down" />
					<input className="loaderDot left" />
					<input className="loaderDot right" />
				</div>
				<div
					style={{
						width: 550,
						margin: "auto"
					}}
				>
					<h2
						style={{
							fontWeight: "lighter",
							fontSize: 30,
							fontStyle: "italic",
							color: "#404041"
						}}
					>
						Great! Analyzing your photo for colors and materials.
					</h2>
				</div>
			</div>
		);
	}
}

export default AnalyzingScreen;
