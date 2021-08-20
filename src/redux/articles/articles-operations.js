/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './articles-actions';
import authAction from '../auth/auth-action';

import networkActions from '../network/network-actions';

const NETWORK_ERROR_MESSAGE = 'Network Error';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://infinite-escarpment-83664.herokuapp.com';

const getNetworkError = (err, dispatch) => {
  if (err.message === NETWORK_ERROR_MESSAGE) {
    dispatch(networkActions.showNetworkErrorComponent());
    dispatch(authAction.logoutSuccess());
  } else {
    return;
  }
};

const fetchArticles = () => dispatch => {
  dispatch(actions.fetchArticlesRequest);

  axios
    .get('/articles')
    .then(({ data }) => dispatch(actions.fetchArticlesSuccess(data)))
    .catch(error => {
      getNetworkError(error, dispatch);
      dispatch(actions.fetchArticlesError(error.message));
    });
};

const fetchMyArticles = () => dispatch => {
  dispatch(actions.fetchMyArticlesRequest);

  axios
    .get('/my-articles')
    .then(({ data }) => dispatch(actions.fetchMyArticlesSuccess(data)))
    .catch(error => {
      getNetworkError(error, dispatch);
      dispatch(actions.fetchMyArticlesError(error.message));
    });
};

const addArticle =
  ({ title, body }) =>
  dispatch => {
    const article = { title, body };

    dispatch(actions.addArticlesRequest());

    axios
      .post('/articles', article)
      .then(({ data }) => dispatch(actions.addArticlesSuccess(data)))
      .catch(error => {
        getNetworkError(error, dispatch);
        dispatch(actions.addArticlesError(error.message));
      });
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
      })
      .catch(error => {
        getNetworkError(error, dispatch);
        dispatch(actions.editArticlesError(error));
      });
  };

const deleteArticle = articleId => dispatch => {
  dispatch(actions.deleteArticlesRequest());

  axios
    .delete(`/articles/${articleId}`)
    .then(() => dispatch(actions.deleteArticlesSuccess(articleId)))
    .catch(error => {
      getNetworkError(error, dispatch);
      dispatch(actions.deleteArticlesError(error.message));
    });
};

export default {
  addArticle,
  editArticle,
  fetchArticles,
  fetchMyArticles,
  deleteArticle,
};
