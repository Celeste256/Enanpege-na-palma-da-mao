import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from '../screens/Login'
import SignUp from '../screens/Signup'
import Welcome from '../screens/Welcome';
import { Colors } from '../components/styles';
import LocationScreen from '../screens/Location/index';



const Stack = createStackNavigator();
const { primary, tertiary } = Colors;
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: "transparent"
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Location"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={SignUp} />
                <Stack.Screen name="Location" component={LocationScreen} />
                <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;