import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../src/store/index';
import AppRouter from './router';
import LoadingView from './base_components/LoadingView';

import { YellowBox } from 'react-native';

import { Root } from "native-base";

//isMounted(...)is deprecated in plain JavaScript React classes解决方法
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module  ']);
//https://www.jianshu.com/p/8a2b9be974a7  关于 PersistGate
export default class App extends Component {
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

