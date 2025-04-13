import React from 'react';
import {StyleSheet, View} from 'react-native'

//screens
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Perfil from './screens/Perfil';
import Location from './screens/Location/index';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

