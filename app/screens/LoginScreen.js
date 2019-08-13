/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';


import { authLogin,loginCheck } from '../../src/actions/index';


import LoginComponent from '../components/Login';

class LoginScreen extends Component {
  displayName = 'LoginScreen';

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      showToast: false
    };
  }

  componentDidMount() {
    const { loginMessage } = this.props;
    if (loginMessage !== null && loginMessage.token && loginMessage.token.length > 10) {
      Actions.reset('drawer');
    }
  }

  async componentWillReceiveProps(nextProps, nextContext) {
    await this.handleRedirect(nextProps.loginMessage);
  }


  handleLoginSubmit = () => {
    const { email, password } = this.state;
    this.props.authLogin(email, password);
  };

  handleEmailChange = (email) => {
    console.log("handleEmailChange email:",email)
    var reg  = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if(!(reg.test(email)))
    {
       this.setState({loginError:{message:"Email Is not Right,pliease Verify it！"},email:email});
       const { loginError, email } = this.state;
       this.props.loginCheck(loginError,{registerError:null});
       return false
    }

    this.setState({
       email,
    });

    //this.refs.password.
  };

  handlePasswordChange = (password) => {
    this.setState({
      password,
    });
  };

  handleRedirect = (loginMessage) => {
    if (loginMessage && loginMessage.token) {
      try {
        Actions.reset('drawer');
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    const { loginLoading, loginMessage } = this.props;
    if (loginMessage && loginLoading.token) {
      return null;
    }

    let { loginError } = this.props;

    const { email, password } = this.state;

    // eslint-disable-next-line react/prop-types
    loginError = loginError || this.props.navigation.state.params.loginError;

    const disableLogin = (!email || email.length === 0 || !password || password.length === 0);

    return (
      <LoginComponent
        loading={loginLoading}
        onLoginSubmit={this.handleLoginSubmit}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        loginError={loginError}
        disableLogin={disableLogin}
      />);
  }
}

LoginScreen.defaultProps = {
  loginError: null,
  loginMessage: null,
};

LoginScreen.propTypes = {
  loginLoading: PropTypes.bool.isRequired,
  loginError: PropTypes.object,
  loginMessage: PropTypes.object,
  authLogin: PropTypes.func.isRequired,
  loginCheck:PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    loginError: state.auth.loginError,
    loginLoading: state.auth.loginLoading,
    loginMessage: state.auth.loginMessage,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    authLogin,loginCheck,
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(LoginScreen);
