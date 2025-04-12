import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';

export default function RecuperarSenha({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const gerarSenha = () => {
    // Gera uma senha aleatória simples
    const nova = Math.random().toString(36).slice(-8); // 8 caracteres
    setNovaSenha(nova);
    setMensagem(`Nova senha enviada para o usuário ${usuario}:\n${nova}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recuperar Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#aaa"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Enviar nova senha</Text>
      </TouchableOpacity>

      {mensagem !== '' && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      <View style={styles.voltarContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar para o login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f', // fundo escuro
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#F5F5F5', // cor de texto clara
  },
  input: {
    backgroundColor: '#3a3a5c',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F58634',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#dff0d8', // cor de sucesso
    borderRadius: 8,
    color: '#3c763d',
    textAlign: 'center',
  },
  voltarContainer: {
    marginTop: 20,
  },
});
