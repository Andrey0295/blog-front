import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient mb-5 d-flex justify-content-between">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
