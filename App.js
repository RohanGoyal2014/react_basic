import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import SplashScreen from './screens/SplashScreen';
import NewsContentScreen from './screens/NewsContentScreen';

export default class App extends React.Component {
    render() {
        return (
          <AppStackNavigator/>
        );
    }
}

const AppStackNavigator =  createStackNavigator({
    Splash:SplashScreen,
    NewsContent:NewsContentScreen,
    List:ListScreen,
});