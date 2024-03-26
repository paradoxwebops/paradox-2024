import { persistReducer } from "redux-persist";
import { authReducer } from "./auth";
import { combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import storage from "../storage";
const persistConfig = {
  key: "paradoxstudent",
  storage,
  // whitelist: ["authState"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export * from "./auth";

export { rootReducer };

export default rootReducer;
