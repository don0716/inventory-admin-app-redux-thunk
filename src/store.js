import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import adminInventoryReducer from "./reducers";

const store = createStore(adminInventoryReducer, applyMiddleware(thunk));

export default store;
