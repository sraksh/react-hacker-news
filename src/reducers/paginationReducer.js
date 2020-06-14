import { NEXT_PAGE, PREVIOUS_PAGE } from "../constants/action-types";
const initialState = {
  currentPage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      if (action.payload < 34) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      } else {
        return state;
      }
    case PREVIOUS_PAGE:
      if (action.payload > 0) {
        {
          return {
            ...state,
            currentPage: state.currentPage - 1,
          };
        }
      } else {
        return state;
      }
    default:
      return state;
  }
};
