import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { StyleProvider,Container, Header, Left, Body,Content, Right, Button, Icon, Title,Item,Card, CardItem } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FoodList from '../components/home/CategroryList';

import { Actions } from 'react-native-router-flux';
import DeviceStorage from '../../src/utils/DeviceStorage';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

import { getGoods,getAdv,getGoodsCatagrory } from '../../src/actions/index';

class FoodListScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  componentWillMount(){
  }

  componentDidMount() {
      const { catagrory,goodsName,isFeature,isHot,isNew,page,size,sort} = this.props
      this.props.getGoods(catagrory,goodsName,isFeature,isHot,isNew,page,size,sort)
  }

  render() {
     //console.log("this.props.goodsList:",this.props.goodsList)

    return (
         <StyleProvider  style={getTheme(material)}>
            <Container>
               <Header style={{height:36,backgroundColor:'#FFFFFF',borderWidth:0}}>
                  <Left>
                      <Icon fontSize='30'  name='left'  type="AntDesign"/>
                  </Left>
                  <Body style={{justifyContent: "center", alignItems: "center", paddingLeft:60}} >
                     <Title style={{fontSize:20,color: '#34C47C'}}>One Food</Title>
                  </Body>
                  <Right>
                    <Icon name="cart" style={{fontSize:20,color: '#34C47C'}} onPress={() => Actions.cartScreen({id: ''})} />
                  </Right>
               </Header>

               <Content padder>
                   <View>
                      <FoodList  goodsList={this.props.goodsList} />
                   </View>
               </Content>
            </Container>
        </StyleProvider>
    );
  }
}

FoodListScreen.defaultProps = {
}

FoodListScreen.ProType = {
    getGoods:PropTypes.func.isRequired,
}

function initMapStateToProps(state){
  // store 数据传递过来  与本页面定义的state数据不同集合
  // console.log("initMapStateToProps this.state:",state,"------------------------")
  return {
      goodsList: state.home.goodsList,
  };
}

function InitDispachTOProps(dipatch){
    return bindActionCreators({
        getGoods
      }, dipatch);
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

export default connect(initMapStateToProps,InitDispachTOProps)(FoodListScreen);