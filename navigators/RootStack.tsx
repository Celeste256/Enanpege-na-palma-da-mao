import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from '../components/styles';
import Tabs from './Tabs';
import React from "react";
import Login from '../screens/Login'
import SignUp from '../screens/Signup'
import Welcome from '../screens/Welcome';
import LocationScreen from '../screens/Location/index';


const Stack = createStackNavigator();

const { primary, tertiary } = Colors;
const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20,
                },
            }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Location" component={LocationScreen} />
            <Stack.Screen
                name="Main"
                component={Tabs}
                options={{ headerTintColor: primary }}
            />
        </Stack.Navigator>
    );
};

export default RootStack;