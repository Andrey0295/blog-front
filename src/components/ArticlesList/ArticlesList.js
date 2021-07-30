import React from 'react';

import { connect } from 'react-redux';

import articlesSelectors from '../../redux/articles/articles-selectors';
import articlesOperations from '../../redux/articles/articles-operations';

import ArticlesListItem from './ArticlesListItem';

import styles from './ArticlesListItem.module.css';

const ArticlesList = ({ articlesData, onDelete }) => {
  return (
    <ul className={styles.list}>
      {articlesData.map(({ title, id, body }) => (
        <ArticlesListItem
          title={title}
          body={body}
          key={id}
          articleId={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  articlesData: articlesSelectors.getVisibleArticles(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: articleId => dispatch(articlesOperations.deleteArticle(articleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
