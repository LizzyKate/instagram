import 'react-native-gesture-handler';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {NavigationContainer} from '@react-navigation/native';
import Route from './router';
=

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};


export default App;
