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
import DeviceStorage from '../../src/utils/DeviceStorage';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

import { getGoods,getAdv,getGoodsCatagrory } from '../../src/actions/index';

class HomePageScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentWillMount(){
  }

  componentDidMount() {
      this.props.getGoodsCatagrory()
      this.props.getGoods()
      this.props.getAdv();

      console.log("this.props:",this.props)
  }

  //foodListScreen 参数 :catagrory/:goodsName/:isFeature/:isHot/:isNew/:page/:size/:sort
  render() {
     //console.log("this.props.goodsCatagroryList:",this.props.goodsCatagroryList)
    return (
         <StyleProvider  style={getTheme(material)}>
            <Container>
               <Header style={{height:36,backgroundColor:'#FFFFFF',borderWidth:0}}>
                  <Left>
                      <Button transparent></Button>
                  </Left>
                  <Body style={{justifyContent: "center", alignItems: "center", paddingLeft:60}} >
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
                      <HotCoursel advList={this.props.advList} />
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
                                        <Text onPress={() => Actions.foodListScreen({catagrory:null,goodsName:null,isFeature:1,isHot:null,isNew:null,page:0,size:10,sort:'id desc'})}  >View all </Text>
                                        <Icon style={{fontSize:14,color:'#1A1824'}}  name='right' type="AntDesign"/>
                                    </Item>
                                  </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </View>

                    <View style={{height:290}}>
                       <FeatureCoursel goodsList={this.props.goodsList}/>
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
                      <CategroryList  goodsCatagroryList={this.props.goodsCatagroryList} />
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
    getGoods:PropTypes.func.isRequired,
    getAdv:PropTypes.func.isRequired,
    getGoodsCatagrory:PropTypes.func.isRequired
}

function initMapStateToProps(state){
  // store 数据传递过来  与本页面定义的state数据不同集合
  // console.log("initMapStateToProps this.state:",state,"------------------------")
  return {
      advList: state.home.advList,
      goodsList: state.home.goodsList,
      goodsCatagroryList: state.home.catagroryFullList,
  };
}

function InitDispachTOProps(dipatch){
    return bindActionCreators({
        getGoods,getAdv,getGoodsCatagrory
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

export default connect(initMapStateToProps,InitDispachTOProps)(HomePageScreen);