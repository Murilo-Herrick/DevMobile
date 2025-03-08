import React from "react";
import { View, Text } from "react-native";

const OlaPerfilFuncao = (props) => {
  return (
    <View>
      <Text>Olá, {props.nome}, {props.endereco}, {props.telefone}</Text>
    </View>
  );
};

export default OlaPerfilFuncao;
