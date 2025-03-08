import React from "react";
import { StyleSheet, View, Text } from "react-native";

class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Olá, {this.props.nome}, {this.props.endereco}, {this.props.telefone}
        </Text>
      </View>
    );
  }
}

export default OlaPerfilClasse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
