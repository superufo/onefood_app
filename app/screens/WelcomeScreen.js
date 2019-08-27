import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Welcome from '../components/Welcome';

import { Actions } from 'react-native-router-flux';
import storage from 'redux-persist/lib/storage';
import DeviceStorage from '../../src/utils/DeviceStorage';

import { AsyncStorage} from  'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount(){
      /*AsyncStorage.getItem("authToken").then( (val)=>{
        if(  val!=null &&  val!="" ){
          Actions.rewardScreen();
        }
      });*/
  }

  componentDidMount() {
  }

  render() {
    return (
     <Welcome />
    );
  }
}


WelcomeScreen.defaultProps = {
}

WelcomeScreen.ProType = {
}

function initMapStateToProps(State){
  return {}
}

function InitDispachTOProps(state){
    return {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default connect(initMapStateToProps,InitDispachTOProps)(WelcomeScreen);