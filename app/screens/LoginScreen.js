/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { authLogin,loginCheck } from '../../src/actions/index';
import LoginComponent from '../components/Login';

import storage from 'redux-persist/lib/storage';
import { Actions } from 'react-native-router-flux';
import DeviceStorage from '../../src/utils/DeviceStorage';
import {Toast} from "native-base";

import { validateEmail,validateMobile,noSpecialSymbols } from '../utils/Validate';


//var locStore = JSON.parse(localStorage.getItem('persist:root'));
//locStore.webState = JSON.stringify(state);
class LoginScreen extends Component {
  displayName = 'LoginScreen';

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loginType:1,
      showToast: false
    };
  }

//  componentDidMount() {
//    //await AsyncStorage.clear(); 注销
//    /*const { loginMessage } = this.props;
//    if (loginMessage !== null &&  loginMessage.token!=null && loginMessage.token && loginMessage.token.length > 10) {
//       Toast.show({text:"login Success",buttonText: "Okay",duration:1000,position:"bottom",type: "success"});
//       Actions.rewardScreen();
//    }*/
//
//    const authToken =  DeviceStorage.get("authToken");
//    if( typeof authToken==Object && authToken!=null ){
//      Actions.rewardScreen();
//    }
//  }

    componentDidMount() {
      AsyncStorage.clear(); //注销
      const loginMessageInStorage =  AsyncStorage.getItem("loginMessage");
      if( loginMessageInStorage.token!=null ||  loginMessageInStorage.token!="" ){
           this.handleRedirect(loginMessageInStorage);
      } else {
          const { loginMessage } = this.props;
          if (loginMessage !== null && loginMessage.token && loginMessage.token.length > 10) {
             this.handleRedirect(loginMessage);
          }
      }
  }

  componentWillReceiveProps(nextProps, nextContext) {
     this.handleRedirect(nextProps.loginMessage);
  }

  handleLoginSubmit = () => {
    console.log("handleLoginSubmit:this.state:",this.state);
    const { email, password,loginType } = this.state;

    if( !validateEmail(email) && !validateMobile(email) ){
       return this.updateCheck("UserEmail  or Mobile format  Is not Right,pliease Verify it！");
    }

    this.props.authLogin(email, password,loginType);
  };

  handleEmailChange = (email) => {
    console.log("handleEmailChange email:",email)
    var loginType = 1

    if ( validateMobile(email) ){
         loginType = 2
    }

    this.setState({
       email,
       loginType
    });

    //this.refs.password.
  };

  updateCheck = (checkMess) => {
       this.setState({loginError:{message:checkMess}});
       const { loginError } = this.state;
       this.props.loginCheck(loginError,{registerError:null});
       return false
  };

  handlePasswordChange = (password) => {
    this.setState({
      password,
    });
  };

  handleRedirect = (loginMessage) => {
    if (loginMessage &&  loginMessage.token!=null && loginMessage.token) {
      //alert("handleRedirect00");
      try {
        //alert("handleRedirect11");
        Actions.rewardScreen();
      } catch (e) {
        console.log(e);
      }
    }
  };



  render() {
    const { loginLoading, loginMessage } = this.props;
    if (loginMessage && loginMessage.token) {
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
