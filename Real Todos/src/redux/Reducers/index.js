import { combineReducers } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
  user: Reducer,
});
export default reducers;
