import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Search from '../components/home/Search';
import HotCoursel from '../components/home/HotCoursel';
import FeatureCoursel from '../components/home/FeatureCoursel';

import { Actions } from 'react-native-router-flux';
import storage from 'redux-persist/lib/storage';
import DeviceStorage from '../../src/utils/DeviceStorage';

import { AsyncStorage} from  'react-native';

class HomePageScreen extends Component {
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
            <Container>
               <Header style={{height:46}}>
                  <Left>
                      <Button transparent></Button>
                  </Left>
                  <Body style={{justifyContent: "center", alignItems: "center",}} >
                     <Title style={{fontSize:25,color: '#34C47C'}}>One Food</Title>
                  </Body>
                  <Right>
                    <Icon name="cart" style={{fontSize:25,color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} />
                  </Right>
               </Header>

               <Content padder>
                  <view style="flex:1">

                    <view style="flex:1">
                       <Search />
                    </view>

                    <view style="flex:1">
                       <HotCoursel />
                    </view>

                    <view style="flex:1">
                       <FeatureCoursel />
                    </view>

                  </view>
               </Content>


            </Container>
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

export default connect(initMapStateToProps,InitDispachTOProps)(HomePageScreen);