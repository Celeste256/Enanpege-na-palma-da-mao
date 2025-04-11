import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

const LocationScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão negada');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View>
      <Text>Localização:</Text>
      <Text>{location ? JSON.stringify(location.coords) : 'Carregando...'}</Text>
    </View>
  );
};

export default LocationScreen; // <- Isso aqui é essencial
