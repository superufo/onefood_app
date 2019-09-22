import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground,AsyncStorage,Dimensions,StyleSheet} from "react-native";
import { Container,View,Header,Left,Body, Right,Button, Content,Icon,Title,Subtitle ,List, ListItem, Text, Separator,Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

import DeviceStorage from '../../src/utils/DeviceStorage';
import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';

import Lightbox from '../base_components/BaseLightbox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class AddGoodsModel extends Component {
  render() {
    return (
      <Lightbox verticalPercent={0.5} horizontalPercent={1}>
        <Text>Demo Cart : {this.props.goodsInfo}</Text>
        <Text>cart listitem</Text>
      </Lightbox>
    );
  }
}

AddGoodsModel.defaultProps = {
  cartData: null,
};

AddGoodsModel.propTypes = {
  cartData: PropTypes.object,
};

function initMapStateToProps(state) {
  return {
    cartData: state.cart.cartData,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(AddGoodsModel);

{/*

   <Lightbox verticalPercent={0.5} horizontalPercent={1}>
          <Text>Demo Lightbox: {this.props.goodsInfo}</Text>
          <Text>Allows transparency for background</Text>
        </Lightbox>

*/}