import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// Componente funcional
const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Perfil (Função)</Text>
      <Text><Text style={styles.label}>Nome:</Text> {nome}</Text>
      <Text><Text style={styles.label}>Endereço:</Text> {endereco}</Text>
      <Text><Text style={styles.label}>Telefone:</Text> {telefone}</Text>
    </View>
  );
};

// Componente de classe
class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Perfil (Classe)</Text>
        <Text><Text style={styles.label}>Nome:</Text> {this.props.nome}</Text>
        <Text><Text style={styles.label}>Endereço:</Text> {this.props.endereco}</Text>
        <Text><Text style={styles.label}>Telefone:</Text> {this.props.telefone}</Text>
      </View>
    );
  }
}

// Componente principal
export default function OlaMundoNovo02() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => {
    setEnviado(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ola Mundo Novo 02</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {enviado && (
        <>
          <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />
          <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
});
