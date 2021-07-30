/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const fetchArticlesRequest = createAction('articles/fetchArticlesRequest');
const fetchArticlesSuccess = createAction('articles/fetchArticlesSuccess');
const fetchArticlesError = createAction('articles/fetchArticlesError');

const addArticlesRequest = createAction('articles/addArticlesRequest');
const addArticlesSuccess = createAction('articles/addArticlesSuccess');
const addArticlesError = createAction('articles/addArticlesError');

const deleteArticlesRequest = createAction('articles/deleteArticlesRequest');
const deleteArticlesSuccess = createAction('articles/deleteArticlesSuccess');
const deleteArticlesError = createAction('articles/deleteArticlesError');

const changeFilter = createAction('articles/changeFilter');

export default {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesError,
  addArticlesRequest,
  addArticlesSuccess,
  addArticlesError,
  deleteArticlesRequest,
  deleteArticlesSuccess,
  deleteArticlesError,
  changeFilter,
};
