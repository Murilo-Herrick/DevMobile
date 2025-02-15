import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

const App = () => {
  // varivale que armazena o texto utilizando o useState
  const [text, setText] = useState(' ');
  // Cria a lista aonde seram adicionados valores com o input e o button
  const [itens, setItens] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // funcao que emite um alerta quando o botao e pressioando
  const handlePress = () => {
    alert('Botão Pressionado!');
  };

  // funcao que adiciona o texto escrito no input na lista e depois limpa o texto no input
  const addItem = () => {
    setItens([...itens, { id: String(Date.now()), name: text }]);
    setText('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        <Text style={styles.title}>Exemplo de App React Native</Text>
      </View>

      <Button title="Adicionar item" onPress={addItem} />

      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={text}
        onChangeText={setText}
      />

      <FlatList
        data={itens}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.Button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// estilizacao
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
  Button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
