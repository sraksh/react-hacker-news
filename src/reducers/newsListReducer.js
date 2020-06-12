import { FETCH_NEWSLIST } from "../constants/action-types";
const initialState = {
  newsList: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWSLIST:
      const newState = {
        ...state,
        newsList: action.payload,
      };
      return newState;
    default:
      return state;
  }
};
