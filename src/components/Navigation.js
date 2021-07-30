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
    color: 'blue',
  },
};

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact
          to="/articles"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Articles
        </NavLink>
      )}
      {isAuthenticated && <Filter />}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps, null)(Navigation);
