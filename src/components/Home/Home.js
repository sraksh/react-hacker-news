import React from "react";
import { connect } from "react-redux";
import { fetchNewsList } from "../../actions/index";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNewsList();
  }
  render() {
    const { hits } = this.props.newsList.newsList;
    return (
      <div>
        <div>Home Template</div>
        <ul>
          {hits && hits.map(item => <li key={item.id}>{item.author}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsList: state.newsList,
});

const mapDispatchToProps = dispatch => ({
  fetchNewsList: () => dispatch(fetchNewsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
