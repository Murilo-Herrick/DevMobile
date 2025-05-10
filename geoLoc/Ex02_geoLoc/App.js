// Importa a biblioteca React, necessária para criar componentes funcionais em React Native
import React from "react";

// Importa os componentes View (para estruturar a interface) e StatusBar (para personalizar a barra de status do sistema)
import { View, StatusBar } from "react-native";

// Importa o componente MapView da biblioteca react-native-maps, usado para exibir mapas no app
import MapView from "react-native-maps";

// Importa os estilos definidos externamente no arquivo "styles.js"
import styles from "./style.js";

// Define o estilo da barra de status como "dark-content", ou seja, ícones e texto escuros sobre fundo claro
StatusBar.setBarStyle("dark-content");

// Exporta um componente funcional padrão (sem nome) que será renderizado
export default () => (
  // Cria uma View principal com o estilo 'container' aplicado
  <View style={styles.container}>
    {/* Exibe um mapa com os seguintes comportamentos: */}

    <MapView
      // Aplica o estilo 'mapView' ao componente de mapa (ex.: tamanho, posição)
      style={styles.mapView}

      // Mostra a localização atual do usuário no mapa (ícone de posição azul)
      showsUserLocation={true}

      // Faz o mapa acompanhar automaticamente a movimentação do usuário em tempo real
      followsUserLocation={true}
    />
  </View>
);
