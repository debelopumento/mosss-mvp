import { combineReducers } from "redux";

const photoUrlReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_PHOTO_URL": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	photoUrl: photoUrlReducer
});

export default allReducers;
