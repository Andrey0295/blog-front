import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';
import Filter from './Filter/Filter';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: 'chartreuse',
  },
};

const Navigation = ({ isAuthenticated, isLoading }) => {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isAuthenticated && !isLoading && (
        <NavLink
          exact
          to="/articles"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          All articles
        </NavLink>
      )}

      {isAuthenticated && !isLoading && (
        <NavLink
          exact
          to="/my-articles"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          My articles
        </NavLink>
      )}

      {isAuthenticated && !isLoading && <Filter />}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  isLoading: authSelectors.getLoadingStatus(state),
});
export default connect(mapStateToProps, null)(Navigation);
