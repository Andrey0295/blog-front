import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import authAction from '../redux/auth/auth-action';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().email('Invalid password').required('Required'),
});

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

  onInputFocus = () => {
    if (this.props.isError) {
      this.props.resetError();
    }
  };

  componentWillUnmount() {
    if (this.props.isError) {
      this.props.resetError();
    }
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>

        {this.props.isError && (
          <div className="alert alert-danger" role="alert">
            {this.props.isError}
          </div>
        )}

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => (
            <Form onSubmit={this.handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label">
                  Email
                  <Field
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onFocus={this.onInputFocus}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  {this.state.email === '' ? (
                    <div>
                      <p className="text-danger ">{errors.email}</p>
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">
                  Password
                  <Field
                    name="password"
                    type="password"
                    value={this.state.password}
                    onFocus={this.onInputFocus}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter password (at least 6 symb)"
                    minLength="6"
                  />
                  {this.state.password === '' ? (
                    <div>
                      <p className="text-danger ">{errors.password}</p>
                    </div>
                  ) : null}
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isError: authSelectors.getErrorData(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.login(data)),
  resetError: () => dispatch(authAction.resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
