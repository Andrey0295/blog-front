import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
// import { Button } from '@material-ui/core';

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

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    // password_confirmation: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // let user = {
    // email: this.state.email,
    // password: this.state.password
    // }
    // axios
    //   .post(`http://localhost:3000/users`, user)
    //   .then(res => console.log('Register was successfully!!!'))
    //   .catch(err => console.log(err.message));
    this.props.onRegister(this.state);

    this.setState({ email: '', password: '' });
    //    password_confirmation: '';
  };

  render() {
    return (
      <div>
        <h1 className={styles.title}>Registration page</h1>
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
            Registration
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

// export default RegisterForm;

export default connect(null, mapDispatchToProps)(RegisterForm);
