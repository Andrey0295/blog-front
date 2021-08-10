import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './articles-actions';

const {
  fetchArticlesSuccess,
  fetchMyArticlesSuccess,
  addArticlesSuccess,
  editArticlesSuccess,
  deleteArticlesSuccess,
  changeFilter,
} = actions;

const articles = createReducer([], {
  [fetchArticlesSuccess]: (_, { payload }) => payload.reverse(),
  [fetchMyArticlesSuccess]: (_, { payload }) => payload.reverse(),
  [addArticlesSuccess]: (state, { payload }) => [payload, ...state],

  [editArticlesSuccess]: (state, { payload }) =>
    state.map(article =>
      article.id === payload.id
        ? { ...article, title: article.title, body: article.body }
        : article,
    ),

  [deleteArticlesSuccess]: (state, { payload }) =>
    state.filter(article => article.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  articles: articles,
  filter: filter,
});
