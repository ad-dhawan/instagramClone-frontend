import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Post from '../screens/Post';
import Camera from '../screens/Camera.js';

const Stack = createStackNavigator();

const StackNavigator = ({}) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Reels" component={Post} />
            <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
    )
}

export default StackNavigator;