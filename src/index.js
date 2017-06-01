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
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
