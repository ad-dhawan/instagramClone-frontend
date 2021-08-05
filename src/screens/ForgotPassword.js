import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity, BackHandler} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {PRIMARY, TEXT, BACKGROUND, WHITE_TEXT} from '../utils/colors';

const {width, height} = Dimensions.get('screen')

const ForgotPassword = ({navigation}) => {
    return(
        <SafeAreaView style={styles.mainContainer}>
            <Ionicons
        name="arrow-back-circle"
        size={40}
        color={PRIMARY}
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.dummyTextContainer}>
        <Image source={require('../assets/instagram_logo.png')} style={styles.logo} />
        <Text style={styles.signupText}>Reset Password</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          label="Username / Email"
          mode="outlined"
          outlineColor={PRIMARY}
          theme={{colors: {primary: {PRIMARY}}}}
          style={styles.textInput}
          left={
            <TextInput.Icon
              name={() => <AntDesign name={'mail'} size={20} color={PRIMARY} />}
            />
          }
        />
        <TouchableOpacity activeOpacity={0.5} style={styles.loginButtonContainer}>
            <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
            <View style={styles.footerContainer}>
                <Text>This Screen is Static</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height,
        backgroundColor: BACKGROUND
    },
    backIcon:{
        paddingTop: 8,
        paddingLeft: 8
    },
    textInput: {
        padding: 10
    },
    dummyTextContainer: {
      flexDirection: 'row',
      marginTop: '15%',
      alignItems: 'center',
      padding: 10
    },
    logo: {
      height: 80,
      width: 80,
      resizeMode: 'contain'
    },
    signupText: {
      fontSize: 26,
      letterSpacing: 1,
      marginLeft: '5%',
      fontWeight: 'bold',
      color: PRIMARY,
    },
    loginButtonContainer: {
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 20,
        marginTop: 10
    },
    loginText: {
        color: WHITE_TEXT,
        fontWeight: 'bold'
    },
    inputContainer: {
        padding: 10
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 'auto',
        left: 0,
        right: 0,
        bottom: width / 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ForgotPassword;