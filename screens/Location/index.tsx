import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


export default function LocationScreen() {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);

    const pontosInteresse = [
        { id: 1, nome: 'Auditório Principal', latitute:: -16.5875, longitude: -23.0009 },
        { id: 2, nome: 'Sala 01', latitute: -40.6000, longitude: -46.5678 },
        { id: 3, nome: 'Estande Tech', latitude: -23.5633, longitude: -46.6542 },
    ];
}

useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords); 
    })();
}, []);

return(
    <View style></View>
)