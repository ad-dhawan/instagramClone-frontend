import axios from '../../utils/axios';
import {StartLoading, stopLoading} from '../reduxHelpers';
import { Alert } from 'react-native';

export const login = ({userUsername, userPassword}) => async(dispatch) => {
    dispatch(StartLoading);
    
    try{
      const formData = new FormData();
      formData.append('username', userUsername);
      formData.append('password', userPassword);

      const {data} = await axios.post('/api/auth/login', formData);

      if(data?.status === 200){
        dispatch({
          type: 'LOGIN',
          payload: {...data?.info},
        })
      } else {
        Alert.alert(
          "Authentication Failed",
          data?.message,
          [
            {
              text: "Okay",
              style: "cancel"
            },
          ]
        );
        throw data;
      }
    } catch(err){
      console.log('ERROR', err);
    }

    dispatch(stopLoading);
}

export const signup = ({userUsername, userEmail, userPassword}) => async(dispatch) => {
  dispatch(StartLoading);

  try{
    const formData = new FormData();
    formData.append('username', userUsername);
    formData.append('email', userEmail);
    formData.append('password', userPassword);

    console.log(userUsername, userEmail, userPassword);

    const {data} = await axios.post('/api/auth/register', formData);

    if(data?.status === 200){
      dispatch({
        type: 'LOGIN'
      })
    } else {
      Alert.alert(
        "Authentication Failed",
        data?.message,
        [
          {
            text: "Okay",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
        ]
      );
      throw data;
    }
  } catch (err) {
    console.log('ERROR', err);
  }

  dispatch(stopLoading);
}

export const logout = ({}) => async(dispatch) => {
  dispatch(startLoading);

    dispatch({
        type: 'LOGOUT'
    });

  dispatch(stopLoading);
};