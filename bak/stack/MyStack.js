import { createStackNavigator } from 'react-navigation';

import MyScreen from '../my/Index';
import WelcomeScreen from '../my/Welcome';

const MyStack = createStackNavigator(
    {
        myScreen: { screen: MyScreen, header: null },
        welcomeScreen: { screen: WelcomeScreen, header: null },
    },
    {
        initialRouteName: 'myScreen',
        navigationOptions: {
             header: null
        }
    }
);

export default MyStack;