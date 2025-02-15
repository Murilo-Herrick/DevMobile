import nativeLogo from './assets/NativeLogo.png';
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
  SectionList,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [itens, setItens] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const sections = [
    {
      title: 'seção 1',
      data: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
      ],
    },
    {
      title: 'seção 2',
      data: [
        { id: 3, name: 'item 3' },
        { id: 4, name: 'item 4' },
      ],
    },
  ];

  const handlePress = () => {
    alert('Botão pressinado!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        <Image source={nativeLogo} style={styles.Image}></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Digite algo..."
          onChangeText={setText}
          value={text}
        ></TextInput>
        <Button title="Clique aqui" onPress={handlePress} />

        <TouchableOpacity style={styles.TouchableOpacity} onPress={handlePress}>
          <Text style={styles.TouchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />

      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}></Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  TouchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  TouchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
