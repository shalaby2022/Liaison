import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export const AppStore = store;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
