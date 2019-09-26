/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Input,Form,Container,View,Header,Button,Text } from 'native-base';

import Item from '../components/Checkout/Item';
import AppBase from '../base_components/AppBase';
import BillReceipt from '../components/Checkout/BillReceipt';
import BR from '../base_components/BR';
import ViewRow from '../base_components/ViewRow';
import PrimaryText from '../base_components/PrimaryText';
import { deleteCartItem, fetchCartItems, updateCartItemQty } from '../../src/actions/cart';
import { createOrder } from '../../src/actions';

import { fetchAddress, fetchDefaultAddress, addAddress, deleteAddress } from '../../src/actions/my';

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
  componentDidMount() {
    this.props.fetchCartItems();
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
        id: item.food.id,
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

 renderAddressItems = (addressData)=>{
        if (addressData.length > 0) {

        } else {
           return (<View>
                       <Button onPress={() => Actions.choiceAddressModel({id: ''})}>
                         <Text>
                             Add Address
                         </Text>
                       </Button>
                   </View>);
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
    const { cartData,address } = this.props;

    let totalBill = parseFloat(cartData.reduce(
      (total, item) => total + (item.price * item.qty),
      0,
    ));
    const taxPercent = this.props.shop.tax * 100;

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
          {this.renderAddressItems(address)}
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
};

CartScreen.propTypes = {
  shop:PropTypes.object,

  cartData: PropTypes.array.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  fetchCartItems: PropTypes.func.isRequired,
  updateCartItemQty: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  createdOrder: PropTypes.object,

  address: PropTypes.array.isRequired,
  defaultAddress:PropTypes.object,
  fetchAddress:PropTypes.func.isRequired,
  fetchDefaultAddress:PropTypes.func.isRequired,
  addAddress:PropTypes.func.isRequired,
  deleteAddress:PropTypes.func.isRequired,

};

function initMapStateToProps(state) {
  return {
    cartData: state.cart.cartData,
    shop: state.auth.shop,
    address:state.my.address,
    createdOrder: state.orders.createdOrder,

    fetchAddress: state.my.fetchAddress,
    fetchDefaultAddress: state.my.fetchDefaultAddress,
    addAddress: state.my.addAddress,
    deleteAddress: state.my.deleteAddress,
  };
}

function initMapDispatchToProps(dipatch) {
  return bindActionCreators({
    deleteCartItem,
    fetchCartItems,
    updateCartItemQty,
    createOrder,
  }, dipatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(CartScreen);
