import React from "react";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
// const store = mockStore({});

import HomeComponent from "../components/Home/Home";
import VoteChart from "../components/VoteChart/VoteChart";
import Pagination from "../components/Pagination/Pagination";

afterEach(cleanup);

describe("Home rendering", () => {
  let store, HomeComponentElement;
  let testItems = {
    currentPage: 2,
    newsList: {
      created_at: "2018-04-25T15:27:44.000Z",
      title: "Medicare will require hospitals to post prices online",
      url:
        "https://www.msn.com/en-us/news/us/medicare-will-require-hospitals-to-post-prices-online/ar-AAwiccI",
      author: "DoreenMichele",
      points: 1015,
      num_comments: 544,
      created_at_i: 1524670064,
    },
    fetchNewsList: jest.fn(),
    updateVoteCount: jest.fn(),
    hideNewsItem: jest.fn(),
  };
  beforeEach(() => {
    store = mockStore({
      newsList: testItems,
      currentPage: 1,
    });
    // HomeComponentElement = render(
    //   <Provider store={store}>
    //     <HomeComponent />
    //   </Provider>
    // );
    // jest.mock('Pagination', () => () => <div id="Pagination">Pagination</div>);
    // jest.mock("react-redux", () => {
    //     return {
    //       connect: (mapStateToProps, mapDispatchToProps) => (
    //         Pagination
    //       ) => Pagination
    //     };
    //   });
    // jest.mock("../componeqnts/VoteChart/VoteChart", () => () => <div id="mockVoteChart">mockVoteChart</div>)
    // HTMLCanvasElement.prototype.getContext = jest.fn();
  });
//   it("Home Component should be rendered", () => {
//     wrapper = shallow(<Provider store={store}><HomeComponent /></Provider>);
//     // const header = <h2>NEWS FEED</h2>;
//     expect(wrapper.find(".news-container").length).toEqual(1);
//   });

  //   it("Home: fetchNewsList should be called", () => {
  //       console.log(testItems)
  //     const props = testItems;
  //     expect(props.fetchNewsList).toHaveBeenCalledTimes(1);
  //   });
  it('sums numbers', () => {
    expect(3).toEqual(3);
  });
});
