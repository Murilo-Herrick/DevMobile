// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [locale, setLocale] = useState('');
  const [equipamentos, setEquipamentos] = useState([]);

  const listarEquipamentos = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const equipKeys = keys.filter(key => key.startsWith('equip:'));
      const stores = await AsyncStorage.multiGet(equipKeys);
      const lista = stores
        .map(([key, value]) => {
          try {
            return JSON.parse(value);
          } catch {
            return null;
          }
        })
        .filter(item => item !== null);
      setEquipamentos(lista);
    } catch (e) {
      Alert.alert('Erro ao listar equipamentos');
    }
  };

  useEffect(() => {
    listarEquipamentos();
  }, []);

  const atualizarLista = async () => {
    await listarEquipamentos();
  };

  const salvarEquipamento = async () => {
    if (!id || !name || !locale) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    try {
      await AsyncStorage.setItem(`equip:${id}`, JSON.stringify({ id, name, locale }));
      Alert.alert('Equipamento salvo!');
      atualizarLista();
    } catch (e) {
      Alert.alert('Erro ao salvar');
    }
  };

  const carregarEquipamento = async () => {
    try {
      const data = await AsyncStorage.getItem(`equip:${id}`);
      if (data) {
        const eq = JSON.parse(data);
        setName(eq.name);
        setLocale(eq.locale);
        Alert.alert('Equipamento carregado!');
      } else {
        Alert.alert('Equipamento não encontrado!');
      }
    } catch (e) {
      Alert.alert('Erro ao carregar');
    }
  };

  const alterarEquipamento = salvarEquipamento;

  const removerEquipamento = async () => {
    try {
      await AsyncStorage.removeItem(`equip:${id}`);
      setName('');
      setLocale('');
      Alert.alert('Equipamento removido!');
      atualizarLista();
    } catch (e) {
      Alert.alert('Erro ao remover');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TechFix - Equipamentos</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={locale}
        onChangeText={setLocale}
      />
      <View style={styles.buttonRow}>
        <Button title="Salvar" onPress={salvarEquipamento} />
        <Button title="Carregar" onPress={carregarEquipamento} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Alterar" onPress={alterarEquipamento} />
        <Button title="Remover" onPress={removerEquipamento} />
      </View>

      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Equipamentos cadastrados:</Text>
      <View style={{ borderWidth: 1, borderColor: '#aaa', marginTop: 5, width: 250, maxHeight: 200 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#eee' }}>
          <Text style={{ flex: 1, fontWeight: 'bold', padding: 4 }}>ID</Text>
          <Text style={{ flex: 2, fontWeight: 'bold', padding: 4 }}>Nome</Text>
          <Text style={{ flex: 2, fontWeight: 'bold', padding: 4 }}>Local</Text>
        </View>
        <FlatList
          data={equipamentos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: '#ddd' }}>
              <Text style={{ flex: 1, padding: 4 }}>{item.id}</Text>
              <Text style={{ flex: 2, padding: 4 }}>{item.name}</Text>
              <Text style={{ flex: 2, padding: 4 }}>{item.locale}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={{ padding: 4 }}>Nenhum equipamento cadastrado.</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: 250,
  },
});