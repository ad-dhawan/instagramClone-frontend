import axios from '../../utils/axios';
import {StartLoading, stopLoading} from '../reduxHelpers';
import { ToastAndroid } from 'react-native';

export const login = ({username, password}) => async(dispatch) => {
    dispatch(StartLoading);

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