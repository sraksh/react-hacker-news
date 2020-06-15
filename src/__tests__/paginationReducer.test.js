import reducer from "../reducers/paginationReducer";
import {
  PREVIOUS_PAGE,
  NEXT_PAGE,
} from "../constants/action-types";

describe("Pagination reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      currentPage: 0,
    });
  });

  it("should return the next page number", () => {
    expect(
      reducer(
        { currentPage: 0 },
        {
          type: NEXT_PAGE,
          payload: 1,
        }
      )
    ).toEqual({
      currentPage: 1,
    });
  });

  it("should return the previous page number", () => {
    expect(
      reducer(
        { currentPage: 3 },
        {
          type: PREVIOUS_PAGE,
          payload: 3,
        }
      )
    ).toEqual({
      currentPage: 2,
    });
  });
});
