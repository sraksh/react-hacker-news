import {
  FETCH_NEWSLIST,
  UPDATE_UPVOTE_COUNT,
  HIDE_NEWS_ITEM,
} from "../constants/action-types";
const initialState = {
  newsList: "",
};

export default (state = initialState, action) => {
  let newState = [];
  switch (action.type) {
    case FETCH_NEWSLIST:
      return {
        ...state,
        newsList: action.payload,
      };
    case UPDATE_UPVOTE_COUNT: {
      newState = state.newsList.hits.map(item =>
        action.payload.objectID === item.objectID
          ? { ...item, points: item.points + 1 }
          : item
      );
      return { ...state, newsList: { ...state.newsList, hits: newState } };
    }
    case HIDE_NEWS_ITEM: {
      newState = state.newsList.hits.map(item =>
        action.payload === item.objectID ? { ...item, hide: true } : item
      );
      return { ...state, newsList: { ...state.newsList, hits: newState } };
    }
    default:
      return state;
  }
};
