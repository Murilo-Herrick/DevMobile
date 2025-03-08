import OlaPerfilFuncao from './componentes/OlaPerfilFuncao.jsx';
import OlaPerfilClasse from './componentes/OlaPerfilClasse.jsx';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao
        nome="Murilo"
        endereco="Rua tau"
        telefone="(16)997544500"
      ></OlaPerfilFuncao>

      <br></br>

      <OlaPerfilClasse
        nome="Murilo"
        endereco="Rua tau"
        telefone="(16)997544500"
      ></OlaPerfilClasse>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
