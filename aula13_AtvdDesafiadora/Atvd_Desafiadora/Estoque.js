import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Estoque() {
  const [item, setItem] = useState('');
  const [listaEstoque, setListaEstoque] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === '') return;

    setListaEstoque((prev) => [
      ...prev,
      { id: Date.now().toString(), nome: item },
    ]);
    setItem('');
  };

  const removerItem = (id) => {
    setListaEstoque((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Estoque</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o item"
        value={item}
        onChangeText={setItem}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        data={listaEstoque}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => removerItem(item.id)}
          >
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={styles.remove}>[Remover]</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum item adicionado.</Text>}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  remove: {
    color: 'red',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});
