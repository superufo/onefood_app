import React from 'react'
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';

//import MainScreen from './main/Index';
//import RecommendScreen from './recommend/Index';
//import ReportScreen from './report/Index';
//import MyScreen from './my/Index';
//

import MyStack from './stack/MyStack';

import HomeScreen from './HomeScreen';
import RestaurantInfoScreen from './RestaurantInfoScreen';
import CuisineRestaurantsScreen from './CuisineRestaurantsScreen';

const TabNavigation = TabNavigator({
    homeScreen: { screen: HomeScreen, header: null },
    restaurantInfoScreen: { screen: RestaurantInfoScreen, header: null },
    cuisineRestaurantsScreen: { screen: CuisineRestaurantsScreen, header: null },
    myStack: MyStack
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate('homeScreen')}
                    >
                        <Icon name='home' />
                        <Text style={{ color: 'white' }}>主页</Text>
                    </Button>

                    <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate('restaurantInfoScreen')}
                    >
                        <Icon name='paper' />
                        <Text style={{ color: 'white' }}>推荐</Text>
                    </Button>

                     <Button
                        vertical
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate('cuisineRestaurantsScreen')}
                        >
                            <Icon name='navigate' />
                            <Text style={{ color: 'white' }}>信息</Text>
                     </Button>

                     <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate('myScreen')}
                            >
                                <Icon name='person' />
                                <Text style={{ color: 'white' }}>我的</Text>
                   </Button>


                </FooterTab>
            </Footer>
        );
    }
});

export default TabNavigation