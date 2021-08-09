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
  [editArticlesSuccess]: (state, { payload }) => [payload, ...state],
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
