import React, { Component } from 'react';
import { connect } from 'react-redux';

import articlesOperations from '../../redux/articles/articles-operations';

import ArticlesList from '../../components/ArticlesList/ArticlesList';

class ArticlesView extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }
  render() {
    return (
      <div>
        <div>
          <ArticlesList isAuthor={false} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(articlesOperations.fetchArticles()),
});

export default connect(null, mapDispatchToProps)(ArticlesView);
