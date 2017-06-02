import React, { Component } from "react";
import { Redirect } from "react-router";
import "./App.css";
import livingRoomImg
	from "./images/living-room-with-dots-removeItemsScreen.png";

class RemoveItemsScreen extends Component {
	state = {
		items: [
			"Table",
			"Lamp",
			"Sofa",
			"Rug",
			"Chair",
			"Wall art",
			"Pillows",
			"Coffee Table",
			"Plants"
		],
		redirect: false
	};

	handleSubmit = () => {
		this.setState({ redirect: true });
	};

	removeItem = event => {
		const itemIndex = event.target.id;
		let items = this.state.items;
		items.splice(itemIndex, 1);
		this.setState({ items });
	};

	render() {
		const itemList = Object.keys(this.state.items).map(index => {
			const item = this.state.items[index];
			if (this.state.redirect) {
				return <Redirect to="/" />;
			}
			return (
				<div
					key={index}
					style={{
						width: 200,
						display: "table"
					}}
				>
					<span>
						<input
							id={index}
							style={{
								width: 40,
								height: 50,
								border: "4px solid #404041",
								display: "tableCell",
								margin: 0,
								color: "#404041"
							}}
							value="x"
							type="submit"
							onClick={this.removeItem}
						/>
					</span>
					<span
						style={{
							borderRight: "4px solid #404041",
							borderTop: "4px solid #404041",
							borderBottom: "4px solid #404041",
							borderRadius: 3,
							marginLeft: 0,
							height: 18,
							paddingTop: 8,
							paddingBottom: 11,
							paddingLeft: 13,
							paddingRight: 13,
							display: "tableCell",
							fontSize: 20
						}}
					>
						{item}
					</span>
				</div>
			);
		});
		return (
			<div
				style={{
					paddingTop: 130,
					color: "#404041",
					textAlign: "center"
				}}
			>
				<div
					style={{
						width: 1000,
						margin: "auto",
						display: "flex"
					}}
				>
					<div>
						<img
							style={{
								width: 500
							}}
							src={livingRoomImg}
						/>
					</div>
					<div
						style={{
							position: "relative",
							marginLeft: 30
						}}
					>
						<p
							style={{
								fontSize: 42,
								color: "#404041",
								textAlign: "left",
								lineHeight: "150%",
								marginTop: 20,
								marginBottom: 10
							}}
						>
							We're pretty sure we see a
							{" "}
							<span
								style={{
									borderBottom: "2px solid #d4d912"
								}}
							>
								Coffee Table
							</span>
							{" "}
							and a <span
								style={{
									borderBottom: "2px solid #d4d912"
								}}
							>
								Sofa
							</span> in this <span
								style={{
									borderBottom: "2px solid #d4d912"
								}}
							>
								Living Room.
							</span>
						</p>
						<p
							style={{
								fontSize: 23,
								fontStyle: "italic",
								marginTop: 20,
								fontWeight: "lighter",
								textAlign: "left"
							}}
						>
							<span style={{ fontWeight: "bold" }}>
								Remove
							</span>
							{" "}
							any items you don't want us to find
						</p>
					</div>
				</div>
				<div
					style={{
						width: 600,
						height: 200,
						display: "flex",
						margin: "auto",
						marginTop: 30,
						marginBottom: 0,
						flexWrap: "wrap"
					}}
				>
					{itemList}
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

export default RemoveItemsScreen;
