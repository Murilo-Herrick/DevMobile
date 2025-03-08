import React from "react";
import { View, Text } from "react-native";

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
