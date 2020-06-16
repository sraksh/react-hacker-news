import React from "react";
import { connect } from "react-redux";

import "./Home.css";
import VoteChart from "../VoteChart/VoteChart";
import Pagination from "../Pagination/Pagination";
import {
  fetchNewsList,
  updateVoteCount,
  hideNewsItem,
} from "../../actions/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNewsList(this.props.currentPage.currentPage);
  }

  upVoteCount(item, event) {
    // update call goes here
    event.preventDefault();
    this.props.updateVoteCount(item);
    localStorage.setItem(
      item.objectID,
      JSON.stringify({ ...item, points: item.points + 1 })
    );
  }

  hideNewsItem(item, event) {
    event.preventDefault();
    this.props.hideNewsItem(item.objectID);
  }

  getFormattedTime(time) {
    var date = new Date(time * 1000);
    return date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
  }

  getHostname(url) {
    var host = "dummyurl";
    if (url) {
      host = url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split("/")[0];
    }
    return host;
  }

  renderItem(item) {
    return (
      <tr key={item.id}>
        <td
          className="td-column-item text-black font-size-m"
          data-label="Comments">
          {item.num_comments ? item.num_comments : 0}
        </td>
        <td className="td-column-item font-size-m" data-label="Vote Count">
          {item.points}
        </td>
        <td className="td-column-item font-size-m" data-label="UpVote">
          <a href="#" target="_self" className="font-size-l">
            <img
              src="https://news.ycombinator.com/grayarrow2x.gif"
              alt="Upvote button"
              onClick={this.upVoteCount.bind(this, item)}
              className="upvote-icon"
            />
          </a>
          {item.vote_count}
        </td>
        <td data-label="News Details" className="font-size-m">
          <div>
            <span className="item-news-title">
              {item.title ? item.title : "Dummy title"}
            </span>
            <a
              href={item.url ? item.url : "#"}
              className="grey-text margin-l-1 text-no-decor"
              target="_blank">
              ({this.getHostname(item.url)})
            </a>
            <span className="mobile-hide-wrapper">
              <span className="grey-text margin-l-1 text-no-decor">by</span>
              <span className="grey-text margin-l-1 text-no-decor text-black">
                {item.author}
              </span>
            </span>
            <span className="grey-text margin-l-1 text-no-decor">
              {this.getFormattedTime(item.created_at_i)}
            </span>
            <span className="mobile-hide-wrapper">
              <span className="grey-text margin-l-1 text-no-decor">[</span>
              <a
                href="#"
                target="_self"
                className="grey-text margin-l-1 text-no-decor text-black"
                onClick={this.hideNewsItem.bind(this, item)}>
                Hide
              </a>
              <span className="grey-text margin-l-1 text-no-decor">]</span>
            </span>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    const { hits } = this.props.newsList.newsList;
    return (
      <div className="news-container">
        <h2>NEWS FEED</h2>
        <div>
          <table cellPadding="0" cellSpacing="0" width="100%" border="0">
            <thead className="news-header">
              <tr className="news-header-row">
                <th className="thead-column-width">Comments</th>
                <th className="thead-column-width">Vote Count</th>
                <th className="thead-column-width">UpVote</th>
                <th>News Details</th>
              </tr>
            </thead>
            <tbody className="news-body">
              {hits && hits.map(item => !item.hide && this.renderItem(item))}
            </tbody>
          </table>
          <Pagination></Pagination>
          <VoteChart hits={hits}></VoteChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsList: state.newsList,
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  fetchNewsList: pageNum => dispatch(fetchNewsList(pageNum)),
  updateVoteCount: item => dispatch(updateVoteCount(item)),
  hideNewsItem: objectID => dispatch(hideNewsItem(objectID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
