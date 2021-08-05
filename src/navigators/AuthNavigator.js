import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const StackNavigator = ({}) => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Forgot" component={Forgot} />
        </Stack.Navigator>
    )
}

export default StackNavigator;