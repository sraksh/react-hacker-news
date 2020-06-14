import {
  FETCH_NEWSLIST,
  UPDATE_UPVOTE_COUNT,
  HIDE_NEWS_ITEM,
} from "../constants/action-types";
const URL = "http://hn.algolia.com/api/v1/search?hitsPerPage=30&page=1";

export const populateNews = response => ({
  type: FETCH_NEWSLIST,
  payload: response,
});

export const fetchNewsList = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(res => {
      saveDataToLocalStorage(res.hits);
      var updatedNewsData = getDataFromLocalStorage(res.hits);
      return dispatch(populateNews({ ...res, hits: updatedNewsData }));
    });
};

export const updateVoteCount = newsItem => ({
  type: UPDATE_UPVOTE_COUNT,
  payload: newsItem,
});

export const hideNewsItem = newsId => dispatch => {
  var newsItemObj = JSON.parse(localStorage.getItem(newsId));
  localStorage.setItem(newsId, JSON.stringify({ ...newsItemObj, hide: true }));
  dispatch(dispatchHideNews(newsId));
};

export const dispatchHideNews = newsId => ({
  type: HIDE_NEWS_ITEM,
  payload: newsId,
});

function getDataFromLocalStorage(response) {
  var hitsArray = [];
  for (var item of response) {
    hitsArray.push(JSON.parse(localStorage.getItem(item.objectID)));
  }
  return hitsArray;
}

function saveDataToLocalStorage(response) {
  for (var item of response) {
    var lastestVotes = localStorage.getItem(item.objectID)
      ? JSON.parse(localStorage.getItem(item.objectID)).points
      : item.points;
    var hideStatus = localStorage.getItem(item.objectID)
      ? JSON.parse(localStorage.getItem(item.objectID)).hide
      : item.hide;
    localStorage.setItem(
      item.objectID,
      JSON.stringify({ ...item, hide: hideStatus, points: lastestVotes })
    );
  }
}
