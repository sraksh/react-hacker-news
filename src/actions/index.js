import {
  FETCH_NEWSLIST,
  UPDATE_UPVOTE_COUNT,
  HIDE_NEWS_ITEM,
  PREVIOUS_PAGE,
  NEXT_PAGE,
} from "../constants/action-types";
const URL = "https://hn.algolia.com/api/v1/search?hitsPerPage=30&page=";

export const populateNews = response => ({
  type: FETCH_NEWSLIST,
  payload: response,
});

export const updateVoteCount = newsItem => ({
  type: UPDATE_UPVOTE_COUNT,
  payload: newsItem,
});

export const dispatchHideNews = newsId => ({
  type: HIDE_NEWS_ITEM,
  payload: newsId,
});

export const goToPrevious = page => ({
  type: PREVIOUS_PAGE,
  payload: page,
});

export const goToNext = page => ({
  type: NEXT_PAGE,
  payload: page,
});

export const fetchNewsList = pageNum => async dispatch => {
  const res = await fetch(URL + pageNum).then(response => response.json());
  saveDataToLocalStorage(res.hits);
  var updatedNewsData = getDataFromLocalStorage(res.hits);
  dispatch(populateNews({ ...res, hits: updatedNewsData }));
};

export const hideNewsItem = newsId => dispatch => {
  var newsItemObj = JSON.parse(localStorage.getItem(newsId));
  localStorage.setItem(newsId, JSON.stringify({ ...newsItemObj, hide: true }));
  dispatch(dispatchHideNews(newsId));
};

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
      : false;
    localStorage.setItem(
      item.objectID,
      JSON.stringify({ ...item, hide: hideStatus, points: lastestVotes })
    );
  }
}
