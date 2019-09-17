import React, { Component } from "react";
import { Image,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label,Item,Input } from 'native-base';
import debounce from 'lodash/debounce';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import commonColor from '../../../native-base-theme/variables/commonColor';

import Assets from '../../../src/constants/assets';
import BR from '../../base_components/BR';

import storage from 'redux-persist/lib/storage';
import { Actions } from 'react-native-router-flux';

class Search extends Component {
      render(){
         const {changeSearchkey, searchAction} = this.props

         return (
             <View style={{height:50,marginTop:-10,marginBottom:-10,backgroundColor: 'rgba(0, 0, 0,0.01)'}} transparent >
                 <Item style={{paddingLeft:30,}}   onPress={searchAction}>
                   <Icon style={{fontSize:14, color: '#34C47C'}} name="ios-search" />
                   <Input style={{fontSize:14, color: '#34C47C'}}  placeholder="Search food you like" onChangeText={debounce(changeSearchkey, 1000)} />
                 </Item>
              </View>
         )
      }

}

export default Search;