import axios from '../../utils/axios';
import {StartLoading, stopLoading} from '../reduxHelpers';
import { ToastAndroid } from 'react-native';
// import axios from 'axios'

export const login = ({userUsername, userPassword}) => async(dispatch) => {
    dispatch(StartLoading);

  //   const url = "http://localhost:8000/api/auth/login"

  //   await axios.post(url,
  //     {

  //   }).then((response) => {
  //    console.log("reactNativeDemo","response get details:"+response.data);
  // })
  // .catch((error) => {
  //    console.log("ERROR",error);
  // });

    dispatch({
        type: 'LOGIN'
    });

    dispatch(stopLoading);
}

export const logout = ({}) => async(dispatch) => {
  dispatch(startLoading);

    dispatch({
        type: 'LOGOUT'
    });

  dispatch(stopLoading);
};