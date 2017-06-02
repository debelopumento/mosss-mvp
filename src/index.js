import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import UploadPhotoPage from "./uploadPhotoPage";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import AnalyzingScreen from "./analyzingScreen";
import ColorPaletteScreen from "./colorPaletteScreen";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Header />
				<Route exact path="/" component={App} />
				<Route
					exact
					path="/uploadPhotoPage"
					component={UploadPhotoPage}
				/>
				<Route exact path="/analyzing" component={AnalyzingScreen} />
				<Route
					exact
					path="/colorPalette"
					component={ColorPaletteScreen}
				/>
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
