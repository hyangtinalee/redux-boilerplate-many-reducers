import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import toggleReducer from "./reducers/toggleReducer";

// Create the Redux store
const rootReducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer,
});
const store = createStore(rootReducer);

export default store;
