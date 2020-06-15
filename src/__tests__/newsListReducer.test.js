import reducer from "../reducers/newsListReducer";
import {
  FETCH_NEWSLIST,
  UPDATE_UPVOTE_COUNT,
  HIDE_NEWS_ITEM,

} from "../constants/action-types";

describe("News List reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      newsList: "",
    });
  });

  it("should update state with response from api", () => {
    expect(
      reducer(
        { newsList: "" },
        {
          type: FETCH_NEWSLIST,
          payload: { hits: ["news1", "news2", "news3"] },
        }
      )
    ).toEqual({
      newsList: { hits: ["news1", "news2", "news3"] },
    });
  });

  it("should update vote count for a news item", () => {
    expect(
      reducer(
        {
          newsList: {
            hits: [
              { objectID: "23", points: 100 },
              { objectID: "45", points: 200 },
            ],
          },
        },
        {
          type: UPDATE_UPVOTE_COUNT,
          payload: { objectID: "45", points: 200 },
        }
      )
    ).toEqual({
      newsList: {
        hits: [
          { objectID: "23", points: 100 },
          { objectID: "45", points: 201 },
        ],
      },
    });
  });

  it("should hide the news item from feed", () => {
    expect(
      reducer(
        {
          newsList: {
            hits: [
              { objectID: "23", hide: false },
              { objectID: "45", hide: false },
            ],
          },
        },
        {
          type: HIDE_NEWS_ITEM,
          payload: "45",
        }
      )
    ).toEqual({
      newsList: {
        hits: [
          { objectID: "23", hide: false },
          { objectID: "45", hide: true },
        ],
      },
    });
  });
});
