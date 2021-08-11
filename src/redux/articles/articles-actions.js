/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const fetchArticlesRequest = createAction('articles/fetchArticlesRequest');
const fetchArticlesSuccess = createAction('articles/fetchArticlesSuccess');
const fetchArticlesError = createAction('articles/fetchArticlesError');

const fetchMyArticlesRequest = createAction('articles/fetchMyArticlesRequest');
const fetchMyArticlesSuccess = createAction('articles/fetchMyArticlesSuccess');
const fetchMyArticlesError = createAction('articles/fetchMyArticlesError');

const addArticlesRequest = createAction('articles/addArticlesRequest');
const addArticlesSuccess = createAction('articles/addArticlesSuccess');
const addArticlesError = createAction('articles/addArticlesError');

const editArticlesRequest = createAction('articles/editArticlesRequest');
const editArticlesSuccess = createAction('articles/editArticlesSuccess');
const editArticlesError = createAction('articles/editArticlesError');

const deleteArticlesRequest = createAction('articles/deleteArticlesRequest');
const deleteArticlesSuccess = createAction('articles/deleteArticlesSuccess');
const deleteArticlesError = createAction('articles/deleteArticlesError');

const changeFilter = createAction('articles/changeFilter');

const onEnableLoader = createAction('articles/onEnableLoader');
const onDisableLoader = createAction('articles/onDisableLoader');

export default {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesError,
  fetchMyArticlesRequest,
  fetchMyArticlesSuccess,
  fetchMyArticlesError,
  addArticlesRequest,
  addArticlesSuccess,
  addArticlesError,
  editArticlesRequest,
  editArticlesSuccess,
  editArticlesError,
  deleteArticlesRequest,
  deleteArticlesSuccess,
  deleteArticlesError,
  changeFilter,
  onEnableLoader,
  onDisableLoader,
};
