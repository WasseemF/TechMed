import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Navigation = StackNavigator({
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Profile: {screen: ProfileScreen},
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);


export default Navigation;

