import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import DirectMessage from '../screens/DirectMessage';

const Stack = createStackNavigator();

const StackNavigator = ({}) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="DirectMessage" component={DirectMessage} />
        </Stack.Navigator>
    )
}

export default StackNavigator;