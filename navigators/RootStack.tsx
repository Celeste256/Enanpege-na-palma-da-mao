import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from '../components/styles';
import Tabs from './Tabs';
import React from "react";
import Login from '../screens/Login'
import SignUp from '../screens/Signup'
import Perfil from '../screens/Perfil';
import Destaques from '../screens/Destaques';
import LocationScreen from '../screens/Location/index';
import Faq from "../screens/Faq";
import Agenda from "../screens/Agenda";
import Palestrantes from "../screens/Palestrantes";
import Noticias from "../screens/Noticias";


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
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Location" component={LocationScreen} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="Agenda" component={Agenda} />
            <Stack.Screen name="Palestrantes" component={Palestrantes} />
            <Stack.Screen name="Noticias" component={Noticias} />
            <Stack.Screen name="Destaques" component={Destaques} />
            <Stack.Screen
                name="Main"
                component={Tabs}
                options={{ headerTintColor: primary }}
            />
        </Stack.Navigator>
    );
};

export default RootStack;