import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RewardIndex from '../../components/reward/RewardIndex';

class RewardScreen extends Component {
  render() {
    return (
     <RewardIndex  cartData={this.props.cartData} />
    );
  }
}

RewardScreen.defaultProps = {
  cartData: null,
}

RewardScreen.PropTypes = {
    cartData: PropTypes.object,
}

function initMapStateToProps(state){
  // store 数据传递过来  与本页面定义的state数据不同集合
  // console.log("initMapStateToProps this.state:",state,"------------------------")
  return {
      cartData: state.cart.cartData,
  };
}

function InitDispachTOProps(dipatch){
    return bindActionCreators({

      }, dipatch);
}


export default connect(initMapStateToProps,InitDispachTOProps)(RewardScreen);