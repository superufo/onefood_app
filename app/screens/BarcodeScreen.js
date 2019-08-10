import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


import React, { Component } from 'react';

import {Platform,StyleSheet} from 'react-native';
import {Text,View,Alert} from 'native-base';
import Barcode from 'react-native-smart-barcode'

type Props = {};


class BarcodeScreen extends Component {
  //构造方法
      constructor(props) {
          super(props);
          this.state = {
              viewAppear: false,
          };
      }
      componentDidMount() {
          //启动定时器
          this.timer = setTimeout(
              () => this.setState({viewAppear: true}),
              250
          );
      }
      //组件销毁生命周期
      componentWillUnmount() {
          //清楚定时器
          this.timer && clearTimeout(this.timer);
      }

      _onBarCodeRead = (e) => {
          // console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
          this._stopScan();
          Alert.alert("二维码", e.nativeEvent.data.code, [
              {text: '确认', onPress: () => this._startScan()},
          ])
      };

      _startScan = (e) => {
          this._barCode.startScan()
      };

      _stopScan = (e) => {
          this._barCode.stopScan()
      }

      render() {
          return (
              <View style={{flex: 1}}>
                  {this.state.viewAppear ?
                      <Barcode style={{flex: 1,}} ref={component => this._barCode = component}
                               onBarCodeRead={this._onBarCodeRead}/>
                      : null
                  }
              </View>
          )
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

export default connect(initMapStateToProps,InitDispachTOProps)(BarcodeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});