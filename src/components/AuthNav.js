import React from 'react';
import { NavLink } from 'react-router-dom';

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

const AuthNav = () => {
  return (
    <div>
      <a
        href="https://infinite-escarpment-83664.herokuapp.com/api/v1/auth/github"
        // href="http://localhost:3000/api/v1/auth/github"
        style={styles.link}
      >
        Sign up/in with GitHub
      </a>

      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
