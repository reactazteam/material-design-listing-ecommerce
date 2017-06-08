'use strict'
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    Dimensions
} from 'react-native'

import {
    DrawerNavigator,
    DrawerItems,
    DrawerView
} from 'react-navigation';

import Icon                     from 'react-native-vector-icons/FontAwesome';
import Home                     from './screens/Home'
import Line                   from './resources/components/Line'
import ListGrid                 from './screens/Listing/ListGrid'
import ListSwiper               from './screens/Listing/ListSwiper'


import DrawerContent from './DrawerContent'

const options = {
    contentComponent: DrawerContent,
    contentOptions: {
        activeBackgroundColor: '#f7f7f7',
        activeTintColor: '#7b7b7b',
        inactiveTintColor : '#7b7b7b',
        labelStyle: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'AvenirNext-Regular'
        },
        style: {
            marginVertical: 0,
            borderBottomWidth: 2,
            borderBottomColor :'red'
        },
    },
    drawerPosition: 'left' ,
    drawerWidth: Dimensions.get('window').width - 69,
    style: {
        paddingTop: 0, // This only works if you modify DrawerNavigator.js to pass style props. See link
    },
};

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const LineT = () => <View><Text>yy</Text></View>

const routerConfig = {
    ListSwiper: {
        screen: ListSwiper,
    },
    ListGrid: {
        screen: ListGrid,
    },
    Home: {
        screen: Home,
    },
}

const MyApp = DrawerNavigator(routerConfig , options );

const defaultGetStateForAction = MyApp.router.getStateForAction;
console.log(defaultGetStateForAction)

AppRegistry.registerComponent('ecommercematerialtheme', () => MyApp);
