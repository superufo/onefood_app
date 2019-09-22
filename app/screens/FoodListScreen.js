import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { StyleProvider,Container, Header, Left, Body,Content, Right, Button, Icon, Title,Item,Card, CardItem } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FoodList from '../components/foodlist/FoodList';
import FoodHeader from '../components/foodlist/FoodHeader';

import { Actions } from 'react-native-router-flux';
import DeviceStorage from '../../src/utils/DeviceStorage';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import commonColor from '../../native-base-theme/variables/commonColor';

import { getGoods } from '../../src/actions/index';

//Actions.homePage()
class FoodListScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
      };
  }

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps, nextContext) {
         this.setState({

         });
  }

  componentDidMount() {
      const { catagrory,goodsName,isFeature,isHot,isNew,sort,title} = this.props
  }

  render() {
    return (
         <StyleProvider  style={getTheme(material)}>
            <Container>
               <FoodHeader title={this.props.title} />

               <Content padder>
                   <View>
                      <FoodList catagrory={this.props.catagrory}
                                goodsName={this.props.goodsName}
                                isFeature={this.props.isFeature}
                                isHot={this.props.isHot}
                                isNew={this.props.isNew}
                                sort={this.props.sort}
                      />
                   </View>
               </Content>
            </Container>
        </StyleProvider>
    );
  }
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

export default FoodListScreen;