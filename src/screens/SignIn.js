import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { TEXT, PRIMARY, BACKGROUND, WHITE_TEXT } from '../utils/colors';
import { login } from '../redux/actions/auth';

const {width, height} = Dimensions.get('screen')

const SignIn = ({navigation}) => {
    const [hidePass, setHidePass] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const dispatch = useDispatch();

    const onLogin = () => {
        if(!username) return setUsernameError(true)
        else if(!password) return setPasswordError(true)
        else {
            dispatch(
                login({
                  userUsername: username,
                  userPassword: password,
                }),
              );
        }
    }

    return(
        <SafeAreaView style={styles.mainContainer}>
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
                        autoCapitalize="none"
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
                    <HelperText type="error" visible={usernameError}>
                      This field can't be empty
                    </HelperText>

                    <TextInput
                        label="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={hidePass ? true : false}
                        autoCapitalize="none"
                        mode="outlined"
                        outlineColor={PRIMARY}
                        theme={{colors: {primary: {PRIMARY}}}}
                        style={styles.textInput}
                        left={
                            <TextInput.Icon
                            name={() => <AntDesign name={'lock'} size={20} color={PRIMARY} />}
                            />
                        }
                        right={
                            <TextInput.Icon
                            name={() => (
                                <Entypo
                                name={hidePass ? 'eye' : 'eye-with-line'}
                                size={20}
                                color={PRIMARY}
                                onPress={() => setHidePass(!hidePass)}
                                />
                            )}
                            />
                        }
                    />
                    <HelperText type="error" visible={passwordError}>
                      This field can't be empty
                    </HelperText>

                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={onLogin} activeOpacity={0.5} style={styles.loginButtonContainer}>
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
        </SafeAreaView>
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
        padding: 10
    },
    inputContainer: {
    },
    textInput: {
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