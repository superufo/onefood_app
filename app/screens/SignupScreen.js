/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { authRegister,loginCheck } from '../../src/actions/index';
import SignupComponent from '../components/Signup';
import {validateEmail,validateMobile,noSpecialSymbols} from '../utils/Validate';
import { Actions } from 'react-native-router-flux';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      useremail: null,
      mobile: null,
      password: null,
      repeatpassword: null,
      firstname: null,
      lastname: null,
    };
  }

   componentWillReceiveProps(nextProps, nextContext) {
       this.handleRedirect(nextProps.registerMessage);
    }

    handleRedirect = (registerMessage) => {
        if (registerMessage) {
          try {
            //Actions.rewardScreen();
            console.log("***************componentWillReceiveProps",{useremail:this.state.useremail,mobile:this.state.mobile});
            Actions.choiceSendTypeScreen({useremail:this.state.useremail,mobile:this.state.mobile,});
          } catch (e) {
            console.log(e);
          }
        }
    };

   componentDidMount() {
       const { registerMessage,registerError,...rest } = this.props;
       if( registerMessage !== null  ){
         //Actions.rewardScreen();
         console.log("***************componentDidMount",{useremail:this.state.useremail,mobile:this.state.mobile});
         Actions.choiceSendTypeScreen({useremail:this.state.useremail,mobile:this.state.mobile,choice:"mobile"});
       }
  }

  handleSignUpSubmit = () => {
       const { account,useremail,mobile,password,repeatpassword,firstname,lastname } = this.state;

       if( !validateEmail(useremail) ){
           return this.updateCheck("UserEmail Is not Right,pliease Verify it！");
       }

       if( !validateMobile(mobile) ){
           return this.updateCheck("Mobile Is not Right,pliease Verify it！");
       }

       if( account.length<5 && !noSpecialSymbols(account)  ){
           return this.updateCheck("account must biggest than 4 char And don not contain Special Symbols！");
       }

       if( firstname.length<2  ){
            return this.updateCheck("Firstname must biggest than 1 char And don not contain Special Symbols！");
       }

       if( firstname.length<2  ){
           return this.updateCheck("Firstname must biggest than 1 char And don not contain Special Symbols！");
       }

       if( password.replace(/\s/g,"") != repeatpassword.replace(/\s/g,"") ){
          return this.updateCheck("Input password twice is Not same！");
       }

       this.props.authRegister(account,useremail,mobile,password,firstname,lastname);
  };

  updateCheck = (checkMess) => {
     let registerErrorObj = {message:checkMess};
     this.setState({registerError:{message:checkMess}});
     const { registerError,...rest } = this.state;
     console.log(registerError);
     this.props.loginCheck({loginError:null},registerError);
     return false
  };

  handleEmailChange = (useremail) => {
    this.setState({
      useremail,
    });
  };

  handlePasswordChange = (password) => {
    this.setState({
      password,
    });
  };

  handleRepeatePasswordChange = (repaetpassword) => {
        this.setState({
          repeatpassword,
        });
  };

  handleAccountChange = (account) => {
        this.setState({
          account,
        });
  };

  handleMobileChange = (mobile) => {
      this.setState({
        mobile,
      });
  };

 handleFirstnameChange = (firstname) => {
      this.setState({
        firstname,
      });
  };

  handleLastnameChange = (lastname) => {
        this.setState({
          lastname,
        });
  };

  handleRepeatPasswordChange = (repeatpassword) => {
          this.setState({
            repeatpassword,
          });
    };

  render() {
    const { registerLoading, registerError, registerMessage,...rest } = this.props;
    const { account,useremail,mobile,password,repeatpassword,firstname,lastname } = this.state;
    const disableSignUp = ( !useremail || useremail.length === 0
                            || !password || password.length === 0
                            || !mobile || mobile.length === 0
                            || !repeatpassword || repeatpassword.length === 0
                            || !firstname || firstname.length === 0
                            || !lastname  || lastname.length === 0
                          );

    return (
      <SignupComponent
        loading={registerLoading}
        registerMessage={registerMessage}
        registerError={registerError}
        disableSignUp={disableSignUp}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onRepeatPasswordChange={this.handleRepeatPasswordChange}
        onAccountChange={this.handleAccountChange}
        onMobileChange={this.handleMobileChange}
        onFirstnameChange={this.handleFirstnameChange}
        onLastnameChange={this.handleLastnameChange}
        onSignupSubmit={this.handleSignUpSubmit}
      />);
  }
}

SignupScreen.defaultProps = {
  registerError: null,
  registerMessage: null,
  registerLoading: false,
};

SignupScreen.propTypes = {
  registerMessage: PropTypes.object,
  registerLoading: PropTypes.bool,
  registerError: PropTypes.object,
  authRegister: PropTypes.func.isRequired,
  loginCheck:PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    registerMessage: state.auth.registerMessage,
    registerError: state.auth.registerError,
    registerLoading: state.auth.registerLoading,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    authRegister,loginCheck
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(SignupScreen);
