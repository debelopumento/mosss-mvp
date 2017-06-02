import React, { Component } from "react";
import livingRoomImg from "./images/living-room-with-dots.png";
import "./colorPaletteScreen.css";
import { Redirect } from "react-router";

class ColorPaletteScreen extends Component {
	state = {
		redirect: false
	};

	handleSubmit = () => {
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/materials" />;
		}
		return (
			<div className="App">
				<p
					style={{
						fontSize: 24,
						color: "#404041"
					}}
				>
					We've identified these <span
						style={{
							fontWeight: "bold"
						}}
					>
						Colors
					</span> in your palette
				</p>
				<img className="imgAnalyzed" src={livingRoomImg} />
				<p style={{ marginTop: 48, fontSize: 23, color: "#404041" }}>
					Select what you would like to keep
				</p>
				<div style={{ textAlign: "center" }}>
					<div
						style={{
							textAlign: "left",
							width: 240,
							margin: "auto"
						}}
					>
						<div>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
							/>
							<input
								style={{
									backgroundColor: "#413e3a",
									border: 0,
									width: 65,
									height: 65,
									borderRadius: 50,
									marginLeft: 28
								}}
							/>
							<span
								style={{
									marginLeft: 8,
									color: "#404041",
									fontWeight: "lighter"
								}}
							>
								Pantone 885
							</span>
						</div>
						<div>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
							/>
							<input
								style={{
									backgroundColor: "#dbdce0",
									border: 0,
									width: 65,
									height: 65,
									borderRadius: 50,
									marginLeft: 28
								}}
							/>
							<span
								style={{
									marginLeft: 8,
									color: "#404041",
									fontWeight: "lighter"
								}}
							>
								Pantone 345
							</span>
						</div>
						<div>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
							/>
							<input
								style={{
									backgroundColor: "#333640",
									border: 0,
									width: 65,
									height: 65,
									borderRadius: 50,
									marginLeft: 28
								}}
							/>
							<span
								style={{
									marginLeft: 8,
									color: "#333640",
									fontWeight: "lighter"
								}}
							>
								Pantone 1119
							</span>
						</div>
						<div>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
							/>
							<input
								style={{
									backgroundColor: "#d7d5cf",
									border: 0,
									width: 65,
									height: 65,
									borderRadius: 50,
									marginLeft: 28
								}}
							/>
							<span
								style={{
									marginLeft: 8,
									color: "#333640",
									fontWeight: "lighter"
								}}
							>
								Pantone 867
							</span>
						</div>
					</div>
				</div>
				<div style={{ marginTop: 15 }}>
					<input
						className="selectPhotoBtn"
						type="submit"
						value="Submit"
						onClick={this.handleSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default ColorPaletteScreen;
