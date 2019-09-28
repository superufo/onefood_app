import React, { Component } from 'react';
import { TextInput, Image, TouchableOpacity, ImageBackground,AsyncStorage,Dimensions,StyleSheet} from "react-native";
import { Input,Form,Container,View,Header,Left,Body, Right,Button, Content,Icon,Title,Subtitle ,List,Item, ListItem, Text, Separator,Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

import Assets from '../../src/constants/assets';
import BR from '../base_components/BR';

import Lightbox from '../base_components/BaseLightbox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import API from '../../src/service/home';
import { updateCartItems } from '../../src/actions/cart';

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

     componentWillUnmount() {

     }

      async fetchData(goodsId) {
          let res =   await API.getGoodsInfo(goodsId)

          let  goods =  res.data.data.content[0]
          if (res.data.status === 0) {
               this.setState({
                  goods:res.data.data.content[0],
                  url:goods.goodsPics[0],
                  urls:goods.goodsPics,
                  num:1,
                  price:goods.price,
                  point:goods.point,
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

      changeNum = (num) => {
         let gnum = parseInt(num)

         if ( gnum>0 ||  gnum<1000 ){
           sumprice = this.state.price *  gnum
         } else {
           gnum = 1
           sumprice = this.state.price.price*1
         }

         this.setState({
            num:gnum,
            sumprice: sumprice,
         })
      }

     add = (num) => {
         let gnum =  parseInt(num)
         gnum = this.state.num + gnum
         let summary = 0

         if ( gnum> 0 ){
           summary = this.state.price *  gnum
         } else {
           gnum = 1
           summary = this.state.price*1
         }

         this.setState({
            num:gnum,
            sumprice: summary,
         })
     }

     addToCart = () => {
        let item = {}
        item.id = this.state.id
        item.ename = this.state.ename
        item.url = this.state.url
        item.urls = this.state.urls
        item.price = this.state.price
        item.unit = this.state.unit
        item.sumprice = this.state.sumprice

        let qty =  this.state.num
        this.props.updateCartItems(item,qty)

        this.refs.cartLightBox.closeModal()
     }

      render() {
        return (
          <Lightbox verticalPercent={0.4} horizontalPercent={1} justifyContent={'flex-end'} ref='cartLightBox' >
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
                           <Item>
                             <Icon style={{fontSize:15,color:'#FF2650'}}  name='plus'  type="AntDesign" onPress={() => this.add(1)} />
                               <Text style={{fontSize:15}} >
                                        {this.state.num}
                               </Text>
                             <Icon style={{fontSize:15,color:'#FF2650'}}  name='minus' type="AntDesign" onPress={() => this.add(-1)} />
                           </Item>
                      </Right>
                    </ListItem>
                </List>

                <Text style={{fontSize:25,fontWeight:"900",color:'#FF2650',marginBottom:5}} >
                        summary price:{parseFloat(this.state.sumprice).toFixed(2)}{this.state.unit}
                </Text>

                <Button primary style={styles.buttonstyle} title="Close" onPress={()=>this.addToCart()}><Text style={{fontSize:14,}}>Add To Cart</Text></Button>
            </View>
          </Lightbox>
        );
      }
}

AddGoodsModel.defaultProps = {
  cartData: null,
};

AddGoodsModel.propTypes = {
  cartData: PropTypes.array.isRequired,
  updateCartItems: PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    cartData: state.cart.cartData,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({updateCartItems}, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(AddGoodsModel);

{/**/}