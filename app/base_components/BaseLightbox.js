import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { Button,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import BR from './BR.js';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
    justifyContent:  PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 500,
      toValue: 1,
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 500,
      toValue: 0,
    }).start(Actions.pop);
  };

  _renderLightBox = () => {
    const { children, horizontalPercent = 1, verticalPercent = 1,justifyContent='center'} = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
    return (
      <View
        style={{
          width,
          height,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.9)',
        }}
      >
        {children}
        <View>
            <BR size='10' />
            <Button bordered success style={[styles.closestyle,{width:width-20}]} title="Close" onPress={this.closeModal}>
                <Text style={{fontSize:14,}}>Close</Text>
            </Button>
       </View>
      </View>
    );
  };

  render() {
    const { children, horizontalPercent = 1, verticalPercent = 1,justifyContent='center'} = this.props;
    return <Animated.View style={[styles.container, {opacity: this.state.opacity},{justifyContent:justifyContent}]}>{this._renderLightBox()}</Animated.View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex:1,
    alignItems:'center'
  },
  closestyle:{
     textAlign:'center',
     textAlignVertical:'center',
     justifyContent:'center',
     alignItems: 'center',
     marginBottom:2
  }
});