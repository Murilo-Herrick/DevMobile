import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { loadLocations, saveLocations } from '../utils/storage';

export default function ListScreen() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLocations();
      setLocations(data);
    };
    fetchData();
  }, []);

    const renderItem = ({ item, index }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{index + 1}. {item.titulo}</Text>
        <Text style={styles.coords}>Lat: {item.latitude.toFixed(6)} | Lon: {item.longitude.toFixed(6)}</Text>
        {item.anotacao ? <Text style={styles.note}>{item.anotacao}</Text> : null}

        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(index)}>
        <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
    </View>
    );


  const handleRemove = (index) => {
  Alert.alert(
    "Remover local",
    `Deseja remover o local "${locations[index].titulo}"?`,
    [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Remover", 
        style: "destructive", 
        onPress: async () => {
          const newLocations = [...locations];
          newLocations.splice(index, 1);
          setLocations(newLocations);
          await saveLocations(newLocations);
        }
      }
    ]
  );
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Locais Registrados</Text>

      {locations.length === 0 ? (
        <Text style={styles.emptyMessage}>Nenhum local registrado ainda.</Text>
      ) : (
        <FlatList
          data={locations}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#00796b',
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  coords: {
    color: '#444',
    marginBottom: 4,
  },
  note: {
    fontStyle: 'italic',
    color: '#666',
  },
  removeButton: {
  marginTop: 8,
  backgroundColor: '#e53935',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 6,
  alignSelf: 'flex-start',
},
removeButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},
});
