import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { StyleProvider,Container, Header, Left, Body,Content, Right, Button, Icon, Title,Item,Card, CardItem } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Search from '../components/home/Search';
import HotCoursel from '../components/home/HotCoursel';
import FeatureCoursel from '../components/home/FeatureCoursel';
import CategroryList from '../components/home/CategroryList';

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

                    <View style={{height:40,backgroundColor:'#ffffff',color:'#1A1824'}}>
                        <Card transparent style={{height:20}}>
                            <TouchableOpacity style={{height:20,backgroundColor:'transparent'}}>
                                <CardItem>
                                  <Left>
                                    <Button transparent>
                                      <Text style={{fontSize:24,}}>Feature</Text>
                                    </Button>
                                  </Left>

                                  <Right style={{fontSize:14,color:'#1A1824',textAlign:'center',textAlignVertical:'center'}}>
                                    <Item>
                                        <Text>View all </Text>
                                        <Icon style={{fontSize:14,color:'#1A1824'}}  name='right' type="AntDesign"/>
                                    </Item>
                                  </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </View>

                    <View style={{height:290}}>
                       <FeatureCoursel />
                    </View>

                    <View style={{height:40,backgroundColor:'#ffffff',color:'#1A1824'}}>
                        <Card transparent style={{height:20}}>
                            <TouchableOpacity style={{height:20,backgroundColor:'transparent'}}>
                                <CardItem>
                                  <Left>
                                    <Button transparent>
                                      <Text style={{fontSize:24,}}>Full Menu</Text>
                                    </Button>
                                  </Left>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </View>

                   <View>
                      <CategroryList />
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