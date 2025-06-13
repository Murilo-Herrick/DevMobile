import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { saveLocation } from '../utils/storage';

export default function LocationForm({ navigation }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [titulo, setTitulo] = useState('');
  const [anotacao, setAnotacao] = useState('');

  const handleSave = async () => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      Alert.alert("Erro", "Latitude e longitude devem ser números válidos.");
      return;
    }

    if (!titulo.trim()) {
      Alert.alert("Erro", "O título é obrigatório.");
      return;
    }

    const novoLocal = {
      latitude: lat,
      longitude: lon,
      titulo,
      anotacao
    };

    await saveLocation(novoLocal);
    Alert.alert("Sucesso", "Local salvo com sucesso!");

    setLatitude('');
    setLongitude('');
    setTitulo('');
    setAnotacao('');

    navigation.navigate('Mapa');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Anotação"
        value={anotacao}
        onChangeText={setAnotacao}
      />

      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Mapa')}>
        <Text style={styles.buttonTextSecondary}>Ver Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Lista')}>
        <Text style={styles.buttonTextSecondary}>Ver Lista de Locais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4caf50',
  },
  secondaryButton: {
    backgroundColor: '#00796b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
