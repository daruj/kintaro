import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Login                from 'app/views/auth/login';
import { authenticate }     from 'app/action_creators/session_action_creator';
import { isTokenSet }       from 'app/api/auth_token';


const select = (state) => ({
  authenticationError: state.session.authenticationError
});

/**
* This is the entry point for any page that requires a logged in user
*/
@connect(select)
class LoginContainer extends Component {

  componentWillMount() {
    if (isTokenSet()) {
      this.props.history.pushState(null, '/home');
    }
  }

  _handleSubmit({ email, password }) {
    const { dispatch } = this.props;

    dispatch(authenticate(email, password)).then((result) => {
      if (result.apiError) return;

      this.props.history.pushState(null, '/home');
    });
  }

  render() {
    return (
      <Login
        onSubmit={this._handleSubmit.bind(this)}
        authenticationError={this.props.authenticationError}
      />
    );
  }

}
LoginContainer.propTypes = {
  history: React.PropTypes.shape({
    pushState: React.PropTypes.func
  }),
  authenticationError: React.PropTypes.shape({}),
  dispatch: React.PropTypes.func
};
export default LoginContainer;
