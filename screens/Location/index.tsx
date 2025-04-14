import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './styles'; // Preserva seus estilos atuais

export default function LocationScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef<MapView>(null);

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
        Alert.alert(
          'Permissão necessária',
          'Ative a localização para ver sua posição no mapa.'
        );
        setLoading(false);
        return;
      }

      try {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setLoading(false);

        // Move a câmera para o usuário
        mapRef.current?.animateToRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }, 1000);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível obter sua localização.');
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização do Evento</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 50 }} />
      ) : (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={unifapCoords}
          showsUserLocation
        >
          <Marker
            coordinate={unifapCoords}
            title="UNIFAP"
            description="Universidade Federal do Amapá"
          />
          {location && (
            <Marker
              coordinate={location.coords}
              title="Você está aqui"
              pinColor="blue"
            />
          )}
        </MapView>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            'https://www.google.com/maps/dir/?api=1&destination=-0.00633,-51.08264'
          )
        }
      >
        <Text style={styles.buttonText}>Como chegar</Text>
      </TouchableOpacity>
    </View>
  );
}
