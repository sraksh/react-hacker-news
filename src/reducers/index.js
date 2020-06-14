import { combineReducers } from "redux";
import newsListReducer from "./newsListReducer";
import paginationReducer from "./paginationReducer";

let rootReducer = combineReducers({
  newsList: newsListReducer,
  currentPage: paginationReducer,
});

export default rootReducer;
