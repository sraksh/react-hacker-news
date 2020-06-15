import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../actions/index";
import {
  UPDATE_UPVOTE_COUNT,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  FETCH_NEWSLIST,
} from "../constants/action-types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  xit("should dispatches requests to fetch news list", () => {
    fetch.mockResponseOnce(JSON.stringify({ currentpage: 2 }));
    const expectedAction = {
      type: FETCH_NEWSLIST,
      payload: {name: "Sumit"},
    };
    const store = mockStore({name: "Sumit"});
    console.log(store.dispatch(actions.goToNext(2)))
    return store.dispatch(actions.fetchNewsList()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("should create an action to update vote count", () => {
    let obj = {
      created_at: "2018-04-25T15:27:44.000Z",
      title: "Medicare will require hospitals to post prices online",
      url:
        "https://www.msn.com/en-us/news/us/medicare-will-require-hospitals-to-post-prices-online/ar-AAwiccI",
      author: "DoreenMichele",
      points: 1015,
      num_comments: 544,
      created_at_i: 1524670064,
    };
    const expectedAction = {
      type: UPDATE_UPVOTE_COUNT,
      payload: obj,
    };
    expect(actions.updateVoteCount(obj)).toEqual(expectedAction);
  });

  it("should create an action to got to next page", () => {
    let page = 2;
    const expectedAction = {
      type: NEXT_PAGE,
      payload: page,
    };
    expect(actions.goToNext(page)).toEqual(expectedAction);
  });

  it("should create an action to got back to previous page", () => {
    let page = 2;
    const expectedAction = {
      type: PREVIOUS_PAGE,
      payload: page,
    };
    expect(actions.goToPrevious(page)).toEqual(expectedAction);
  });
});
