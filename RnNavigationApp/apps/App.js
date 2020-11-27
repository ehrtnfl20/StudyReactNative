/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

import {createAppContainer} from 'react-navigation';
//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
//import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';

import Icon from 'react-native-vector-icons/AntDesign';


const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{color: tintColor}} size={20} name={'home'} />
        </View>
      ),
      activeColor: '#dc143c',
      inactivateColor: '#226557',
      barStyle: {backgroundColor:'#ffc0cb'},
    },
  },
  Detail: {screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{color: tintColor}} size={20} name={'appstore1'} />
        </View>
      ),
      activeColor: '#000080',
      inactivateColor: '#226557',
      barStyle: {backgroundColor:'#b0c4de'},
    },
  },
  Setting: {screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{color: tintColor}} size={20} name={'setting'} />
        </View>
      ),
      activeColor: '#006400',
      inactivateColor: '#226557',
      barStyle: {backgroundColor:'#8fbc8f'},
    },
  },
},
{
  initialRouteName: 'Home',
  shifting: true,
  swipeEnabled: true,
  showIcon: true,
  showLabel: false,

}
// {
// defaultNavigationOptions: ({navigation}) => ({
// swipeEnabled: true,
// tabBarIcon: ({horizontal, tintColor}) => {
//   const { routeName } = navigation.state; // Home/Detail/Setting
//   var iconName;
//   if (routeName === 'Home') { iconName = 'home';}
//   else if (routeName === 'Detail') {iconName = 'appstore1';}
//   else if (routeName === 'Setting') {iconName = 'setting';}
  
// return (
//   <Icon
//     name={iconName} size={horizontal ? 20 : 20} color={tintColor} />
//   );
// },
// }),
//  tabBarOptions: {
//    activeTintColor: '#ffffff',
//    inactiveTintColor: '#a9a9a9',
//    style: {
//      backgroundColor: '#000000',
//    },
//  },
//}
);

export default createAppContainer(TabNavigator);
