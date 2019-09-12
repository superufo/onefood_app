/* eslint-disable react/prop-types */
import React from 'react';
import { Drawer, Router, Scene,Stack ,Tabs,Overlay,Modal ,Lightbox  } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Colors from '../src/constants/colors';
import SignupScreen from './screens/SignupScreen';
import RestaurantInfoScreen from './screens/RestaurantInfoScreen';
import CuisineRestaurantsScreen from './screens/CuisineRestaurantsScreen';
import CartScreen from './screens/CartScreen';
import PaymentHome from './screens/Payment/Home';
import PaymentComplete from './screens/Payment/Complete';
import PaymentFailed from './screens/Payment/Failed';
import SideDrawer from './screens/SideDrawer';
import DrawerImage from './components/DrawerImage';
import OrdersList from './screens/OrderListScreen';

import WelcomeScreen from './screens/WelcomeScreen';

import TestScreen from './screens/TestScreen';
import ChoiceSendTypeScreen from './screens/login/ChoiceSendTypeScreen';
import CoureselScreen from './screens/CoureselScreen';

import HomePageScreen from './screens/HomePageScreen';

import RewardScreen from './screens/reward/RewardScreen';
import { Icon } from 'native-base';
import storage from 'redux-persist/lib/storage';
import { Actions } from 'react-native-router-flux';

import DeviceStorage from '../src/utils/DeviceStorage';

//import TabNavigation from './screens/TabNavigation';

var inited = false;
DeviceStorage.get("authToken").then( (val)=>{
});

const MenuIcon = ({focused , title}) => {
  return (
     <Icon active name='apps' style={{color: focused  ? '#34C47C' : '#194d33'}}/>
  );
};

const RewardIcon = ({focused , title}) => {
  return (
     <Icon active name='person' style={{color: focused  ? '#34C47C' : '#194d33'}}/>
  );
};

const MoreIcon = ({focused , title}) => {
  return (
     <Icon active name='swap' style={{color: focused  ? '#34C47C' : '#194d33'}}/>
  );
};

//https://github.com/aksonov/react-native-router-flux/blob/master/examples/react-native/App.js
const AppRouter = () => (
  <Router>
    <Overlay key="overlay">
        <Modal key="modal" hideNavBar>
           <Lightbox key="lightbox">

             <Stack key="root" titleStyle={{ alignSelf: 'center' }} hideNavBar>

                      <Drawer
                          key="drawer"
                          hideNavBar
                          contentComponent={SideDrawer}
                          drawerIcon={<DrawerImage />}
                          panHandlers={null}
                          drawerWidth={300}
                        >

                            <Scene
                                key="welcomeScreen"
                                component={WelcomeScreen}
                                title="Welcome"
                                hideNavBar
                                initial
                            />

                            <Scene
                                path={"/choiceSendTypeScreen/:useremail/:mobile/:choice/"}
                                key="choiceSendTypeScreen"
                                component={ChoiceSendTypeScreen}
                                hideNavBar
                            />

                            <Scene
                                key="loginScreen"
                                component={LoginScreen}
                                hideNavBar
                              />

                            <Scene
                                 key="homeScreen"
                                 component={HomeScreen}
                                 title="Restaurant App"
                                 titleStyle={{
                                   fontFamily: 'Roboto Slab',
                                   color: Colors.primaryColor,
                                 }}
                            />

                            <Scene
                                 key="signupScreen"
                                 component={SignupScreen}
                                 hideNavBar
                               />

                            <Scene
                              key="cuisineRestaurants"
                              component={CuisineRestaurantsScreen}
                              titleStyle={{
                                fontFamily: 'Roboto Slab',
                                color: Colors.primaryColor,
                              }}
                            />

                            <Scene
                              key="restaurantScreen"
                              component={RestaurantInfoScreen}
                            />

                            <Scene
                              path={"/cartScreen/:id/"}
                              key="cartScreen"
                              component={CartScreen}
                              navigationBarStyle={{
                                backgroundColor: '#fff',
                                elevation: 2,
                                borderBottomWidth: 1,
                                borderBottomColor: '#eee',
                              }}
                              titleStyle={{
                                fontFamily: 'Roboto Slab',
                                color: Colors.primaryColor,
                              }}
                              title="Cart"
                            />

                            <Scene
                              drawer={false}
                              key="paymentHome"
                              component={PaymentHome}
                            />

                            <Scene
                              key="paymentSuccess"
                              component={PaymentComplete}
                            />

                            <Scene
                              key="paymentFailed"
                              component={PaymentFailed}
                            />
                            <Scene
                              key="showAllOrders"
                              component={OrdersList}
                              title="My Orders"
                            />
                        </Drawer>

                       <Scene
                           path={"/choiceSendTypeScreen/:useremail/:mobile/:choice/"}
                           key="choiceSendTypeScreenS"
                           component={ChoiceSendTypeScreen}
                           hideNavBar
                       />

                       <Scene hideNavBar tabBarPosition="bottom"  initial={inited}>
                               <Tabs
                                 key="tabbar"
                                 swipeEnabled
                                 wrap={false}
                                 // 是否显示标签栏文字
                                 showLabel={true}
                                 tabBarStyle={{backgroundColor: "#34C47C"}}
                                 //tab选中的颜色#34C47C
                                 activeBackgroundColor="#EAEAEB"
                                 //tab没选中的颜色#EAEAEB
                                 inactiveBackgroundColor="#EAEAEB"
                               >
                                 <Scene
                                   key="Test"
                                   icon={MenuIcon}
                                   component={HomePageScreen}
                                   title="Menu"
                                 />

                                 <Scene
                                      key="rewardScreen"
                                      component={RewardScreen}
                                      title="Reward"
                                      icon={RewardIcon}
                                      hideNavBar
                                 />

                                 <Scene
                                   key="More"
                                   component={WelcomeScreen}
                                   title="More"
                                   icon={MoreIcon}
                                 />
                               </Tabs>
                      </Scene>
                 </Stack>

             </Lightbox>
          </Modal>
      </Overlay>
  </Router>
);

export default AppRouter;