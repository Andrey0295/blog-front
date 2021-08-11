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

class RegisterForm extends Component {
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
    const { onRegister } = this.props;
    e.preventDefault();

    onRegister(this.state);

    this.setState({ email: '', password: '' });
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
        <h1>Registration page</h1>

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
          {({ errors, touched, isValidating }) => (
            <Form onSubmit={this.handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label">
                  Email
                  <Field
                    name="email"
                    type="email"
                    value={email}
                    onFocus={this.onInputFocus}
                    onChange={this.handleChange}
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
                Registration
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
  onRegister: data => dispatch(authOperations.register(data)),
  resetError: () => dispatch(authAction.resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
