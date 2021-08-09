/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.isAuthenticated;

const getCurrentUser = state => state.auth.user;

const getLoadingStatus = state => state.auth.loading;

const getErrorData = state => state.auth.error;

export default {
  getIsAuthenticated,
  getCurrentUser,
  getLoadingStatus,
  getErrorData,
};
