import { FETCH_NEWSLIST } from "../constants/action-types";
const URL = "http://hn.algolia.com/api/v1/search?hitsPerPage=30&page=1";

export const populateNews = response => ({
  type: FETCH_NEWSLIST,
  payload: response,
});

export const fetchNewsList = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(res => {
      return dispatch(populateNews(res));
    });
};
