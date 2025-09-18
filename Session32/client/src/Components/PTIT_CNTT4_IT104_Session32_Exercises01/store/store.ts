import { createStore, combineReducers } from "redux";

import userReducer from "./userList";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = createStoreHook(rootReducer);