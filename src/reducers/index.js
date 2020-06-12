import { combineReducers } from "redux";
import newsListReducer from "./newsListReducer";

let rootReducer = combineReducers({
  newsList: newsListReducer,
});

export default rootReducer;
