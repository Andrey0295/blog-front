import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import articlesActions from '../redux/articles/articles-actions';

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

class AuthNav extends Component {
  componentWillUnmount() {
    this.props.disableLoading();
  }

  handleLinkClick = () => {
    this.props.enableLoading();
  };

  render() {
    return (
      <div>
        <a
          onClick={this.handleLinkClick}
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
  }
}

const mapDispatchToProps = dispatch => ({
  enableLoading: () => dispatch(articlesActions.onEnableLoader()),
  disableLoading: () => dispatch(articlesActions.onDisableLoader()),
});

export default connect(null, mapDispatchToProps)(AuthNav);
