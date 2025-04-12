import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, Platform
} from 'react-native';

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
        console.log('Peça removida do estoque');
        setEstoque((prev) => {
          const novoEstoque = prev.filter((item) => item.id !== id);
          console.log('Novo estoque:', novoEstoque); 
          return novoEstoque;
        });
      }
    } else {
      Alert.alert('Excluir', 'Tem certeza que deseja remover a peça?', [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            console.log('Peça removida do estoque');
            setEstoque((prev) => {
              const novoEstoque = prev.filter((item) => item.id !== id);
              console.log('Novo estoque:', novoEstoque); 
              return novoEstoque;
            });
          },
        },
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
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da peça"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TouchableOpacity style={styles.button} onPress={adicionarPeca}>
        <Text style={styles.buttonText}>Adicionar Peça</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemText}>Nome: {item.nome}</Text>
              <Text style={styles.itemText}>Qtd: {item.quantidade}</Text>
              <Text style={styles.itemText}>Código: {item.codigo}</Text>
            </View>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#0275d8' }]}
              onPress={() => irParaEdicao(item)}
            >
              <Text style={styles.btnText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#d9534f' }]}
              onPress={() => excluirPeca(item.id)}
            >
              <Text style={styles.btnText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#F5F5F5',
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
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#2a2a40',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  btn: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
