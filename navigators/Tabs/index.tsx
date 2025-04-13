import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Location from '../../screens/Location';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { tabStyles } from './styles';
import SignUp from '../../screens/Signup';
import Perfil from '../../screens/Perfil';
import Destaques from '../../screens/Destaques';
import Noticias from '../../screens/Noticias';
import Agenda from '../../screens/Agenda';
import Palestrantes from '../../screens/Palestrantes';
import Faq from '../../screens/Faq';

const Tab = createBottomTabNavigator();
const Aa = createMaterialTopTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#5470f5',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarStyle: tabStyles.tabBar,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Destaques') {
                        iconName = 'home';
                    } else if (route.name === 'Localização') {
                        iconName = 'map';
                    }
                    else if (route.name === 'Perfil') {
                        iconName = 'person';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Destaques" component={Destaques} />
            <Tab.Screen name="Noticias" component={Noticias} />
            <Tab.Screen name="Agenda" component={Agenda} />
            <Tab.Screen name="Localização" component={Location} />
            <Tab.Screen name="Palestrantes" component={Palestrantes} />
            <Tab.Screen name="Faq" component={Faq} />
            <Tab.Screen name="Perfil" component={Perfil} />
            
        </Tab.Navigator>
    );
}
