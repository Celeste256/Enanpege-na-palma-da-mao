import React from 'react';

//screens
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import Location from './screens/Location/index';

import RootStack from './navigators/RootStack';

export default function App() {
  return <RootStack/>;

}

