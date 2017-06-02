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
								width: 25,
								height: 40,
								border: "3px solid #404041",
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
							borderRight: "3px solid #404041",
							borderTop: "3px solid #404041",
							borderBottom: "3px solid #404041",
							borderRadius: 3,
							marginLeft: 0,
							height: 15,
							paddingTop: 6,
							paddingBottom: 9,
							paddingLeft: 10,
							paddingRight: 10,
							display: "tableCell"
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
					paddingTop: 100,
					color: "#404041",
					textAlign: "center"
				}}
			>
				<div
					style={{
						width: 750,
						margin: "auto",
						display: "flex"
					}}
				>
					<div>
						<img
							style={{
								width: 330
							}}
							src={livingRoomImg}
						/>
					</div>
					<div
						style={{
							position: "relative",
							marginLeft: 20
						}}
					>
						<p
							style={{
								fontSize: 30,
								lineHeight: "150%",
								marginTop: 10,
								marginBottom: 0
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
								fontSize: 18,
								fontStyle: "italic",
								marginTop: 20,
								fontWeight: "lighter"
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
