import React, { Component } from "react";
import livingRoomImg from "./images/living-room-with-dots-materialsScreen.png";
import { Redirect } from "react-router";
import "./materialScreen.css";

class MaterialScreen extends Component {
	state = {
		redirect: false
	};

	handleSubmit = () => {
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="removeItems" />;
		}
		return (
			<div className="App">
				<p
					style={{
						fontSize: 20
					}}
				>
					We've identified these <span
						style={{
							fontWeight: "bold"
						}}
					>
						Materials
					</span> in your palette
				</p>
				<img className="imgAnalyzed" src={livingRoomImg} />
				<p>
					Select what you would like to keep
				</p>
				<div style={{ textAlign: "center" }}>
					<div className="materialDisplayRowContainer">
						<div
							style={{
								display: "flex"
							}}
						>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
								style={{
									marginTop: 30
								}}
							/>
							<div className="materialDisplay tweed">
								<p className="materialTitle">
									Tweed
								</p>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								marginLeft: 20
							}}
						>
							<i
								className="fa fa-plus-square-o fa-lg"
								aria-hidden="true"
								style={{
									marginTop: 30
								}}
							/>
							<div className="materialDisplay marble">
								<p className="materialTitle">
									Marble
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="materialDisplayRowContainer">
					<div
						style={{
							display: "flex"
						}}
					>
						<i
							className="fa fa-plus-square-o fa-lg"
							aria-hidden="true"
							style={{
								marginTop: 30
							}}
						/>
						<div className="materialDisplay wood">
							<p className="materialTitle">
								Wood
							</p>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							marginLeft: 20
						}}
					>
						<i
							className="fa fa-plus-square-o fa-lg"
							aria-hidden="true"
							style={{
								marginTop: 30
							}}
						/>
						<div className="materialDisplay metal">
							<p className="materialTitle">
								Metal
							</p>
						</div>
					</div>
				</div>
				<div style={{ marginTop: 65 }}>
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

export default MaterialScreen;
