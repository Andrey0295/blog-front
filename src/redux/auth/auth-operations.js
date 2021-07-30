/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://frozen-cliffs-66247.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = registerData => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/signup', JSON.stringify({ user: registerData }))
    .then(res => {
      token.set(res.headers.authorization);
      dispatch(authActions.registerSuccess(res));
    })
    .catch(({ message }) => dispatch(authActions.registerError(message)));
};

const login = loginData => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/login', JSON.stringify({ user: loginData }))
    .then(res => {
      token.set(res.headers.authorization);
      dispatch(authActions.loginSuccess(res));
    })
    .catch(({ message }) => dispatch(authActions.loginError(message)));
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .delete('/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logoutError(message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();
  if (!persistToken) {
    return;
  }

  token.set(persistToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/current_user')
    .then(res => {
      dispatch(authActions.getCurrentUserSuccess(res));
      console.log(res);
    })
    .catch(({ message }) => dispatch(authActions.getCurrentUserError(message)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
