import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../../screens/Welcome';
import Location from '../../screens/Location';
import { Ionicons } from '@expo/vector-icons';
import { tabStyles } from './styles';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#6D28D9',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarStyle: tabStyles.tabBar,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Início') {
                        iconName = 'home';
                    } else if (route.name === 'Localização') {
                        iconName = 'map';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Início" component={Welcome} />
            <Tab.Screen name="Localização" component={Location} />
        </Tab.Navigator>
    );
}
