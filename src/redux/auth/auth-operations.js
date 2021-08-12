/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import authActions from './auth-action';

axios.defaults.baseURL = 'https://infinite-escarpment-83664.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';

const token = {
  set(token) {
    axios.defaults.headers = { ...token };
  },
  unset() {
    axios.defaults.headers = '';
  },
};

const register = registerData => dispatch => {
  axios
    .post('/api/v1/auth', registerData)
    .then(res => {
      token.set(res.headers);
      dispatch(authActions.registerSuccess(res));
    })
    .catch(error => {
      dispatch(
        authActions.registerError(
          error.response?.data?.errors.full_messages[0],
        ),
      );
    });
};

const login = loginData => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('api/v1/auth/sign_in', loginData)
    .then(res => {
      token.set(res.headers);
      dispatch(authActions.loginSuccess(res));
    })
    .catch(error => {
      dispatch(authActions.loginError(error.response?.data?.errors[0]));
    });
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .delete('/api/v1/auth/sign_out')
    .then(() => {
      token.unset();
      localStorage.clear();

      dispatch(authActions.logoutSuccess());
    })
    .catch(error => {
      dispatch(authActions.logoutError(error));
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  let params = new URL(document.location).searchParams;
  let rawToken = params.get('token');

  if (rawToken) {
    const decodeToken = atob(rawToken);
    const providerToken = JSON.parse(decodeToken);
    dispatch(authActions.providerAuthSuccess(providerToken));
  }

  const {
    auth: { providerToken: persistProviderToken },
  } = getState();
  if (persistProviderToken) {
    dispatch(authActions.getCurrentUserRequest());
    let headers = {
      'access-token': persistProviderToken['token'],
      expiry: persistProviderToken.expiry,
      client: persistProviderToken.client,
      uid: persistProviderToken.uid,
      'token-type': 'Bearer',
    };

    token.set(headers);
    axios
      .get('/me', {
        headers: headers,
      })
      .then(res => {
        dispatch(authActions.getCurrentUserSuccess(res));
      })
      .catch(err => dispatch(authActions.getCurrentUserError(err)));
  }

  const {
    auth: { token: persistToken },
  } = getState();
  if (!persistToken) {
    return;
  }

  token.set(persistToken);

  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/me')
    .then(res => {
      dispatch(authActions.getCurrentUserSuccess(res));
    })
    .catch(err => dispatch(authActions.getCurrentUserError(err)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
