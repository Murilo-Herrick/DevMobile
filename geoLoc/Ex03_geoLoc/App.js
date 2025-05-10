// Importa a biblioteca React, necessária para criar componentes no React Native
import React from "react";

// Importa os componentes View (estrutura visual) e StatusBar (barra de status superior do sistema)
import { View, StatusBar } from "react-native";

// Importa o componente MapView (para exibir o mapa) e Marker (para adicionar marcadores no mapa)
import MapView, { Marker } from "react-native-maps";

// Importa os estilos definidos no arquivo "styles.js" para uso no layout
import styles from "./styles";

// Comentário informando que, antes de usar este código, é necessário instalar o pacote de mapas com Expo
// Comando: npx expo install react-native-maps

// Define a barra de status com ícones escuros sobre fundo claro
StatusBar.setBarStyle("dark-content");

// Declara e exporta o componente funcional principal chamado App
export default function App() {
  // Retorna a interface visual do aplicativo
  return (
    // View principal com estilo container aplicado
    <View style={styles.container}>

      {/* Componente de mapa, exibido ocupando a tela de acordo com o estilo definido */}
      <MapView
        style={styles.mapView}              // Define o estilo visual do mapa
        showsPointsOfInterest={false}       // Oculta pontos de interesse (como lojas, restaurantes, etc.)
        showsUserLocation                   // Exibe um ponto indicando a localização atual do usuário
        followsUserLocation                 // Faz o mapa seguir automaticamente o movimento do usuário
      >

        {/* Primeiro marcador no mapa, representando a "Duff Brewery" */}
        <Marker
          title="Duff Brewery"              // Título que aparece ao tocar no marcador
          description="Uma grande cervejaria artesanal!" // Descrição adicional
          coordinate={{                     // Coordenadas geográficas do marcador
            latitude: 43.8418728,
            longitude: -79.086082,
          }}
        />

        {/* Segundo marcador no mapa, representando a "Pawtucket Brewery" */}
        <Marker
          title="Pawtucket Brewery"         // Título do marcador
          description="A Cervejaria Histórica" // Descrição adicional
          coordinate={{                     // Coordenadas geográficas do segundo marcador
            latitude: 43.8401328,
            longitude: -79.085407,
          }}
        />

      </MapView>
    </View>
  );
}