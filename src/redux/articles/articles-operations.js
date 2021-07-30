/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './articles-actions';

const fetchArticles = () => dispatch => {
  dispatch(actions.fetchArticlesRequest);

  axios
    .get('/articles')
    .then(({ data }) => dispatch(actions.fetchArticlesSuccess(data)))
    .catch(({ message }) => dispatch(actions.fetchArticlesError(message)));
};

const addArticle =
  ({ title, body }) =>
  dispatch => {
    const article = { title, body };

    dispatch(actions.addArticlesRequest());

    axios
      .post('/articles', article)
      .then(({ data }) => dispatch(actions.addArticlesSuccess(data)))
      .catch(({ message }) => dispatch(actions.addArticlesError(message)));
  };

const deleteArticle = articleId => dispatch => {
  dispatch(actions.deleteArticlesRequest());

  axios
    .delete(`/articles/${articleId}`)
    .then(() => dispatch(actions.deleteArticlesSuccess(articleId)))
    .catch(({ message }) => dispatch(actions.deleteArticlesError(message)));
};

export default { addArticle, fetchArticles, deleteArticle };
