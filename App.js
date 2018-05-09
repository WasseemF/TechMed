import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';

const Navigation = StackNavigator({
   Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    headerMode: 'screen'
});


export default Navigation;

