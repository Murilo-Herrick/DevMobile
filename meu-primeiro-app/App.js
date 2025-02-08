import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {' '}
      {/* contentContainerStyle applied here */}
      <View style={styles.header}>
        <Text style={styles.title}>Meu App Expo</Text>
      </View>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      ></Image>
      <TextInput
        style={styles.input}
        placeholder="Digite Algo..."
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Text style={styles.textOutput}>Você digitou: {text}</Text>
      <Button
        title="Pressione-me"
        onPress={() => alert('Botão Pressionado!')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  textOutput: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});
