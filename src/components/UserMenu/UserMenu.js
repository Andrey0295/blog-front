import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
};

const UserMenu = ({ currentUser, onLogout }) => (
  <div>
    <span style={styles.name}>Hi, {currentUser}</span>
    <button className="btn btn-primary btn-block me-2" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  currentUser: authSelectors.getCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
