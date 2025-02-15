import nativeLogo from './assets/NativeLogo.png';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={nativeLogo}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Exemplo Interativo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        onChangeText={setNome}
        value={nome}
      ></TextInput>

      <Button title="Enviar" onPress={lidarComClique} />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
