import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Button } from '@material-ui/core';

import authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  title: {
    color: 'black',
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <div>
        <h1 style={styles.title}>Login page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label">
              Email
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">
              Password
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.login(data)),
});

export default connect(null, mapDispatchToProps)(LoginView);
