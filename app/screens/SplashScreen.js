/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { authLogin } from '../../src/actions/index';
import SplashComponent from '../components/Splash';

class SplashScreen extends Component {
  displayName = 'SplashScreen';

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SplashComponent
      />);
  }
}

LoginScreen.defaultProps = {

};

LoginScreen.propTypes = {

};

function initMapStateToProps(state) {
  return {

  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(LoginScreen);
