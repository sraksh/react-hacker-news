import React from "react";

import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination-container">
        <a href="#" className="btn-prev">
          Previous
        </a>
        <div className="btn-separator"></div>
        <a href="#" className="btn-next">
          Next
        </a>
      </div>
    );
  }
}

export default Pagination;
