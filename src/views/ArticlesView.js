import React, { Component } from 'react';
import { connect } from 'react-redux';

import articlesOperations from '../redux/articles/articles-operations';

import ArticlesForm from '../components/ArticlesForm/ArticlesForm';
import ArticlesList from '../components/ArticlesList/ArticlesList';

import styles from './ArticlesView.module.css';

class ArticlesView extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }
  render() {
    return (
      <div className={styles.mainBlock}>
        <div>
          <ArticlesForm onSubmit={this.handleContactsData} />
        </div>

        <div className={styles.articlesBlock}>
          <h1 className={styles.title}>Articles</h1>

          <ArticlesList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(articlesOperations.fetchArticles()),
});

export default connect(null, mapDispatchToProps)(ArticlesView);
