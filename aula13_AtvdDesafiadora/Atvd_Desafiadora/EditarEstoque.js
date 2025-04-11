import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EditarEstoque({ route, navigation }) {
  const { peca, salvarEdicao } = route.params;

  const [nome, setNome] = useState(peca.nome);
  const [quantidade, setQuantidade] = useState(String(peca.quantidade));
  const [codigo, setCodigo] = useState(peca.codigo);

  const salvar = () => {
    const pecaAtualizada = {
      ...peca,
      nome,
      quantidade: parseInt(quantidade),
      codigo,
    };
    salvarEdicao(pecaAtualizada);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Peça</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Código" value={codigo} onChangeText={setCodigo} />

      <Button title="Salvar Alterações" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
});
