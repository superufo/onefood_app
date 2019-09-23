import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground,AsyncStorage,Dimensions,StyleSheet} from "react-native";
import { Input,Container,View,Header,Left,Body, Right,Button, Content,Icon,Title,Subtitle ,List, ListItem, Text, Separator,Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

import DeviceStorage from '../../src/utils/DeviceStorage';
import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';

import Lightbox from '../base_components/BaseLightbox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import API from '../../src/service/home';

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
  buttonstyle:{
    width:screenWidth-20,
    textAlign:'center',
    textAlignVertical:'center',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#34C47C',
    marginBottom:2
  }
});

class AddGoodsModel extends Component {
      constructor(props) {
          super(props);

          this.state = {
            id:'',
            ename:'',
            price:0.00,
            num:1,
            unit:'$',
            sumprice:0.00,
            url:'',
            goods:'',
            errorInfo:''
          };

          this.fetchData(this.props.id)
      }

      componentWillReceiveProps(nextProps) {
          this.fetchData(nextProps.id)
      }

      async fetchData(goodsId) {
          let res =   await API.getGoodsInfo(goodsId)

          let  goods =  res.data.data.content[0]
          alert(res.data.data.content[0].price)

          if (res.data.status === 0) {
               this.setState({
                  goods:res.data.data.content[0],
                  url:goods.goodsPics[0],
                  num:1,
                  price:goods.price,
                  ename:goods.ename,
                  id:goods.id,
                  unit:res.data.data.content[0].unit,
                  sumprice:res.data.data.content[0].price,
               });
             } else {
               this.setState({
                    errorInfo: res.data.message,
               })
          }
      }

      render() {
        return (
          <Lightbox verticalPercent={0.4} horizontalPercent={1} justifyContent={'flex-end'}>
            <View>
                <List>
                    <ListItem thumbnail>
                      <Left>
                        <Thumbnail square source={{uri:this.state.url}} />
                      </Left>
                      <Body>
                        <Text>{this.state.ename}</Text>
                        <Text note numberOfLines={1}>{parseFloat(this.state.price).toFixed(2)}{this.state.unit}</Text>
                      </Body>
                      <Right>
                         <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus' />
                         <Input style={{wifth:40}}  value={this.state.num}  />
                         <Icon style={{fontSize:15,color:'#FF2650'}}  name='minus' />
                      </Right>
                    </ListItem>
                </List>

                <Text style={{fontSize:25,fontWeight:"900",color:'#FF2650',marginBottom:5}} >
                        summary price:{parseFloat(this.state.sumprice).toFixed(2)}{this.state.unit}
                </Text>

                <Button primary style={styles.buttonstyle} title="Close" onPress={this.closeModal}><Text style={{fontSize:14,}}>Add To Cart</Text></Button>
            </View>
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