import React from 'react';
import { StyleSheet, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native';
import LocationForm from '../components/LocationForm';

export default function RegisterLocationScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registrar Novo Local</Text>
        <LocationForm navigation={navigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#e6f2f1',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00796b',
  },
});

