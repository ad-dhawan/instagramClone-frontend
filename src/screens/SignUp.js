import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';

import {PRIMARY, BACKGROUND, WHITE_TEXT, TEXT} from '../utils/colors'
import { signup } from '../redux/actions/auth';

const {width, height} = Dimensions.get('screen');

const SignUp = ({navigation}) => {
    const [hidePass, setHidePass] = useState(true);
    const [hideCPass, setHideCPass] = useState(true);
    const [details, onChangeDetails] = useState({
      username: '',
      email: '',
      password: '',
      cPassword: '',
    });
  
    const setDetails = (field) => (value) =>
      onChangeDetails({
        ...details,
        [field]: value,
      });
      
      const [usernameError, setUsernameError] = useState(false);
      const [emailError, setEmailError] = useState(false);
      const [passwordError, setPasswordError] = useState(false);
      const [cPasswordError, setCPasswordError] = useState(false);

      const dispatch = useDispatch();

    const onSubmit = () => {
      if(!details.username) return setUsernameError(true)
      else if(!details.email) return setEmailError(true)
      else if(!details.password) return setPasswordError(true)
      else if(!details.cPassword) return setCPasswordError(true)
      else {
        dispatch(
            signup({
              userUsername: details.username,
              userEmail: details.email,
              userPassword: details.password,
            }),
          );
      }
    }

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
              <Text style={styles.signupText}>SignUp</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Username"
                    onChangeText={setDetails('username')}
                    value={details.username}
                    autoCapitalize="none"
                    mode="outlined"
                    outlineColor={PRIMARY}
                    theme={{colors: {primary: {PRIMARY}}}}
                    style={styles.textInput}
                    left={
                        <TextInput.Icon
                        name={() => <AntDesign name={'user'} size={20} color={PRIMARY} />}
                        />
                    }
                />
                <HelperText type="error" visible={usernameError}>
                  This field can't be empty
                </HelperText>

                <TextInput
                  label="Email"
                  onChangeText={setDetails('email')}
                  value={details.email}
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
                <HelperText type="error" visible={emailError}>
                  This field can't be empty
                </HelperText>
        
                <TextInput
                  label="Password"
                  onChangeText={setDetails('password')}
                  value={details.password}
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
        
                <TextInput
                  label="Confirm password"
                  onChangeText={setDetails('cPassword')}
                  value={details.cPassword}
                  secureTextEntry={hideCPass ? true : false}
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
                          name={hideCPass ? 'eye' : 'eye-with-line'}
                          size={20}
                          color={PRIMARY}
                          onPress={() => setHideCPass(!hideCPass)}
                        />
                      )}
                    />
                  }
                />
                <HelperText type="error" visible={cPasswordError}>
                  This field can't be empty
                </HelperText>

                <TouchableOpacity onPress={onSubmit} activeOpacity={0.5} style={styles.loginButtonContainer}>
                    <Text style={styles.loginText}>Submit</Text>
                </TouchableOpacity>
             </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        height
    },
    backIcon:{
        paddingTop: 8,
        paddingLeft: 8
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
    textInput: {
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
})

export default SignUp;