import React from 'react';
import { View, StyleSheet, ActivityIndicator, Modal, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

import {PRIMARY, BACKGROUND, TEXT} from '../utils/colors'
import MainNavigator from '../navigators/MainNavigator';
import AuthNavigator from '../navigators/AuthNavigator'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

AntDesign.loadFont();
MaterialIcons.loadFont();

const Main = () => {
    const {loading, loggedIn} = useSelector((state) => state)
    return(
        <>
            {loggedIn ? <MainNavigator /> : <AuthNavigator />}

            <Modal transparent visible={loading} animationType="fade">
                <View style={styles.modal}>
                <ActivityIndicator color={PRIMARY} animating size={50} />
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor: '#ffffff80',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default Main;