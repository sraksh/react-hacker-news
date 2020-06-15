import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

import Pagination from "../components/Pagination/Pagination";

afterEach(cleanup);

describe("Pagination rendering", () => {
  let store, PaginationElement;
  beforeEach(() => {
    store = mockStore({
      currentPage: 1,
    });
    PaginationElement = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  });
  it("Pagination Component should be rendered", () => {
    expect(PaginationElement).toMatchSnapshot();
  });
});
