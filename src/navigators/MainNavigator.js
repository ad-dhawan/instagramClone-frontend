import React from 'react';
import {View, Text, Button} from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../redux/actions/auth';

const MainNavigator = () => {
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch({
            type: 'LOGOUT'
        });
    }
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Dashboard Screen</Text>
            <Button title="SignOut" onPress={onLogout} />
        </View>
    )
};

export default MainNavigator;