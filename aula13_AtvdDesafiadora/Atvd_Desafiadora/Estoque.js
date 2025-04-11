import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, FlatList,
  TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import { Platform } from 'react-native';

export default function Estoque({ navigation }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState('');
  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Parafuso', quantidade: 10, codigo: 'P001' },
    { id: '2', nome: 'Porca', quantidade: 15, codigo: 'P002' },
  ]);

  const adicionarPeca = () => {
    if (!nome || !quantidade || !codigo) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    const novaPeca = {
      id: Date.now().toString(),
      nome,
      quantidade: parseInt(quantidade),
      codigo,
    };

    setEstoque([...estoque, novaPeca]);
    setNome('');
    setQuantidade('');
    setCodigo('');
  };

const excluirPeca = (id) => {
  if (Platform.OS === 'web') {
    const confirmar = window.confirm('Tem certeza que deseja remover a peça?');
    if (confirmar) {
      setEstoque((prev) => prev.filter((item) => item.id !== id));
    }
  } else {
    Alert.alert('Excluir', 'Tem certeza que deseja remover a peça?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          setEstoque((prev) => prev.filter((item) => item.id !== id));
        }
      }
    ]);
  }
};

  

  const irParaEdicao = (peca) => {
    navigation.navigate('EditarEstoque', {
      peca,
      salvarEdicao: (pecaAtualizada) => {
        setEstoque((prev) =>
          prev.map((item) =>
            item.id === pecaAtualizada.id ? pecaAtualizada : item
          )
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque</Text>

      <TextInput style={styles.input} placeholder="Nome da peça" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Código" value={codigo} onChangeText={setCodigo} />
      <Button title="Adicionar Peça" onPress={adicionarPeca} />

      <FlatList
        style={{ marginTop: 20 }}
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text>Nome: {item.nome}</Text>
              <Text>Qtd: {item.quantidade}</Text>
              <Text>Código: {item.codigo}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => irParaEdicao(item)}>
              <Text style={styles.btnText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, { backgroundColor: '#d9534f' }]} onPress={() => excluirPeca(item.id)}>
              <Text style={styles.btnText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#0275d8',
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
