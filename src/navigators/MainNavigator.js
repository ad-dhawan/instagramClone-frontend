import React from 'react';
import {View, Text, Dimensions, SafeAreaView} from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../redux/actions/auth';
import BottomTab from '../components/BottomTab';

const {widht, height} = Dimensions.get('screen')

const MainNavigator = () => {
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch({
            type: 'LOGOUT'
        });
    }
    return(
        <>
            <View style={{height}}>
                <BottomTab />
            </View>

        </>
    )
};

export default MainNavigator;