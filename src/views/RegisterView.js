import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import authAction from '../redux/auth/auth-action';
// import { string } from 'yup/lib/locale';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().email('Invalid password').required('Required'),
});

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ email: '', password: '' });
  };

  onInputFocus = () => {
    if (this.props.isError) {
      this.props.resetError();
    }
  };

  render() {
    return (
      <div>
        <h1>Registration page</h1>

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
                    onFocus={this.onInputFocus}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email ? (
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
                  {errors.password && touched.password ? (
                    <div>
                      {' '}
                      <p className="text-danger">{errors.password}</p>
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
  // isError: authSelectors.getErrorData(state),
});

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
  resetError: () => dispatch(authAction.resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
