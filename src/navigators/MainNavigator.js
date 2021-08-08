import React from 'react';
import {View, Text, Dimensions, SafeAreaView} from 'react-native';

import BottomTab from '../components/BottomTab';

const {width, height} = Dimensions.get('screen')

const MainNavigator = () => {
    
    return(
        <>
            <View style={{height}}>
                <BottomTab />
            </View>

        </>
    )
};

export default MainNavigator;