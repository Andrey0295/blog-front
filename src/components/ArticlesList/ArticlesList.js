import React from 'react';

import { connect } from 'react-redux';

import articlesSelectors from '../../redux/articles/articles-selectors';
import articlesOperations from '../../redux/articles/articles-operations';

import ArticlesListItem from './ArticlesListItem';

const ArticlesList = ({ articlesData, onDelete, onEdit, isAuthor }) => {
  return (
    <ul className="mb-0 row list-group">
      {articlesData.map(({ title, id, body }, idx) => (
        <ArticlesListItem
          title={title}
          body={body}
          key={id}
          articleId={id}
          onDelete={onDelete}
          isAuthor={isAuthor}
          idx={idx}
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
