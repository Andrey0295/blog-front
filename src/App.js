import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import Container from './components/Container/Container';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import AppBar from './components/AppBar/AppBar';
import LoaderBlock from './components/LoaderBlock/LoaderBlock';
// import Alert from '@material-ui/core/Alert';
// import AlertTitle from '@material-ui/core/AlertTitle';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);

const ArticlesView = lazy(() =>
  import('./views/ArticlesView' /* webpackChunkName: "articles-view" */),
);

const MyArticlesView = lazy(() =>
  import('./views/MyArticlesView' /* webpackChunkName: "my-articles-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Container>
          {this.props.isLoading ? (
            <LoaderBlock />
          ) : (
            <Suspense fallback>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <PublicRoute
                  path="/register"
                  restricted
                  component={RegisterView}
                  redirectTo="/"
                />
                <PublicRoute
                  path="/login"
                  restricted
                  component={LoginView}
                  redirectTo="/articles"
                />
                <PrivateRoute
                  path="/articles"
                  component={ArticlesView}
                  redirectTo="/login"
                />
                <PrivateRoute
                  path="/my-articles"
                  component={MyArticlesView}
                  redirectTo="/login"
                />
              </Switch>
            </Suspense>
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: authSelectors.getLoadingStatus(state),
  isError: authSelectors.getErrorData(state),
});

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
