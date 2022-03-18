import { combineReducers } from "redux";
import x0reducer from "./x0reducer";

const reducers = combineReducers({
  x0reducer: x0reducer,
});

export default reducers;
export {};

export type RootState = ReturnType<typeof reducers>;
