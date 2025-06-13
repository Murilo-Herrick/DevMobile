import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { loadLocations } from '../utils/storage';

export default function MapScreen() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await loadLocations();
      setLocations(data);
    };
    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.titulo}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{loc.titulo}</Text>
                <Text style={styles.calloutNote}>{loc.anotacao}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f1', // mesmo tom suave que a tela de registro para consistência
  },
  map: {
    flex: 1,
  },
  callout: {
    maxWidth: 200,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#00796b',
  },
  calloutNote: {
    fontSize: 14,
    color: '#444',
  },
});
