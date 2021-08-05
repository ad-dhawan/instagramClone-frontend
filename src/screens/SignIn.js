import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TEXT, PRIMARY, BACKGROUND, WHITE_TEXT } from '../utils/colors';

const {width, height} = Dimensions.get('screen')

const SignIn = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/instagram_logo.png')} style={styles.logo} />
                <Text style={styles.logoText}>Instagram Clone</Text>
            </View>
            <View style={styles.componentsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Username"
                        onChangeText={setUsername}
                        value={username}
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
                    <TextInput
                        label="Password"
                        onChangeText={setPassword}
                        value={password}
                        mode="outlined"
                        outlineColor={PRIMARY}
                        theme={{colors: {primary: {PRIMARY}}}}
                        style={styles.textInput}
                        left={
                            <TextInput.Icon
                            name={() => <AntDesign name={'lock1'} size={20} color={PRIMARY} />}
                            />
                        }
                    />
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.loginButtonContainer}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpDummyText}>Don't have an Account? <Text style={styles.signUpText}>Sign Up</Text></Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <MaterialIcons name={"copyright"} size={18} color={PRIMARY} />
                <Text>Made by Ankit Dhawan for Grape Town Internship</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        height,
        backgroundColor: BACKGROUND
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    logo:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    logoText: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10
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
        opacity: 0.4
    },
    componentsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
    },
    textInput: {
        marginVertical: 5,
    },
    forgotPasswordContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 5
    },
    forgotPasswordText: {
        fontSize: 15,
        fontWeight: '400'
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
    signUpContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        marginBottom: width / 4
    },
    signUpDummyText: {
        fontSize: 16,
        color: TEXT
    },
    signUpText: {
        fontWeight: 'bold',
        color: PRIMARY,
        fontSize: 18
    }
})

export default SignIn;