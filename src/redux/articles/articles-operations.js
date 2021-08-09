/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './articles-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchArticles = () => dispatch => {
  dispatch(actions.fetchArticlesRequest);

  axios
    .get('/articles')
    .then(({ data }) => dispatch(actions.fetchArticlesSuccess(data)))
    .catch(({ message }) => dispatch(actions.fetchArticlesError(message)));
};

const fetchMyArticles = () => dispatch => {
  dispatch(actions.fetchMyArticlesRequest);

  axios
    .get('/my-articles')
    .then(({ data }) => dispatch(actions.fetchMyArticlesSuccess(data)))
    .catch(({ message }) => dispatch(actions.fetchMyArticlesError(message)));
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

const editArticle =
  ({ articleId, title, body }) =>
  dispatch => {
    const article = {
      title,
      body,
    };

    dispatch(actions.editArticlesRequest());

    axios
      .put(`/articles/${articleId}`, article)
      .then(({ data }) => {
        dispatch(actions.editArticlesSuccess(data));
        console.log(data);
      })
      .catch(error => console.log(error));
  };

const deleteArticle = articleId => dispatch => {
  dispatch(actions.deleteArticlesRequest());

  axios
    .delete(`/articles/${articleId}`)
    .then(() => dispatch(actions.deleteArticlesSuccess(articleId)))
    .catch(({ message }) => dispatch(actions.deleteArticlesError(message)));
};

export default {
  addArticle,
  editArticle,
  fetchArticles,
  fetchMyArticles,
  deleteArticle,
};
