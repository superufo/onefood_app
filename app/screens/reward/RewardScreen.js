import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RewardIndex from '../../components/RewardIndex';

class RewardScreen extends Component {
  render() {
    return (
     <RewardIndex />
    );
  }
}

RewardScreen.defaultProps = {
}

RewardScreen.ProType = {
}

function initMapStateToProps(State){
  return {}
}

function InitDispachTOProps(state){
    return {}
}

export default connect(initMapStateToProps,InitDispachTOProps)(RewardScreen);