/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.isAuthenticated;

const getCurrentUser = state => state.auth.user;

export default { getIsAuthenticated, getCurrentUser };
