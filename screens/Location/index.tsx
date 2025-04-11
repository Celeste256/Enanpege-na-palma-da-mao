import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,Linking, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './styles';


export default function LocationScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    const unifapCoords = {
        latitude: -0.00633,
        longitude: -51.08264,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
    
      useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
    
            if (status !== 'granted') {
                Alert.alert('Permissão necessária', 'Ative a localização para ver sua posição no mapa.');
                return;
            }
    
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
        })();
    }, []);  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Localização do Evento</Text>

        <MapView
            style={styles.map}
            initialRegion={unifapCoords}>
            <Marker
            coordinate={unifapCoords}
            title="UNIFAP"
            description="Universidade Federal do Amapá"
            />

            {location && (
                <Marker
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title="Você está bem aqui"
                pinColor="blue"
                />
            )}

        </MapView>

        <TouchableOpacity
         style={styles.button}
         onPress={() => {
            const url ='https://www.google.com/maps/dir/?api=1&destination=-0.00633,-51.08264';
            Linking.openURL(url);
         }}
         >
            <Text style={styles.buttonText}>Como chegar</Text>
         </TouchableOpacity>

        </View>
    );

}



