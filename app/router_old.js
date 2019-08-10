/* eslint-disable react/prop-types */
import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import WelcomeScreen from './screens/WelcomeScreen';
import TabNavigation from './screens/TabNavigation'


const AppRouter = createStackNavigator(
    {
        tabFooter: TabNavigation,
        Welcome : WelcomeScreen
    },
    {
        initialRouteName: 'tabFooter',
        navigationOptions: {
            header: null
        }
    }
);

export default AppRouter;