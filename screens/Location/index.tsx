import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,Linking, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './styles';


export default function LocationScreen() {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Localização do Evento</Text>

        <MapView
            style={styles.map}
            initialRegion={{
                latitude: -23.55052,
                longitude: -46.633308,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
            coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
            title="Auditório Principal"
            description="Palestras e Apresentações"
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
            const url ='https://www.google.com/maps/dir/?api=1&destination=-23.55052,-46.633308';
            Linking.openURL(url);
         }}
         >
            <Text style={styles.buttonText}>Como chegar</Text>
         </TouchableOpacity>

        </View>
    );
}

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

