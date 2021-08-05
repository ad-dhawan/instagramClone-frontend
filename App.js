import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Main from './src/navigators/Main';
import {persistor, store} from './src/redux/store'
import {PRIMARY, BACKGROUND, TEXT} from './src/utils/colors'

const App = () => {
  return(
    <>
    <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />

    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Main />
        </PersistGate>
      </Provider>
    </NavigationContainer>
    </>
  )
};

export default App;