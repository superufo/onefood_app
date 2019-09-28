/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Input,Form,Container,View,Header,Button,Text,ListItem,Left,Right,Body } from 'native-base';

import Item from '../components/Checkout/Item';
import AppBase from '../base_components/AppBase';
import BillReceipt from '../components/Checkout/BillReceipt';
import BR from '../base_components/BR';
import ViewRow from '../base_components/ViewRow';
import PrimaryText from '../base_components/PrimaryText';
import { deleteCartItem, fetchCartItems, updateCartItemQty } from '../../src/actions/cart';
import { createOrder } from '../../src/actions';

import { addAddress, deleteAddress } from '../../src/actions/my';

const FooterContainer = styled.View`
  height: 5%;
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AmountContainer = styled.View`
  flex: 0.5;
  align-items: center;
  height: 100%;
  background-color: #d9d9d9;
  justify-content: center;
`;

const PayButton = styled.TouchableOpacity`
  height: 100%;
  background-color: green;
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled(PrimaryText)`
  font-weight: bold;
  color: #eee;
  font-size: 16px;
`;

class CartScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        mid: null,
      };
    }

  componentDidMount() {
    this.props.fetchCartItems();

    AsyncStorage.getItem("jwtMember").then( (res)=>{
       const jwtMember = JSON.parse(res)
       if (typeof jwtMember != 'undefined' && jwtMember!=null && jwtMember.mid!='undefined' ){
          const {image,username,mobile,facebook,google,mid,useremail} = jwtMember
          this.setState({
                   mid:mid,
          });
       }else {
          Actions.loginScreen()
       }
    });

    console.log("address:",this.props.address)
    console.log("address:",this.props.defaultAddress)
    console.log("address:",this.props.shop)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.createdOrder !== null) {
      const { createdOrder } = nextProps;
      Actions.paymentHome({
        orderId: createdOrder.id,
        totalAmount: createdOrder.totalCost,
      });
    }
  }

  handleItemValueChange = (item, qty) => {
    if (qty === 0) {
      this.props.deleteCartItem(item.id);
    } else {
      this.props.updateCartItemQty(item.id, qty);
    }
  };

  handlePayment = (totalAmount) => {
    const { cartData } = this.props;

    if (cartData.length > 0) {
      console.log("cartData:",cartData)
      const postData = cartData.map(item => ({
        id: item.id,
        quantity: item.qty,
        price: item.price,
      }));

      this.props.createOrder(postData, totalAmount);
    }
  };

  _renderItem = ({ item }) => (
    <Item
      key={item.id}
      ename={item.ename}
      price={item.price * item.qty}
      unit = {item.unit}
      qty={item.qty}
      onChange={qty => this.handleItemValueChange(item, qty)}
    />
  );

  addressHeader = ({}) =>
      (<ListItem>
        <Text>
           My Receive Address
        </Text>
        <Button transparent style={{width:50}} onPress={() => Actions.choiceAddressModel({id: ''})}>
          <Text>
              Add Address
          </Text>
        </Button>
      </ListItem>);

  renderAddressItems = (defaultAddress)=>{
        if ( defaultAddress != undefined && defaultAddress.zoneVo != undefined  ) {
           return ( <View style={{elevation: 2,borderWidth: 1,borderColor: '#fcfcfc',alignItems: "flex-start",textAlignVertical:"flex-start",backgroundColor:'white'}}>
                       <ListItem transparent style={{height:30}}>
                         <Text style={{fontWeight:'bold',fontSize:16}}>
                            My Receive Address
                         </Text>
                         <Button transparent style={{width:250}} onPress={() => Actions.choiceAddressModel({id: ''})}>
                           <Text style={{fontWeight:'bold',fontSize:10}}>
                               Add Address
                           </Text>
                         </Button>
                       </ListItem>

                       <ListItem style={{height:40}}>
                         <Left>

                         </Left>
                         <Body>
                              <Text>{defaultAddress.receiverName}</Text>
                              <Text>{defaultAddress.receiverMobile}</Text>
                              <Text numberOfLines={1} note>
                                {defaultAddress.zoneVo.countryName}  {defaultAddress.zoneVo.provinceName}
                                {defaultAddress.zoneVo.cityName} {defaultAddress.zoneVo.streetName}
                                {defaultAddress.detail}
                              </Text>
                         </Body>
                         <Right>
                            <Button transparent style={{width:50}} >
                                <Text>
                                   Choice Another Address
                                </Text>
                            </Button>
                         </Right>
                      </ListItem>
                      </View>);
        } else {
             return (
               <View style={{elevation: 2,borderWidth: 1,borderColor: '#fcfcfc',alignItems: "flex-start",textAlignVertical:"flex-start",backgroundColor:'white'}}>
                    <ListItem transparent style={{height:30}}>
                         <Text style={{fontWeight:'bold',fontSize:16}}>
                            My Receive Address
                         </Text>
                         <Button transparent style={{width:250}} onPress={() => Actions.choiceAddressModel({id: ''})}>
                           <Text style={{fontWeight:'bold',fontSize:10}}>
                               Add Address
                           </Text>
                         </Button>
                    </ListItem>
                    <ListItem transparent style={{height:40}}>
                        <Text style={{justifyContent: "center", alignItems: "center", }}>
                              No address ,please add Address
                        </Text>
                    </ListItem>
               </View>
             );
        }
  }


  renderCartItems = (cartData) => {
    if (cartData.length > 0) {
      return (
        <FlatList
          style={{
            elevation: 2,
            borderWidth: 1,
            borderColor: '#fcfcfc',
          }}
          data={cartData}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      );
    }

    return (
      <ViewRow>
        <PrimaryText>
          Your Cart is empty.
        </PrimaryText>
      </ViewRow>
    );
  };

  renderBillReceipt = (billInfo) => {
    const { cartData } = this.props;

    if (cartData.length > 0) {
      return (
        <BillReceipt
          style={{
            borderTopWidth: 4,
            borderTopColor: '#eee',
          }}
          billInfo={billInfo}
        />
      );
    }
    return null;
  };

  renderFooter = (totalAmount) => {
    const { cartData } = this.props;

    if (cartData.length > 0) {
      return (
        <FooterContainer>
          <AmountContainer>
            <PrimaryText>$ {parseFloat(totalAmount).toFixed(2)}</PrimaryText>
          </AmountContainer>
          <PayButton
            onPress={() => this.handlePayment(totalAmount)}
          >
            <FooterText>
              Proceed To Pay
            </FooterText>
          </PayButton>
        </FooterContainer>
      );
    }
    return null;
  };

  render() {
    const { cartData,address,defaultAddress } = this.props;

    let totalBill = parseFloat(cartData.reduce(
      (total, item) => total + (item.price * item.qty),
      0,
    ));

    const taxPercent = 0
    if (this.props.shop.tax != undefined){
        const taxPercent = this.props.shop.tax * 100;
    }

    const tax = +(totalBill * (taxPercent / 100)).toFixed(2);
    const billInfo = [
      {
        name: 'Items Total',
        total: totalBill,
      },
      {
        name: 'Offer Discount',
        total: -18,
      },
      {
        name: `Taxes (${taxPercent}%)`,
        total: tax,
      },
      {
        name: 'Delivery Charges',
        total: 30,
      },
    ];

    totalBill += (tax + 30) - 18;

    return (
      <AppBase
        style={{
          alignItems: 'stretch',
        }}
      >
        <ScrollView>
          <BR size={10} />
          {this.renderCartItems(cartData)}
          <BR />
          {this.renderAddressItems(defaultAddress)}
          <BR />
          {this.renderBillReceipt(billInfo)}
          <BR />
        </ScrollView>
        {this.renderFooter(totalBill)}
      </AppBase>
    );
  }
}

CartScreen.defaultProps = {
  createdOrder: null,

  shop:null,
  cartData: null,
  address: null,
  defaultAddress:null,
};

CartScreen.propTypes = {
  shop:PropTypes.object,
  cartData: PropTypes.array.isRequired,
  address: PropTypes.array.isRequired,
  defaultAddress:PropTypes.object,

  deleteCartItem: PropTypes.func.isRequired,
  fetchCartItems: PropTypes.func.isRequired,
  updateCartItemQty: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  createdOrder: PropTypes.object,

  fetchAddress:PropTypes.func.isRequired,
  fetchDefaultAddress:PropTypes.func.isRequired,
  addAddress:PropTypes.func.isRequired,
  deleteAddress:PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    cartData: state.cart.cartData,
    createdOrder: state.orders.createdOrder,

    shop: state.auth.shop,
    address:state.my.address,
    defaultAddress:state.my.defaultAddress
  };
}

function initMapDispatchToProps(dipatch) {
  return bindActionCreators({
    deleteCartItem,
    fetchCartItems,
    updateCartItemQty,
    createOrder,
    addAddress,
    deleteAddress
  }, dipatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(CartScreen);
