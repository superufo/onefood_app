import React, { Component } from "react";
import { Image,  StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Container,View, Header, Left, Body,Content, Right, Button, Icon,Text,Title, Grid ,Row,StyleProvider,Label } from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import commonColor from '../../../native-base-theme/variables/commonColor';

import Assets from '../../../src/constants/assets';
import BR from '../../base_components/BR';

import storage from 'redux-persist/lib/storage';
import { Actions } from 'react-native-router-flux';

class Search extends Component {
         <Item>
           <Icon name="ios-search" />
           <Input placeholder="Search" />
           <Icon name="ios-people" />
         </Item>
         <Button transparent>
           <Text>Search</Text>
         </Button>
}