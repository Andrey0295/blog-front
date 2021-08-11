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

  componentWillUnmount() {
    const { isError, resetError } = this.props;
    if (isError) {
      resetError();
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onLogin } = this.props;
    e.preventDefault();

    onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  onInputFocus = () => {
    const { isError, resetError } = this.props;
    if (isError) {
      resetError();
    }
  };

  render() {
    const { isError } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login page</h1>

        {isError && (
          <div className="alert alert-danger" role="alert">
            {isError}
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
                    value={email}
                    onChange={this.handleChange}
                    onFocus={this.onInputFocus}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  {email === '' ? (
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
                    value={password}
                    onFocus={this.onInputFocus}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter password (at least 6 symb)"
                    minLength="6"
                  />
                  {password === '' ? (
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
