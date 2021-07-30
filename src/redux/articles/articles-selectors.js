/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getAllArticles = state => state.articles.articles;

const getFilterValue = state => state.articles.filter;

const getVisibleArticles = createSelector(
  [getAllArticles, getFilterValue],
  (allArticles, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allArticles.filter(({ title }) =>
      title.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getAllArticles,
  getFilterValue,
  getVisibleArticles,
};
