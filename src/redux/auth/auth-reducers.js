import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-action';
import articlesActions from '../articles/articles-actions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.data.data.email,
  [authActions.loginSuccess]: (_, { payload }) => payload.data.data.email,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data.email,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.headers,
  [authActions.loginSuccess]: (_, { payload }) => payload.headers,
  [authActions.logoutSuccess]: () => null,
});

const providerToken = createReducer(null, {
  [authActions.providerAuthSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [articlesActions.fetchArticlesRequest]: () => true,
  [articlesActions.fetchArticlesSuccess]: () => false,
  [articlesActions.fetchArticlesError]: () => false,
  [articlesActions.fetchMyArticlesRequest]: () => true,
  [articlesActions.fetchMyArticlesSuccess]: () => false,
  [articlesActions.fetchMyArticlesError]: () => false,
  [articlesActions.addArticlesRequest]: () => true,
  [articlesActions.addArticlesSuccess]: () => false,
  [articlesActions.addArticlesError]: () => false,
  [articlesActions.editArticlesRequest]: () => true,
  [articlesActions.editArticlesSuccess]: () => false,
  [articlesActions.deleteArticlesError]: () => false,
  [articlesActions.deleteArticlesRequest]: () => true,
  [articlesActions.deleteArticlesSuccess]: () => false,
  [articlesActions.deleteArticlesError]: () => false,
  [articlesActions.onEnableLoader]: () => true,
  [articlesActions.onDisableLoader]: () => false,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  // [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.resetError]: () => null,
});

export default combineReducers({
  user,
  token,
  providerToken,
  error,
  isAuthenticated,
  loading,
});
