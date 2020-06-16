import React from "react";
import { connect } from "react-redux";

import { fetchNewsList, goToPrevious, goToNext } from "../../actions/index";
import "./Pagination.css";

class Pagination extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    const newValue = nextProps.currentPage.currentPage;
    if (newValue !== this.props.currentPage.currentPage) {
      this.props.fetchNewsList(newValue);
    }
  }
  previousPage(event) {
    event.preventDefault();
    this.props.goToPrevious(this.props.currentPage.currentPage);
  }
  nextPage(event) {
    event.preventDefault();
    this.props.goToNext(this.props.currentPage.currentPage);
  }
  render() {
    return (
      <div className="pagination-container">
        <a
          href="#"
          target="_self"
          rel="noopener"
          className={
            this.props.currentPage.currentPage !== 0
              ? "btn-prev"
              : "btn-disabled-left"
          }
          onClick={this.previousPage.bind(this)}>
          Previous
        </a>
        <a
          href="#"
          target="_self"
          rel="noopener"
          className={
            this.props.currentPage.currentPage !== 34
              ? "btn-next"
              : "btn-disabled-right"
          }
          onClick={this.nextPage.bind(this)}>
          Next
        </a>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  goToPrevious: pageNum => dispatch(goToPrevious(pageNum)),
  goToNext: pageNum => dispatch(goToNext(pageNum)),
  fetchNewsList: pageNum => dispatch(fetchNewsList(pageNum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
