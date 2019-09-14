import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { StyleProvider,Container, Header, Left, Body,Content, Right, Button, Icon, Title,Item,Card, CardItem } from 'native-base';

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

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

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
         <StyleProvider  style={getTheme(material)}>
            <Container>
               <Header style={{height:36,backgroundColor:'#FFFFFF',borderWidth:0}}>
                  <Left>
                      <Button transparent></Button>
                  </Left>
                  <Body style={{justifyContent: "center", alignItems: "center", }} >
                     <Title style={{fontSize:20,color: '#34C47C'}}>One Food</Title>
                  </Body>
                  <Right>
                    <Icon name="cart" style={{fontSize:20,color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} />
                  </Right>
               </Header>

               <Content padder>
                  <View style="">

                    <View style={{height:50}}>
                       <Search />
                    </View>

                   <View style={{height:170,}}>
                      <HotCoursel />
                   </View>

                    <View style={{height:40,backgroundColor:'#ffffff'}}>
                        <Card transparent style={{height:20}}>
                            <TouchableOpacity style={{height:20,backgroundColor:'transparent'}}>
                                <CardItem>
                                  <Left>
                                    <Button transparent>
                                      <Text style={{fontSize:20}}>Feature</Text>
                                    </Button>
                                  </Left>

                                  <Right>
                                    <Item>
                                        <Text>View all </Text>
                                        <Icon name='right' type="AntDesign"/>
                                    </Item>
                                  </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </View>

                    <View style={{height:250}}>
                       <FeatureCoursel />
                    </View>

                  </View>
               </Content>
            </Container>
        </StyleProvider>
    );
  }
}


HomePageScreen.defaultProps = {
}

HomePageScreen.ProType = {
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