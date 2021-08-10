import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {PRIMARY, BACKGROUND, WHITE_TEXT} from '../utils/colors';
import DashboardNavigator from '../navigators/DashboardNavigator'
import Search from '../screens/Search';
import ReelsNavigator from '../navigators/ReelsNavigator';
import Post from '../screens/Post'
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor={WHITE_TEXT}
            inactiveColor="#cecece90"
        >
        <Tab.Screen
          name="Feed"
          component={DashboardNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcon name="search" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Reel"
          component={ReelsNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="video" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="hearto" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="user" color={color} size={24} />
            ),
          }}
        />
        </Tab.Navigator>
    )
}

export default BottomTab;