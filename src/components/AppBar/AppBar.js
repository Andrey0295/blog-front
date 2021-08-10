import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = ({ isAuthenticated, isLoading }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient mb-5 d-flex justify-content-between fixed-top">
      <Navigation />
      {isAuthenticated && !isLoading ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  isLoading: authSelectors.getLoadingStatus(state),
});

export default connect(mapStateToProps, null)(AppBar);
