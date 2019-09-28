import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../src/store/index';
import AppRouter from './router';
import LoadingView from './base_components/LoadingView';

import { YellowBox } from 'react-native';

import { Root } from "native-base";
import { Actions } from 'react-native-router-flux';

import AsyncStorage from '@react-native-community/async-storage';

//屏蔽黄屏广告  也可以使用    console.warn('')  console.error('')  来调试
console.disableYellowBox = false;


//isMounted(...)is deprecated in plain JavaScript React classes解决方法
YellowBox.ignoreWarnings(['Warning', 'Module']);
//https://www.jianshu.com/p/8a2b9be974a7  关于 PersistGate
export default class App extends Component {
  componentWillMount(){
       AsyncStorage.getItem("authToken").then( (token)=>{
         if( token!=null &&  token!="" ){
           Actions.rewardScreen();
         }
       });
  }

  render() {
    return (
        <Root>
          <Provider store={store}>
                <PersistGate loading={<LoadingView />} persistor={persistor}>
                    <AppRouter />
                </PersistGate>
          </Provider>
        </Root>
    );
  }
}

